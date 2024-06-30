"use client";

import { Card, DonutChart, Legend } from "@tremor/react";
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

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useLoading } from "@/app/context/LoadingContext";
import Loading from "@/app/loading";

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets");
    return data;
};

export function DonutChartUsageExample() {
    const { data: budgets, isLoading } = useQuery("budgets", fetchBudgets);
    const { loading, setLoading } = useLoading();

    return (
        <Card className="w-full rounded-lg h-full">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-bold">
                    Budget Total Cost
                </h4>
            </div>

            {isLoading || loading ? (
                <div className="flex justify-center items-center py-3 mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 animate-spin"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            ) : (
                <div className="flex flex-col items-center mt-4">
                    <DonutChart
                        data={budgets?.itemList ? budgets?.itemList : []}
                        category="cost"
                        index="name"
                        valueFormatter={formatCurrency}
                        colors={[
                            "violet",
                            "red",
                            "green",
                            "yellow",
                            "lime",
                            "amber",
                            "fuchsia",
                            "pink",
                        ]}
                        className="font-outfit text-2xl font-bold"
                        showAnimation
                    />
                    <Legend
                        categories={
                            budgets?.itemList?.map(
                                (item: { name: string; cost: string }) =>
                                    item.name
                            ) ?? []
                        }
                        colors={[
                            "violet",
                            "red",
                            "green",
                            "yellow",
                            "lime",
                            "amber",
                            "fuchsia",
                            "pink",
                        ]}
                        className="max-w-xs mt-3"
                    />
                </div>
            )}
        </Card>
    );
}
