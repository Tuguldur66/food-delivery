import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const getFoodCategory = async (req: Request, res: Response) => {
  const foodCategories = await prisma.foodCategory.findMany({
    include: { foods: true },
  });

  res.status(200).json({
    message: "Success",
    foodCategories,
  });
};
