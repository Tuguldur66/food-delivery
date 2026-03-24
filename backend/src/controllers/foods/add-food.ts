import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const addFood = async (req: Request, res: Response) => {
  const { name, price, foodCategoryId } = req.body;

  const food = await prisma.food.create({
    data: {
      name,
      price,
      foodCategoryId,
    },
  });

  res.status(200).json({
    message: "success",
    food,
  });
};
