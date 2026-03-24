import { Request, Response } from "express";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcrypt";

export const addUsers = async (req: Request, res: Response) => {
  const { email, password, age, phoneNumber } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      age,
      phoneNumber,
    },
  });

  res.status(200).json({
    message: "success",
    user,
  });
};
