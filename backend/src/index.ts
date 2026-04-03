import express from "express";
import cors from "cors";
import userRouter from "./router/users.route";
import categoryRouter from "./router/foodCategory.route";
import orderRouter from "./router/foodOrder.route";
import foodRouter from "./router/foods.route";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use(foodRouter);

app.use(userRouter);

app.use(categoryRouter);

app.use(orderRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
