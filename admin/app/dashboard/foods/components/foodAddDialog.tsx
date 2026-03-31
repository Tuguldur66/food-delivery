"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Category } from "@/app/types/category";
import { ChangeEventHandler, useState } from "react";
import { CategorySelector } from "./categorySelector";
import { Food } from "@/app/types/food";
import { FoodForm } from "@/app/types/foodForm";

type FoodAddDialogProps = {
  categories: Category[];
};
export function FoodAddDialog(props: FoodAddDialogProps) {
  const { categories } = props;
  const [food, setFood] = useState<FoodForm>({
    name: "",
    price: "0",
    categoryId: 1,
    ingredients: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const onSelectCategory = (categoryId: number) => {
    setFood({
      ...food,
      categoryId: categoryId,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <Label className="min-w-30">Dish name</Label>
            <Input
              type="text"
              placeholder="Food name"
              name="foodName"
              onChange={handleChange}
            />
          </div>
          <CategorySelector
            categories={categories}
            onSelect={onSelectCategory}
          />
          <div className="flex">
            <Label className="min-w-30">Ingredients</Label>
            <Input
              type="text"
              placeholder="Food name"
              name="Ingerdients"
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <Label className="min-w-30">Price</Label>
            <Input
              type="text"
              placeholder="Food name"
              name="price"
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
