import { Category } from "@/app/types/category";

type CategoriesProps = {
  categories: Category[];
};

export async function Categories({ categories }: CategoriesProps) {
  return (
    <div>
      {categories.map((category) => {
        return <div key={category.id}>{category.name}</div>;
      })}
    </div>
  );
}
