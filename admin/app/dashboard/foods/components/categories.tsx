import { Food } from "@/app/types/food";
import { Category } from "@/app/types/category";
import { Badge } from "@/components/ui/badge";

type CategoriesProps = {
  categories: Category[];
  foods: Food[];
};

export async function Categories({ categories, foods }: CategoriesProps) {
  return (
    <div className="flex gap-4">
      <Badge className="w-fit h-9  text-xl/tight font-medium" variant="outline">
        All dishes
        <Badge>{foods.length}</Badge>
      </Badge>
      {categories.map((category) => {
        return (
          <div className="flex gap-1">
            <Badge
              className="w-fit h-9  text-xl/tight font-medium"
              key={category.id}
              variant="outline"
            >
              {category.name}
              <Badge>{category.foods.length}</Badge>
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
