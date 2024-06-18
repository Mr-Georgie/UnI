"use client";

import { Card, DonutChart, Legend } from "@tremor/react";
import { Budget, budgetData } from "../budget-manager/edit/zdata";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { valueFormatter } from "@/lib/utils";

const sales = [
    {
        name: "New York",
        sales: 980,
    },
    {
        name: "London",
        sales: 456,
    },
    {
        name: "Hong Kong",
        sales: 390,
    },
    {
        name: "San Francisco",
        sales: 240,
    },
    {
        name: "Singapore",
        sales: 190,
    },
];

export function DonutChartUsageExample() {
    const [data, setData] = useState<Budget[]>([]);

    useEffect(() => {
        setData(budgetData.filter((item) => item.selected));
    }, []);

    return (
        <Card className="w-full rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    MyWedding24
                </h4>

                <div>
                    <Label htmlFor="budget" className="hidden sr-only">
                        Select Budget
                    </Label>
                    <Select defaultValue="3">
                        <SelectTrigger id="budget">
                            <SelectValue placeholder="Specify duration" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="3">MyWedding24</SelectItem>
                            <SelectItem value="6">OurApartment</SelectItem>
                            <SelectItem value="9">Baby Fund</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-8 mt-4">
                <DonutChart
                    data={data}
                    category="cost"
                    index="name"
                    valueFormatter={valueFormatter}
                    colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
                    className="w-40 col-span-5"
                    showAnimation
                />
                <Legend
                    categories={data.map((item) => item.name)}
                    colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
                    className="max-w-xs col-span-3"
                />
            </div>
        </Card>
    );
}
