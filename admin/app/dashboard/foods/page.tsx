import { AddCategory } from "./components/addCategories";
import { FoodAddDialog } from "./components/foodAddDialog";
import { Categories } from "./components/categories";
import { getFoods } from "@/app/api/foods/get-foods";
import { getCategories } from "@/app/api/foods/get-category";

export default async function FoodsPage() {
  const categories = await getCategories();

  console.log(categories);

  return (
    <div>
      <div className="flex flex-row gap-4">
        <Categories categories={categories} />
        <AddCategory />
      </div>
      <FoodAddDialog categories={categories} />
    </div>
  );
}
