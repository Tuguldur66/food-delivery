"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = void 0;
const prisma_js_1 = require("../../lib/prisma.js");
const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        const order = await prisma_js_1.prisma.foodOrder.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (order) {
            res.status(200).json({ message: "successful", order });
        }
    }
    catch (error) {
        res.status(404).json({ message: "order not found" });
    }
};
exports.getOrderById = getOrderById;
