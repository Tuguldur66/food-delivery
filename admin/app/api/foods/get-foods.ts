import { Food } from "@/app/types/food";

export const getFoods = async (): Promise<Food[]> => {
  const response = await fetch("http://localhost:3001/foods", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
