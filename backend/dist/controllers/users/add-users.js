"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../../lib/prisma");
const addUsers = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await prisma_1.prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });
    res.status(200).json({
        message: "success",
        user,
    });
};
exports.addUsers = addUsers;
