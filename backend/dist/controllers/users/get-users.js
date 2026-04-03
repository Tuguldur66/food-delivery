"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const prisma_1 = require("../../lib/prisma");
const getUsers = async (req, res) => {
    const users = await prisma_1.prisma.user.findMany();
    res.status(200).json({
        message: "Success",
        users,
    });
};
exports.getUsers = getUsers;
