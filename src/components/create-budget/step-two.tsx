"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Item } from "@/app/models/models";

interface Props {
    setIsStepOneDone: React.Dispatch<SetStateAction<boolean>>;
    setIsStepTwoDone: React.Dispatch<SetStateAction<boolean>>;
}

const StepTwo: React.FC<Props> = ({ setIsStepOneDone, setIsStepTwoDone }) => {
    const { toast } = useToast();

    const [newBudgetList, setNewBudgetList] = useState<Item[]>([]);

    useEffect(() => {
        let b = localStorage.getItem("newBudgetList");

        console.log(b);

        if (b) {
            setNewBudgetList(JSON.parse(b));
        }
    }, []);

    const handleCostChange = (
        event: ChangeEvent<HTMLInputElement>,
        itemName: string,
        position: number
    ) => {
        setNewBudgetList((prevItems) =>
            prevItems.map((item, index) =>
                item.name === itemName && index === position
                    ? { ...item, cost: Number(event.target.value) }
                    : item
            )
        );
    };

    const goToNextStep = async () => {
        let isEmptyCostItems: String = "";

        for (let item of newBudgetList) {
            if (!item.cost) {
                isEmptyCostItems = item.name + ", " + isEmptyCostItems;
            }
        }

        if (isEmptyCostItems !== "") {
            return toast({
                variant: "destructive",
                description: `Please enter the cost of: ${isEmptyCostItems}`,
            });
        }

        console.log(newBudgetList);

        await localStorage.setItem(
            "newBudgetList",
            JSON.stringify(newBudgetList)
        );

        setIsStepTwoDone(true);
    };

    return (
        <>
            <div className="flex flex-col gap-4 bg-gray-100 h-[81.5%]">
                <ScrollArea className="h-[90%] w-full container">
                    <div className="text-center py-3">
                        <h5 className="font-bold">Add Estimates </h5>
                        <span className="text-gray-500 font-thin text-sm">
                            (steps 2/4)
                        </span>
                        <p className="">
                            What is the cost of each budget item?
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-1 gap-2 mx-0 md:mx-6"
                            >
                                {newBudgetList.length !== 0 ? (
                                    newBudgetList.map((item, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-12 gap-2"
                                        >
                                            <div className="col-span-8">
                                                <Input
                                                    id="more"
                                                    type="text"
                                                    placeholder="e.g Travel Cost..."
                                                    value={item.name}
                                                    onChange={(e) =>
                                                        console.log(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="disabled:bg-white disabled:opacity-100"
                                                    disabled
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <Input
                                                    id="cost"
                                                    type="number"
                                                    placeholder="e.g 1000"
                                                    value={`${
                                                        !item.cost
                                                            ? ""
                                                            : item.cost
                                                    }`}
                                                    onChange={(e) =>
                                                        handleCostChange(
                                                            e,
                                                            item.name,
                                                            index
                                                        )
                                                    }
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-full text-center text-sm py-8">
                                        <p>No item added to budget list yet</p>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScrollArea>
            </div>
            <footer role="banner" className="h-1/6 flex justify-center">
                <div className="w-full container p-2 ">
                    <div className="flex justify-center gap-3">
                        <div className="w-full flex justify-end">
                            <Button
                                variant="outline"
                                className="w-full max-w-80"
                                onClick={() => setIsStepOneDone(false)}
                            >
                                Back
                            </Button>
                        </div>
                        <div className="w-full">
                            <Button
                                className="w-full max-w-80"
                                onClick={() => goToNextStep()}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default StepTwo;
