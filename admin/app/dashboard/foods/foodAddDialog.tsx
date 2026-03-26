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

export function FoodAddDialog() {
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
            <Input type="text" placeholder="Food name" />
          </div>
          <div className="flex">
            <Label className="min-w-30">Ingredients</Label>
            <Input type="text" placeholder="Food name" />
          </div>
          <div className="flex">
            <Label className="min-w-30">Price</Label>
            <Input type="text" placeholder="Food name" />
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
