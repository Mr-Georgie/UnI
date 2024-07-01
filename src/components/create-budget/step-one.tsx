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
import { truncateSync } from "fs";

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

    const removeBudgetItem = (position: number) => {
        setNewBudgetList((prevList: Item[]) =>
            prevList.filter((item, index) => index !== position)
        );
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

    function truncateString(str: string | null | undefined) {
        // Check if the string is longer than 25 characters
        if (str && str.length > 25) {
            return str.slice(0, 25) + "...";
        }
        return str;
    }

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
                                className="grid grid-cols-2 sm:grid-cols-2 gap-2 mx-0 md:mx-6"
                            >
                                {newBudgetList.map((budget, index) => (
                                    <Button
                                        key={index}
                                        variant="special"
                                        // onClick={() => selectItem(index)}
                                        className={`cursor-default hover:opacity-100 rounded-2xl text-center text-wrap relative ${
                                            true ? "" : ""
                                        }`}
                                    >
                                        <span>
                                            {truncateString(budget.name)}
                                        </span>

                                        <span
                                            className="bg-white rounded-full cursor-pointer absolute inset-y-0 right-[9px] top-[6px] z-30"
                                            onClick={() =>
                                                removeBudgetItem(index)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6 text-red-400"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </Button>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScrollArea>
                <div className="container flex justify-center mb-3 relative max-w-[600px]">
                    <Input
                        type="text"
                        placeholder="start typing here e.g apartment"
                        className="bg-white"
                        onChange={handleBudgetNameChange}
                        value={budgetName}
                        onKeyDown={handleKeyDown}
                    />
                    {budgetName !== "" && (
                        <Button
                            variant="default"
                            size="sm"
                            onClick={() => addNewBudgetList()}
                            className="absolute inset-y-0 right-[39px] top-[6px] flex items-center bg-green-400 hover:bg-green-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4 text-white"
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
