import express, { Request, Response } from "express";
import { getUsers } from "../controllers/users/get-users";
import { addUsers } from "../controllers/users/add-users";
import { login } from "../controllers/auth/login";
import { authMidlleware } from "../middleware/auth-middleware";
import { adminMidlleware } from "../middleware/admin-middleware";

const userRouter = express.Router();

userRouter.get("/users", authMidlleware, adminMidlleware, getUsers);
userRouter.post("/users", addUsers);
userRouter.post("/users/login", login);
export default userRouter;
