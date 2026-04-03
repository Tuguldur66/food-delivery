"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../../lib/prisma");
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma_1.prisma.user.findFirst({
        where: { email: email },
    });
    if (!user)
        throw new Error("User not found");
    const isValid = await bcrypt_1.default.compare(password, user.password);
    console.log("isValid: ", isValid);
    if (isValid) {
        const accessToken = jsonwebtoken_1.default.sign({
            data: {
                userID: user.id,
                email: user.email,
                role: "user",
            },
        }, "secret", { expiresIn: "1h" });
        res.status(200).json({ accessToken });
    }
    else {
        res.status(400).json({ message: "invalid credentials" });
    }
};
exports.login = login;
