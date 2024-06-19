"use client";

import { BarChart, Card } from "@tremor/react";

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

const error = console.error;
console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
};

export function BudgetVsPartnerChart() {
    return (
        <Card className="w-full rounded-lg">
            <h3 className="text-base font-manrope font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                MyWedding24 Funding <br /> (You vs Partner):
            </h3>
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
        </Card>
    );
}
