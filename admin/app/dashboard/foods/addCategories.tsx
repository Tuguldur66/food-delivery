"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoaderCircle, Plus } from "lucide-react";
import { useState } from "react";

export function addCategory() {
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState();
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    setCategoryName(event.target.value);
  };

  const onAddCategory = async () => {
    setLoading(true);
    const postBody = {
      name: categoryName,
    };
    try {
      await fetch("http://localhost:3000/foodCategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <Dialog open={open} onChange={setOpen}>
        <DialogTrigger asChild>
          <div classname="w-9 h-9 bg-red-500 flex justify center items-center rounded-full text-white">
            <Plus size={16} />
          </div>
        </DialogTrigger>
        <DialogContent classname="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add new category</DialogTitle>
          </DialogHeader>
          <div classname="flex items-center gap-2">
            <div classname="grid flex-1 gap-2">
              <Label>Category name</Label>
              <Input type="text" onChange={onChange} />
            </div>
          </div>

          <DialogFooter classname="sm:justify-end">
            <Button type="button" onClick={onAddCategory} disabled={loading}>
              {loading ? (
                <LoaderCircle classname="animate-spin" />
              ) : (
                "Add category"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
