"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../ui/button";

import { Budget, budgetData } from "../budget-manager/create/zdata";
import { ScrollArea } from "../ui/scroll-area";
import { useToast } from "../ui/use-toast";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import { CompiledBudget } from "@/lib/utils";

function MainComp() {
    const router = useRouter();
    const [steps, setSteps] = useState<number>(1);
    const [items, setItems] = useState<Budget[]>(budgetData);
    const [duration, setDuration] = useState("6");
    const [totalCost, setTotalCost] = useState("");
    const [budgetName, setBudgetName] = useState<string>("");

    const { toast } = useToast();

    const handleNext = () => {
        setSteps((prev) => (prev >= 4 ? 4 : prev + 1));
    };

    const handlePrev = () => {
        setSteps((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const checkZeroCostSelectedItems = (): void => {
        const zeroCostItems = items.filter(
            (item) => item.selected && item.cost === 0
        );
        if (zeroCostItems.length > 0) {
            const itemName = zeroCostItems.map((item) => item.name).join(", ");
            toast({
                description: `Please add a cost estimate to: ${itemName}`,
            });
        } else {
            setSteps((prev) => (prev >= 4 ? 4 : prev + 1));
        }
    };

    const handleDurationChange = (value: string) => {
        setDuration(value);
        console.log(`Selected duration: ${value}`);
    };

    const calculateTotalSelectedCost = () => {
        return items
            .filter((item) => item.selected)
            .reduce((total, item) => total + item.cost, 0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBudgetName(event.target.value);
    };

    const createBudget = async () => {
        const selectedBudget: CompiledBudget = {
            budgetList: items.filter((item) => item.selected),
            duration,
            balance: null,
            name: budgetName,
        };

        await localStorage.setItem("budget", JSON.stringify(selectedBudget));
        await localStorage.setItem("showCongratsMessage", "Yes");

        toast({
            description:
                "Great! Now let's create an account to save your budget",
        });

        router.push("/api/auth/signup");
    };

    return (
        <div className="h-full mt-4 flex justify-center">
            <div className="border rounded-lg bg-white h-[75%] w-[90%] md:w-[70%] md:h-[70%] overflow-hidden">
                {/* top */}
                {steps === 1 && (
                    <div
                        className={`flex justify-between p-3 transition-opacity duration-300 ${
                            steps === 1 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="">
                            <h3 className="font-outfit text-base md:text-xl font-bold">
                                ADD ITEMS
                            </h3>
                            <p className="font-outfit text-xs lg:text-base">
                                Which 3 are the most important must haves for
                                your wedding?
                            </p>
                        </div>
                        <div className="">
                            <h3 className="font-outfit text-base md:text-xl font-bold">
                                1/4
                            </h3>
                        </div>
                    </div>
                )}
                {steps === 2 && (
                    <div
                        className={`flex justify-between p-3 transition-opacity duration-300 ${
                            steps === 2 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="">
                            <h3 className="font-outfit text-base md:text-xl font-bold">
                                ESTIMATE COST
                            </h3>
                            <p className="font-outfit text-xs lg:text-base">
                                How much would each of these cost?
                            </p>
                        </div>
                        <div className="">
                            <h3 className="font-outfit text-base md:text-xl font-bold">
                                2/4
                            </h3>
                        </div>
                    </div>
                )}
                {steps === 3 && (
                    <div
                        className={`flex justify-between p-3 transition-opacity duration-300 ${
                            steps === 3 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="">
                            <h3 className="font-outfit text-base md:text-xl font-bold">
                                ESTIMATE TIME
                            </h3>
                            <p className="font-outfit text-xs lg:text-base">
                                How long until your wedding?
                            </p>
                        </div>
                        <div className="">
                            <h3 className="font-outfit text-base md:text-xl font-bold">
                                3/4
                            </h3>
                        </div>
                    </div>
                )}
                <ScrollArea className="h-[71%] lg:h-[68%] w-full pb-10 bg-gray-100">
                    <Step1 steps={steps} items={items} setItems={setItems} />
                    <Step2
                        steps={steps}
                        items={items}
                        setItems={setItems}
                        totalSelectedCost={calculateTotalSelectedCost}
                    />
                    <Step3
                        steps={steps}
                        items={items}
                        totalCost={totalCost}
                        duration={duration}
                        handleDurationChange={handleDurationChange}
                        budgetName={budgetName}
                        handleNameChange={handleNameChange}
                    />
                </ScrollArea>
                {/* top */}
                <div className="w-full p-3">
                    {steps === 1 && (
                        <Button
                            variant="default"
                            className={`w-full bg-mix transition-opacity duration-300 ${
                                steps === 1 ? "opacity-100" : "opacity-0"
                            }`}
                            disabled={
                                items.filter((item) => item.selected).length < 3
                                    ? true
                                    : false
                            }
                            onClick={() => handleNext()}
                        >
                            Next
                        </Button>
                    )}
                    {steps === 2 && (
                        <div
                            className={`flex space-x-3 transition-opacity duration-300 ${
                                steps === 2 ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <Button
                                variant="secondary"
                                className="w-full border"
                                disabled={
                                    items.filter((item) => item.selected)
                                        .length === 0
                                        ? true
                                        : false
                                }
                                onClick={() => handlePrev()}
                            >
                                Back
                            </Button>
                            <Button
                                variant="default"
                                className="w-full bg-mix"
                                disabled={
                                    items.filter((item) => item.selected)
                                        .length === 0
                                        ? true
                                        : false
                                }
                                onClick={() => [
                                    checkZeroCostSelectedItems(),
                                    setTotalCost(calculateTotalSelectedCost()),
                                ]}
                            >
                                Next
                            </Button>
                        </div>
                    )}
                    {steps === 3 && (
                        <div
                            className={`flex space-x-3 transition-opacity duration-300 ${
                                steps === 3 ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            <Button
                                variant="secondary"
                                className="w-full border"
                                disabled={
                                    items.filter((item) => item.selected)
                                        .length === 0
                                        ? true
                                        : false
                                }
                                onClick={() => handlePrev()}
                            >
                                Back
                            </Button>
                            <Button
                                variant="default"
                                className="w-full bg-mix"
                                disabled={
                                    items.filter((item) => item.selected)
                                        .length === 0
                                        ? true
                                        : false
                                }
                                onClick={() => createBudget()}
                            >
                                Create Account
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainComp;
