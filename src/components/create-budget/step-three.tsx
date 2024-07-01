"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { formatCurrency } from "@/lib/utils";
import { Budget, Item } from "@/app/models/models";

interface Props {
    setIsStepThreeDone: React.Dispatch<SetStateAction<boolean>>;
    setIsStepTwoDone: React.Dispatch<SetStateAction<boolean>>;
}

const StepThree: React.FC<Props> = ({
    setIsStepTwoDone,
    setIsStepThreeDone,
}) => {
    const { toast } = useToast();

    // const [budget, setBudget] = useState<Budget>();
    const [newBudgetList, setNewBudgetList] = useState<Item[]>([]);
    const [duration, setDuration] = useState("6");
    const [totalCost, setTotalCost] = useState(0);
    const [budgetTitle, setBudgetTitle] = useState("");

    useEffect(() => {
        let b = localStorage.getItem("newBudgetList");

        console.log(b);

        if (b) {
            setNewBudgetList(JSON.parse(b));
        }
    }, []);

    useEffect(() => {
        let sumCost = 0;

        for (let item of newBudgetList) {
            if (item.cost) {
                sumCost = sumCost + item.cost;
            }
        }

        setTotalCost(sumCost);
    }, [newBudgetList]);

    const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const handleDurationChange = (value: string) => {
        setDuration(value);
        console.log(`Selected duration: ${value}`);
    };

    const handleBudgetTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBudgetTitle(event.target.value);
    };

    const goToNextStep = async () => {
        if (!budgetTitle) {
            return toast({
                variant: "destructive",
                description: "please provide a cool name for your budget",
            });
        }

        let newBudget: Budget = {
            title: budgetTitle,
            totalCost: totalCost,
            itemList: newBudgetList,
            duration: Number(duration),
            partnerId: null,
            userId: null,
            monthlySavings: totalCost / Number(duration),
        };

        console.log(newBudget);

        await localStorage.setItem("newBudget", JSON.stringify(newBudget));

        setIsStepThreeDone(true);
    };

    return (
        <>
            <div className="flex flex-col gap-4 bg-gray-100 h-[81.5%]">
                <ScrollArea className="h-[90%] w-full container">
                    <div className="text-center py-3">
                        <h5 className="font-bold">Add Duration </h5>
                        <span className="text-gray-500 font-thin text-sm">
                            (steps 3/4)
                        </span>
                        <p className="">
                            How long would it take to gather funds for your
                            budget?
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
                                <div className="grid gap-2">
                                    <Label htmlFor="duration">Duration</Label>
                                    <Select
                                        defaultValue={duration}
                                        onValueChange={handleDurationChange}
                                    >
                                        <SelectTrigger id="duration">
                                            <SelectValue placeholder="Specify duration" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="3">
                                                3 months
                                            </SelectItem>
                                            <SelectItem value="6">
                                                6 months
                                            </SelectItem>
                                            <SelectItem value="9">
                                                9 months
                                            </SelectItem>
                                            <SelectItem value="12">
                                                1 year
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Budget Name</Label>
                                    <Input
                                        id="Title"
                                        placeholder="e.g #MyWedding24"
                                        value={budgetTitle}
                                        onChange={handleBudgetTitleChange}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="cost">
                                        Budget Total Cost
                                    </Label>
                                    <Input
                                        id="cost"
                                        className="disabled:bg-white disabled:opacity-50"
                                        onChange={handleCostChange}
                                        value={formatCurrency(totalCost)}
                                        disabled
                                    />
                                </div>
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
                                onClick={() => setIsStepTwoDone(false)}
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

export default StepThree;
