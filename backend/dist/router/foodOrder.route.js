"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderFood_1 = require("../controllers/foodOrder/orderFood");
const get_orders_1 = require("../controllers/foodOrder/get-orders");
const auth_middleware_1 = require("../middleware/auth-middleware");
const admin_middleware_1 = require("../middleware/admin-middleware");
const get_order_By_Id_1 = require("../controllers/foodOrder/get-order-By-Id");
const orderRouter = express_1.default.Router();
orderRouter.post("/foodOrder", auth_middleware_1.authMidlleware, orderFood_1.addOrder);
orderRouter.get("/foodOrder", auth_middleware_1.authMidlleware, admin_middleware_1.adminMidlleware, get_orders_1.getOrders);
orderRouter.get("/foodOrder/:id", auth_middleware_1.authMidlleware, get_order_By_Id_1.getOrderById);
exports.default = orderRouter;
