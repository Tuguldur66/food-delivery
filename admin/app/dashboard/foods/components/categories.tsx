import { Category } from "@/app/types/category";
import { Badge } from "@/components/ui/badge";

type CategoriesProps = {
  categories: Category[];
};

export function Categories({ categories }: CategoriesProps) {
  const totalFoods = categories.reduce((sum, c) => sum + c.foods.length, 0);

  return (
    <div className="flex gap-2">
      <Badge className="w-fit h-9 text-xl/tight font-medium" variant="outline">
        All dishes
        <Badge>{totalFoods}</Badge>
      </Badge>
      {categories.map((category) => (
        <div className="flex gap-1" key={category.id}>
          <Badge
            className="w-fit h-9 text-xl/tight font-medium"
            variant="outline"
          >
            {category.name}
            <Badge>{category.foods.length}</Badge>
          </Badge>
        </div>
      ))}
    </div>
  );
}
