"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFoodCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const addFoodCategory = async (req, res) => {
    const { name } = req.body;
    const foodCategories = await prisma_1.prisma.foodCategory.create({
        data: {
            name,
        },
    });
    res.status(200).json({
        message: "Success",
        foodCategories,
    });
};
exports.addFoodCategory = addFoodCategory;
