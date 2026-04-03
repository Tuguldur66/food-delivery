"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_food_1 = require("../controllers/foods/get-food");
const add_food_1 = require("../controllers/foods/add-food");
const delete_food_1 = require("../controllers/foods/delete-food");
const auth_middleware_1 = require("../middleware/auth-middleware");
const admin_middleware_1 = require("../middleware/admin-middleware");
const foodRouter = express_1.default.Router();
foodRouter.get("/foods", get_food_1.getFoods);
foodRouter.post("/foods", add_food_1.addFood);
foodRouter.delete("/foods/:id", auth_middleware_1.authMidlleware, admin_middleware_1.adminMidlleware, delete_food_1.deleteFood);
exports.default = foodRouter;
