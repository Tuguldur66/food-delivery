import express, { Request, Response } from "express";
import foodRouter from "./router/foods.route";
import userRouter from "./router/users.route";
import categoryRouter from "./router/foodCategory.route";
import orderRouter from "./router/foodOrder.route";

const app = express();
const port = 3000;

app.use(express.json());

app.use(foodRouter);

app.use(userRouter);

app.use(categoryRouter);

app.use(orderRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
