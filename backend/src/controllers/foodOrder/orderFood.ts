import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

type FoodOrder = { foodId: number; quantity: number };

type BodyType = {
  foodInput: FoodOrder[];
};

export const addOrder = async (req: Request, res: Response) => {
  const { foodInput }: BodyType = req.body;

  try {
    const foodIds = foodInput.map((food) => food.foodId);

    const totalPrice = await calcFoodsTotalPrice(foodIds, foodInput);

    const order = await prisma.foodOrder.create({
      data: {
        status: "pending",
        totalPrice: totalPrice,
      },
    });

    const foodsWithOrderId = foodInput.map((food) => ({
      ...food,
      foodOrderId: order.id,
    }));

    const items = await prisma.foodOrderItem.createMany({
      data: foodsWithOrderId,
    });

    res.json({ items, order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error" });
  }
};

const calcFoodsTotalPrice = async (
  foodIds: number[],
  foodInput: FoodOrder[],
) => {
  const foods = await prisma.food.findMany({
    where: {
      id: {
        in: foodIds,
      },
    },
  });

  const foodsWithQuantity = foodInput.map((f) => {
    const foundedFood = foods.find((food) => food.id === f.foodId);

    return { ...foundedFood, quantity: f.quantity };
  });

  const totalPrice = foodsWithQuantity.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.quantity,
    0,
  );

  return totalPrice.toString();
};
