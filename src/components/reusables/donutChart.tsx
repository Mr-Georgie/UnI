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
import { Budget } from "@/store/budget/budgetSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/store/configureStore";

export function DonutChartUsageExample() {
    const { budget } = useSelector((state: RootState) => state.budgetReducer);

    // useEffect(() => {}, []);

    return (
        <Card className="w-full rounded-lg h-full">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-bold">
                    Budget Total Cost
                </h4>
            </div>

            <div className="flex flex-col items-center mt-4">
                <DonutChart
                    data={budget?.itemList ? budget?.itemList : []}
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
                        budget?.itemList?.map((item) => item.name) ?? []
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
        </Card>
    );
}
