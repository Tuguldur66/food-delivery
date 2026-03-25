import express, { Request, Response } from "express";
import { getFoodCategory } from "../controllers/foodCategory/get-foodCategory";
import { addFoodCategory } from "../controllers/foodCategory/addFoodCategory";

const categoryRouter = express.Router();

categoryRouter.get("/foodCategories", getFoodCategory);
categoryRouter.post("/foodCategories", addFoodCategory);

export default categoryRouter;
