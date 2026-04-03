"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFood = void 0;
const prisma_1 = require("../../lib/prisma");
const addFood = async (req, res) => {
    const { name, price, foodCategoryId } = req.body;
    const food = await prisma_1.prisma.food.create({
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
exports.addFood = addFood;
