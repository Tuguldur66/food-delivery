import { AddCategory } from "./components/addCategories";
import { FoodAddDialog } from "./components/foodAddDialog";
import { Categories } from "./components/categories";
import { getFoods } from "@/app/api/foods/get-foods";
import { getCategories } from "@/app/api/foods/get-category";

export default async function FoodsPage() {
  const categories = await getCategories();
  const foods = await getFoods();

  return (
    <div className="bg-gray-100 w-screen h-screen ">
      <div className="">
        <div className=" ml-6 mt-6 mr-10 flex align-bottom h-59 w-292.75 ">
          <div className="flex flex-row gap-2 h-44 w-297.5 bg-white">
            <Categories categories={categories} />
            <AddCategory />
          </div>
        </div>
      </div>
      <FoodAddDialog categories={categories} />
    </div>
  );
}
