"use client";

import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChangeEvent, useState } from "react";
import { Budget } from "./zdata";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

type SelectItemFunction = (index: number) => void;

interface Props {
    items: Budget[];
    setItems: React.Dispatch<React.SetStateAction<Budget[]>>;
    selectItem: SelectItemFunction;
}

const SelectItem: React.FC<Props> = ({ items, setItems, selectItem }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        const newItem: Budget = {
            image: "new",
            name: inputValue,
            selected: true,
            cost: 0,
        };

        setItems((prevItem: any) => [...prevItem, newItem]);

        setInputValue("");
    };

    return (
        <div className="border rounded-lg p-4 md:min-h-[480px] flex flex-col justify-between">
            <div>
                <h5 className="font-outfit font-semibold mb-4">
                    {"Add to Budget List"}
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {items.map((item, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            onClick={() => selectItem(index)}
                            className={`text-sm font-manrope font-semibold p-2 rounded-lg text-center ${
                                item.selected
                                    ? "bg-green text-white hover:bg-green"
                                    : ""
                            }`}
                        >
                            {item.name}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="mt-5">
                <h6 className="text-xs mb-3">
                    There are more? Type in the box below
                </h6>
                <div className="">
                    <Label htmlFor="more" className="hidden">
                        There are more? Type in the box below
                    </Label>
                    <div className="relative">
                        <Input
                            id="more"
                            type="text"
                            placeholder="e.g Bridal Shower..."
                            className="w-full"
                            value={inputValue}
                            onChange={handleChange}
                        />

                        {inputValue !== "" && (
                            <Button
                                variant="default"
                                onClick={() => handleSubmit()}
                                className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none bg-blue text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SelectItem };

{
    /* <Button className="rounded-r-lg rounded-l-none bg-blue">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                            </svg>
                        </Button> */
}
