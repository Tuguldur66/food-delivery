"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_users_1 = require("../controllers/users/get-users");
const add_users_1 = require("../controllers/users/add-users");
const login_1 = require("../controllers/auth/login");
const userRouter = express_1.default.Router();
userRouter.get("/users", get_users_1.getUsers);
userRouter.post("/users", add_users_1.addUsers);
userRouter.post("/users/login", login_1.login);
exports.default = userRouter;
