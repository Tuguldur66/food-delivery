import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../lib/prisma";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);
  console.log("isValid: ", isValid);

  if (isValid) {
    const accessToken = jwt.sign(
      {
        data: {
          userID: user.id,
          email: user.email,
          role: "user",
        },
      },
      "secret",
      { expiresIn: "1h" },
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(400).json({ message: "invalid credentials" });
  }
};
