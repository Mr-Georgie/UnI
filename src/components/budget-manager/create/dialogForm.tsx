"use client";

import { Button } from "../../ui/button";
import { DialogClose } from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";
import { useToast } from "../../ui/use-toast";

function DialogForm() {
    const { toast } = useToast();

    return (
        <div>
            <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Select defaultValue="6">
                            <SelectTrigger id="duration">
                                <SelectValue placeholder="Specify duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3">3 months</SelectItem>
                                <SelectItem value="6">6 months</SelectItem>
                                <SelectItem value="9">9 months</SelectItem>
                                <SelectItem value="12">1 year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="source">Funding Source</Label>
                        <Select defaultValue="account">
                            <SelectTrigger id="source">
                                <SelectValue placeholder="Specify funding source" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="account">
                                    My account
                                </SelectItem>
                                <SelectItem value="card">My Card</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="name">Budget Name</Label>
                    <Input id="name" placeholder="e.g MyWedding24" />
                </div>
            </div>
            <div className="flex justify-between space-x-2 pt-5 pb-2">
                <DialogClose asChild>
                    <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button
                    className="bg-blue"
                    onClick={() => {
                        toast({
                            description: "Budget Created Successfully!",
                        });
                    }}
                >
                    Done
                </Button>
            </div>
        </div>
    );
}

export default DialogForm;
