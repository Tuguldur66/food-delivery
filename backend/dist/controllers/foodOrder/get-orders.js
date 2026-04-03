"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const prisma_1 = require("../../lib/prisma");
const getOrders = async (req, res) => {
    try {
        const orders = await prisma_1.prisma.foodOrder.findMany({
            include: {
                foodOrderItems: true,
            },
        });
        res.json(orders);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "error" });
    }
};
exports.getOrders = getOrders;
