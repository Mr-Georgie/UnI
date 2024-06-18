"use client";

import { BarChart, Card } from "@tremor/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { ChangeEvent, useState } from "react";

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

const partnerdata = [
    {
        name: "Jan",
        you: 90,
        partner: 38,
    },
    {
        name: "Feb",
        you: 89,
        partner: 23,
    },
    {
        name: "Mar",
        you: 380,
        partner: 535,
    },
    {
        name: "Apr",
        you: 90,
        partner: 98,
    },
    {
        name: "May",
        you: 289,
        partner: 233,
    },
    {
        name: "Jun",
        you: 890,
        partner: 338,
    },
];

const dataFormatter = (number: number) =>
    Intl.NumberFormat("us").format(number).toString();

export function BudgetChart() {
    const [inputValue, setInputValue] = useState<string>("month");

    const handleChange = (value: string) => {
        setInputValue(value);
    };

    return (
        <Card className="w-full rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-manrope font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    MyWedding24 Funding
                </h3>

                <div>
                    <Label htmlFor="chart" className="hidden sr-only">
                        Select Chart
                    </Label>
                    <Select
                        defaultValue={inputValue}
                        onValueChange={handleChange}
                    >
                        <SelectTrigger id="chart">
                            <SelectValue placeholder="Select chart" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="month">Per month</SelectItem>
                            <SelectItem value="partner">Vs. Partner</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {inputValue === "month" ? (
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
            ) : (
                <BarChart
                    className="mt-4 h-40"
                    data={partnerdata}
                    index="name"
                    categories={["you", "partner"]}
                    colors={["rose", "indigo", "amber", "emerald"]}
                    valueFormatter={dataFormatter}
                    yAxisWidth={48}
                    showAnimation
                />
            )}
        </Card>
    );
}
