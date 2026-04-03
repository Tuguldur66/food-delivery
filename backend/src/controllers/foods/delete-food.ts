import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const deleteFood = async (req: Request, res: Response) => {
  const { id } = req.params;

  const foundedfood = await prisma.food.findUnique({
    where: {
      id: Number(id),
    },
  });
};
