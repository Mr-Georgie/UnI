"use client";

import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChangeEvent, useState } from "react";
import { Budget } from "./zdata";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button, buttonVariants } from "../../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import DialogForm from "./dialogForm";

type SelectItemFunction = (index: number) => void;
type RemoveItemFunction = (itemName: string) => void;

interface Props {
    items: Budget[];
    setItems: React.Dispatch<React.SetStateAction<Budget[]>>;
    selectItem: SelectItemFunction;
    removeItem: RemoveItemFunction;
}

const SelectionList: React.FC<Props> = ({
    items,
    setItems,
    selectItem,
    removeItem,
}) => {
    const [invalidCostError, setInvalidCostError] = useState("");

    const handleCostChange = (
        event: ChangeEvent<HTMLInputElement>,
        itemName: string
    ) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === itemName
                    ? { ...item, cost: Number(event.target.value) }
                    : item
            )
        );
    };

    const handleNameChange = (
        event: ChangeEvent<HTMLInputElement>,
        itemName: string
    ) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.name === itemName
                    ? { ...item, artist: event.target.value }
                    : item
            )
        );
    };

    const totalSelectedCost = () => {
        return items
            .filter((item) => item.selected)
            .reduce((total, item) => total + item.cost, 0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const checkZeroCostSelectedItems = (): void => {
        const zeroCostItems = items.filter(
            (item) => item.selected && item.cost === 0
        );
        if (zeroCostItems.length > 0) {
            const itemName = zeroCostItems.map((item) => item.name).join(", ");
            setInvalidCostError(
                `The following selected budget have a cost of ₦0: ${itemName}`
            );
        }
    };

    return (
        <div className="border rounded-lg p-4 md:min-h-[480px] flex flex-col justify-between">
            <div>
                <h5 className="font-outfit font-semibold mb-4">
                    {"View Budget List"}
                </h5>

                {items.filter((item) => item.selected).length !== 0 ? (
                    items
                        .filter((item) => item.selected)
                        .map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-12 gap-2"
                            >
                                <div className="col-span-1">
                                    <Input
                                        id="more"
                                        type="text"
                                        placeholder="e.g Travel Cost..."
                                        value={`${index + 1}.`}
                                        className=""
                                        disabled
                                    />
                                </div>
                                <div className="col-span-6">
                                    <Input
                                        id="more"
                                        type="text"
                                        placeholder="e.g Travel Cost..."
                                        value={item.name}
                                        onChange={(e) =>
                                            handleNameChange(e, item.name)
                                        }
                                        className=""
                                    />
                                </div>
                                <div className="col-span-4">
                                    <Input
                                        id="more"
                                        type="string"
                                        placeholder="e.g Travel Cost..."
                                        value={`${String(item.cost)}`}
                                        onChange={(e) =>
                                            handleCostChange(e, item.name)
                                        }
                                        className=""
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center items-center rounded-xl">
                                    <Button variant="ghost">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                            onClick={() =>
                                                removeItem(item.name)
                                            }
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        ))
                ) : (
                    <div className="w-full text-center text-sm py-8">
                        <p>No item added to budget list yet</p>
                    </div>
                )}

                <div className="w-full my-8 grid grid-cols-2 font-bold font-outfit">
                    <p className="">Total</p>
                    <p className="text-end pr-10">{`₦${totalSelectedCost()}`}</p>
                </div>
            </div>

            <div className="mt-5">
                <h6 className="text-xs mb-3">{"All set? Let's go"}</h6>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            className="bg-blue"
                            onClick={checkZeroCostSelectedItems}
                        >
                            Create Budget
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        {invalidCostError !== "" ? (
                            <div className="text-red-600 py-3">
                                {invalidCostError}
                            </div>
                        ) : (
                            <DialogForm />
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export { SelectionList };
