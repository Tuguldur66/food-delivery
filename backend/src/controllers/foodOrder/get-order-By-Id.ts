import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const order = await prisma.foodOrder.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (order) {
      res.status(200).json({ message: "successful", order });
    }
  } catch (error) {
    res.status(404).json({ message: "order not found" });
  }
};
