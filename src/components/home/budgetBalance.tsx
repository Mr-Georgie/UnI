"use client";

import { Card, ProgressBar } from "@tremor/react";
import { Button } from "../ui/button";
import { CompiledBudget, valueFormatter } from "@/lib/utils";
import { useEffect, useState } from "react";

function BudgetBalance() {
    const [budget, setBudget] = useState<CompiledBudget | null>(null);

    useEffect(() => {
        const b = localStorage.getItem("budget");

        if (b) {
            try {
                setBudget(JSON.parse(b) as CompiledBudget);
            } catch (error) {
                console.error("Error parsing budget from localStorage:", error);
            }
        } else {
            console.warn("No budget found in localStorage");
        }
    }, []);
    return (
        <Card className="w-full rounded-lg bg-cyan-500 relative overflow-hidden text-white">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-stone-50"></div>
            <h4 className="text-tremor-default ">MyWedding24</h4>
            <p className="text-tremor-metric font-semibold">
                {valueFormatter(budget?.balance ? budget.balance : 0)}
            </p>
            <p className="mt-4 flex items-center justify-between text-tremor-default ">
                <span>32% of budget target</span>
                <span>
                    {valueFormatter(
                        budget
                            ? budget.budgetList.reduce(
                                  (total, item) => total + item.cost,
                                  0
                              )
                            : 0
                    )}
                </span>
            </p>
            <ProgressBar
                value={32}
                className="mt-2 bg-white rounded"
                showAnimation
                color="gray"
            />

            <div className="mt-2 flex items-center justify-between text-xs ">
                <Button
                    variant="secondary"
                    className="font-semibold font-outfit"
                >
                    Add/Remove Fund
                </Button>
            </div>

            {/* "slate" | "gray" | "zinc" | "neutral" | "stone" | "red" | "orange" 
            | "amber" | "yellow" | "lime" 
            | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" 
            | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | */}
        </Card>
    );
}

export default BudgetBalance;
