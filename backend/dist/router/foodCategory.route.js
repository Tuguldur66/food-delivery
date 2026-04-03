"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_foodCategory_1 = require("../controllers/foodCategory/get-foodCategory");
const addFoodCategory_1 = require("../controllers/foodCategory/addFoodCategory");
const categoryRouter = express_1.default.Router();
categoryRouter.get("/foodCategories", get_foodCategory_1.getFoodCategory);
categoryRouter.post("/foodCategories", addFoodCategory_1.addFoodCategory);
exports.default = categoryRouter;
