import express, { Request, Response } from "express";
import { addOrder } from "../controllers/foodOrder/orderFood";
import { getOrders } from "../controllers/foodOrder/get-orders";
import { authMidlleware } from "../middleware/auth-middleware";
import { adminMidlleware } from "../middleware/admin-middleware";
import { getOrderById } from "../controllers/foodOrder/get-order-By-Id";

const orderRouter = express.Router();

orderRouter.post("/foodOrder", authMidlleware, addOrder);
orderRouter.get("/foodOrder", authMidlleware, adminMidlleware, getOrders);
orderRouter.get("/foodOrder/:id", authMidlleware, getOrderById);

export default orderRouter;
