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

const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString();

export function BudgetChartPerMonth() {
    return (
        <Card className="w-full rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-manrope font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    MyWedding24 Funding <br /> (Per Month):
                </h3>
            </div>

            <BarChart
                className="mt-4 h-40"
                data={chartdata}
                index="name"
                categories={["actual", "expected"]}
                colors={["teal", "amber", "rose", "indigo", "emerald"]}
                valueFormatter={dataFormatter}
                yAxisWidth={48}
                showAnimation
            />
        </Card>
    );
}
