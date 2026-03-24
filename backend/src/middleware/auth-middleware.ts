import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type JWTPayload = {
  data: {
    userId: number;
    email: string;
    role: "user" | "admin";
  };
};

export const authMidlleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.send("no token");
    throw new Error("Must have token");
  }

  const accessToken = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(accessToken, "secret") as JWTPayload;

    req.user = decoded.data;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "invalid credentials" });
  }
};
