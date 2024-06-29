"use client";

import { formatCurrency } from "@/lib/utils";
import { Budget } from "@/store/budget/budgetSlice";
import { RootState } from "@/store/configureStore";
import { Card, ProgressBar } from "@tremor/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WalletSavings() {
    const { budget } = useSelector((state: RootState) => state.budgetReducer);

    const calculatePercent = () => {
        if (budget && budget?.balance !== null && budget?.totalCost !== null) {
            return (budget.balance / budget.totalCost) * 100;
        }
        return 0;
    };
    return (
        <Card className="w-full h-full rounded-lg">
            <div className="flex flex-col gap-6 lg:gap-10">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-bold">
                        Savings Goals
                    </h4>
                </div>

                <div>
                    <h3 className="font-outfit text-3xl lg:text-7xl font-bold">
                        {budget?.balance
                            ? formatCurrency(budget?.balance)
                            : formatCurrency(0)}
                    </h3>
                </div>
                <div>
                    <p className="mt-4 flex items-center justify-between text-tremor-default ">
                        <span>{`${calculatePercent()}% of budget target`}</span>

                        <span>
                            {budget?.totalCost
                                ? formatCurrency(budget.totalCost)
                                : formatCurrency(0)}
                        </span>
                    </p>
                    <ProgressBar
                        value={calculatePercent()}
                        className="mt-2 rounded"
                        showAnimation
                        color="gray"
                    />
                </div>
            </div>
        </Card>
    );
}

export default WalletSavings;
