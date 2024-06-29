"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export function SideBarSmall() {
    return (
        <div>
            <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4"></div>
        </div>
    );
}
