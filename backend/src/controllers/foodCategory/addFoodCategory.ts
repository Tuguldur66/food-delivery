import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const addFoodCategory = async (req: Request, res: Response) => {
  const { name } = req.body;

  const foodCategories = await prisma.foodCategory.create({
    data: {
      name,
    },
  });
  res.status(200).json({
    message: "Success",
    foodCategories,
  });
};
