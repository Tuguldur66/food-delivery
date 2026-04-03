import express from "express";
import { getFoods } from "../controllers/foods/get-food";
import { addFood } from "../controllers/foods/add-food";
import { deleteFood } from "../controllers/foods/delete-food";
import { authMidlleware } from "../middleware/auth-middleware";
import { adminMidlleware } from "../middleware/admin-middleware";

const foodRouter = express.Router();

foodRouter.get("/foods", getFoods);
foodRouter.post("/foods", addFood);
foodRouter.delete("/foods/:id", authMidlleware, adminMidlleware, deleteFood);
export default foodRouter;
