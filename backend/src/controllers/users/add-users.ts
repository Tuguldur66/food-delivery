import { Request, Response } from "express";

import bcrypt from "bcrypt";
import { prisma } from "../../lib/prisma";

export const addUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  res.status(200).json({
    message: "success",
    user,
  });
};
