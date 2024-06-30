"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import {
    ChangeEvent,
    KeyboardEvent,
    SetStateAction,
    useEffect,
    useState,
} from "react";

import { useToast } from "../ui/use-toast";
import { Item } from "@/app/models/models";

interface Props {
    setIsStepOneDone: React.Dispatch<SetStateAction<boolean>>;
}

const StepOne: React.FC<Props> = ({ setIsStepOneDone }) => {
    const { toast } = useToast();

    const [newBudgetList, setNewBudgetList] = useState<Item[]>([]);
    const [budgetName, setBudgetName] = useState<string>("");

    useEffect(() => {
        let b = localStorage.getItem("newBudgetList");

        console.log(b);

        if (b) {
            setNewBudgetList(JSON.parse(b));
        }
    }, []);

    const handleBudgetNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBudgetName(event.target.value);
    };

    const addNewBudgetList = () => {
        if (!budgetName) {
            return toast({
                variant: "destructive",
                description: "please type into the input box",
            });
        }

        if (budgetName.trim()) {
            const newItem: Item = {
                name: budgetName,
                cost: null,
            };

            setNewBudgetList((prevList: Item[]) => [...prevList, newItem]);

            setBudgetName("");
        }
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && budgetName.trim()) {
            addNewBudgetList();
        }
    };

    const goToNextStep = async () => {
        if (newBudgetList.length === 0) {
            return toast({
                variant: "destructive",
                title: "List cannot be empty",
                description: "Please enter the must haves for your budget",
            });
        }

        await localStorage.setItem(
            "newBudgetList",
            JSON.stringify(newBudgetList)
        );

        setIsStepOneDone(true);
    };

    return (
        <>
            <div className="flex flex-col gap-4 bg-gray-100 h-[81.5%]">
                <ScrollArea className="h-[90%] w-full container">
                    <div className="text-center py-3">
                        <h5 className="font-bold">Add Items </h5>
                        <span className="text-gray-500 font-thin text-sm">
                            (steps 1/4)
                        </span>
                        <p className="">
                            List out all the must haves for your wedding?
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="grid grid-cols-2 sm:grid-cols-2 gap-2 mx-6"
                            >
                                {newBudgetList.map((budget, index) => (
                                    <Button
                                        key={index}
                                        variant="special"
                                        // onClick={() => selectItem(index)}
                                        className={`rounded-2xl text-center ${
                                            true ? "" : ""
                                        }`}
                                    >
                                        {budget.name}
                                    </Button>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScrollArea>
                <div className="container flex justify-center mb-3 relative max-w-[600px]">
                    <Input
                        type="text"
                        placeholder="start typing here e.g catering, videography etc"
                        className="bg-white"
                        onChange={handleBudgetNameChange}
                        value={budgetName}
                        onKeyDown={handleKeyDown}
                    />
                    {budgetName !== "" && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addNewBudgetList()}
                            className="absolute inset-y-0 right-[39px] top-[6px] flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4"
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
            <footer role="banner" className="h-1/6 flex justify-center">
                <div className="w-full container p-2 ">
                    <div className="flex justify-center">
                        <Button
                            className="w-full max-w-80"
                            onClick={() => goToNextStep()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default StepOne;
