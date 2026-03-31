import { Category } from "./category";

export type Food = {
  name: string;
  price: string;
  ingredients: string;
  id: number;
  category: Category;
  foodCategoryId: number;
};
