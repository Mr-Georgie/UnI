"use client";

import { Card, DonutChart, Legend, ProgressBar } from "@tremor/react";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { formatCurrency } from "@/lib/utils";
import { Budget } from "@/store/budget/budgetSlice";
import { ScrollArea } from "../ui/scroll-area";

export function Breakdown() {
    const [budget, setBudget] = useState<Budget>();

    useEffect(() => {
        let b = localStorage.getItem("newBudget");

        console.log(b);

        if (b) {
            setBudget(JSON.parse(b));
        }
    }, []);

    return (
        <Card className="w-full rounded-lg h-[300px]">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-bold">
                    Budget Breakdown
                </h4>
            </div>

            <ScrollArea className="h-full">
                <div className="flex flex-col space-y-3">
                    {budget?.itemList &&
                        budget?.itemList.map((item, index) => (
                            <div key={index} className="w-full">
                                <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                                    <span>
                                        {formatCurrency(0)} &bull; {item.name}
                                    </span>
                                    <span>
                                        {formatCurrency(
                                            item.cost ? item.cost : 0
                                        )}
                                    </span>
                                </p>
                                <ProgressBar
                                    value={5}
                                    color="teal"
                                    className="mt-3"
                                />
                            </div>
                        ))}
                </div>
            </ScrollArea>
        </Card>
    );
}
