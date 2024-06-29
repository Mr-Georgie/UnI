"use client";

import { Card, ProgressBar } from "@tremor/react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Budget } from "@/store/budget/budgetSlice";
import { formatCurrency } from "@/lib/utils";

function BudgetBalance() {
    const [budget, setBudget] = useState<Budget>();

    useEffect(() => {
        let b = localStorage.getItem("newBudget");

        console.log(b);

        if (b) {
            setBudget(JSON.parse(b));
        }
    }, []);

    return (
        <Card className="w-full rounded-lg bg-cyan-500 relative overflow-hidden text-white">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-stone-50"></div>
            <h4 className="text-tremor-default ">MyWedding24</h4>
            <p className="text-tremor-metric font-semibold">
                {budget?.balance
                    ? formatCurrency(budget?.balance)
                    : formatCurrency(0)}
            </p>
            <p className="mt-4 flex items-center justify-between text-tremor-default ">
                {budget?.balance && budget?.totalCost && (
                    <span>
                        {`${(budget.balance / budget.totalCost) * 100}%`} of
                        budget target
                    </span>
                )}

                <span>
                    {budget?.totalCost
                        ? formatCurrency(budget.totalCost)
                        : formatCurrency(0)}
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
