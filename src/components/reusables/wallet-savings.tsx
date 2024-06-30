"use client";

import { formatCurrency } from "@/lib/utils";
import { Card, ProgressBar } from "@tremor/react";
import React, { useEffect, useState } from "react";

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useLoading } from "@/app/context/LoadingContext";
import Loading from "@/app/loading";

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets");
    return data;
};

const fetchSavings = async () => {
    const { data } = await axios.get("/api/savings");
    return data;
};

function WalletSavings() {
    const { data: budgets, isLoading } = useQuery("budgets", fetchBudgets);
    const { data: savings, isLoading: isSavingsLoading } = useQuery(
        "savings",
        fetchSavings
    );
    const { loading, setLoading } = useLoading();

    const calculatePercent = () => {
        if (
            budgets &&
            savings &&
            savings?.amount !== 0 &&
            budgets?.totalCost !== 0
        ) {
            return (savings.amount / budgets.totalCost) * 100;
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
                        {savings?.amount
                            ? formatCurrency(savings?.amount)
                            : formatCurrency(0)}
                    </h3>
                </div>
                <div>
                    <p className="mt-4 flex items-center justify-between text-tremor-default ">
                        <span>{`${calculatePercent()}% of budget target`}</span>

                        <span>
                            {budgets?.totalCost
                                ? formatCurrency(budgets.totalCost)
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
