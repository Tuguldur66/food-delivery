"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMidlleware = void 0;
const adminMidlleware = (req, res, next) => {
    const user = req.user;
    if (user?.role === "admin") {
        next();
    }
    else {
        return res.status(400).json({ message: "not admin" });
    }
};
exports.adminMidlleware = adminMidlleware;
