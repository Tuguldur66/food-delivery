"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = void 0;
const prisma_1 = require("../../lib/prisma");
const addOrder = async (req, res) => {
    const { foodInput } = req.body;
    try {
        const foodIds = foodInput.map((food) => food.foodId);
        const totalPrice = await calcFoodsTotalPrice(foodIds, foodInput);
        const order = await prisma_1.prisma.foodOrder.create({
            data: {
                status: "pending",
                totalPrice: totalPrice,
            },
        });
        const foodsWithOrderId = foodInput.map((food) => ({
            ...food,
            foodOrderId: order.id,
        }));
        const items = await prisma_1.prisma.foodOrderItem.createMany({
            data: foodsWithOrderId,
        });
        res.json({ items, order });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
};
exports.addOrder = addOrder;
const calcFoodsTotalPrice = async (foodIds, foodInput) => {
    const foods = await prisma_1.prisma.food.findMany({
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
    const totalPrice = foodsWithQuantity.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0);
    return totalPrice.toString();
};
