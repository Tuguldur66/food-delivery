"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFood = void 0;
const prisma_1 = require("../../lib/prisma");
const deleteFood = async (req, res) => {
    const { id } = req.params;
    const foundedfood = await prisma_1.prisma.food.findUnique({
        where: {
            id: Number(id),
        },
    });
};
exports.deleteFood = deleteFood;
