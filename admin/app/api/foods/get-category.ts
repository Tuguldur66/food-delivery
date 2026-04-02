import { Category } from "@/app/types/category";
import { revalidatePath } from "next/cache";

export interface GetCategoriesResponse {
  message: string;
  foodCategories: Category[];
}

export const getCategories = async () => {
  const response = await fetch("http://localhost:3001/foodCategories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json()) as GetCategoriesResponse;
  return data.foodCategories;
};
