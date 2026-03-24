import express, { Request, Response } from "express";
import { getFoodCategory } from "../controllers/foodCategory/get-foodCategory";

const categoryRouter = express.Router();

categoryRouter.get("/foodCategories", getFoodCategory);

export default categoryRouter;
