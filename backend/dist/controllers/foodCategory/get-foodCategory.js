"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodCategory = void 0;
const prisma_1 = require("../../lib/prisma");
const getFoodCategory = async (req, res) => {
    const foodCategories = await prisma_1.prisma.foodCategory.findMany({
        include: { foods: true },
    });
    res.status(200).json({
        message: "Success",
        foodCategories,
    });
};
exports.getFoodCategory = getFoodCategory;
