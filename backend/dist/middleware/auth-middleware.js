"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMidlleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMidlleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.send("no token");
        throw new Error("Must have token");
    }
    const accessToken = authorization.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(accessToken, "secret");
        req.user = decoded.data;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "invalid credentials" });
    }
};
exports.authMidlleware = authMidlleware;
