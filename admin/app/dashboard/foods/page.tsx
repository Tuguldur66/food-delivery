import { Badge } from "@/components/ui/badge";
import { AddCategory } from "./addCategories";
import { FoodAddDialog } from "./foodAddDialog";

export default function FoodsPage() {
  return (
    <div>
      <Badge variant="outline">Badge</Badge>
      <AddCategory />
      <FoodAddDialog />
    </div>
  );
}
