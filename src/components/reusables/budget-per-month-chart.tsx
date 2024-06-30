"use client";

import { BarChart, Card } from "@tremor/react";
import { useState } from "react";

const chartdata = [
    {
        name: "Jan",
        actual: 890,
        expected: 338,
    },
    {
        name: "Feb",
        actual: 289,
        expected: 233,
    },
    {
        name: "Mar",
        actual: 380,
        expected: 535,
    },
    {
        name: "Apr",
        actual: 90,
        expected: 98,
    },
    {
        name: "May",
        actual: 30,
        expected: 80,
    },
    {
        name: "Jun",
        actual: 45,
        expected: 45,
    },
];

const error = console.error;
console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
};

const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString();

export function BudgetChartPerMonth() {
    return (
        <Card className="w-full rounded-lg bg-white relative">
            <div className="absolute right-0 left-0 top-0 h-full z-50">
                <div className="flex justify-center items-center h-full bg-black/40">
                    <h3 className="text-white">Upcoming feature...</h3>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-manrope font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    Expected & Actual Savings Per Month:
                </h3>
            </div>

            <BarChart
                className="mt-4 h-80"
                data={chartdata}
                index="name"
                categories={["actual", "expected"]}
                colors={["teal", "amber", "rose", "indigo", "emerald"]}
                valueFormatter={dataFormatter}
                yAxisWidth={68}
                showAnimation
            />
        </Card>
    );
}