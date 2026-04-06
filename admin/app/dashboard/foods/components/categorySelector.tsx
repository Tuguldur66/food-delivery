import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";
import { Category } from "@/app/types/category";

type CategorySelectorProps = {
  categories: Category[];
  onSelect: (categoryId: number) => void;
};

export function CategorySelector(props: CategorySelectorProps) {
  const { categories, onSelect } = props;
  return (
    <Select onValueChange={(value) => onSelect(Number(value))}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((category) => {
            return (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
