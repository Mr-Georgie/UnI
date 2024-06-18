"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { valueFormatter } from "@/lib/utils";
import Link from "next/link";
import { Budget, budgetData } from "../edit/zdata";

const invoices = [
    {
        invoice: "INV001",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
];

function Breakdown() {
    const totalSelectedCost = () => {
        return budgetData
            .filter((item) => item.selected)
            .reduce((total, item) => total + item.cost, 0);
    };

    return (
        <div className="border rounded-lg p-4 flex flex-col justify-between">
            <div>
                <h5 className="font-outfit font-semibold mb-4">
                    {"Breakdown | MyWedding24"}
                </h5>
            </div>

            <Table>
                <TableBody>
                    {budgetData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium max-w-8">
                                {index + 1}
                            </TableCell>
                            <TableCell className="">
                                <span>{item.name}</span>
                                {/* <span className="text-xs font-thin font-manrope">
                                    17 days ago
                                </span> */}
                            </TableCell>
                            <TableCell className="flex flex-col gap-1">
                                <span>{`${valueFormatter(
                                    item.cost
                                )}/${valueFormatter(
                                    totalSelectedCost()
                                )}`}</span>
                                <span className="text-xs font-thin font-manrope">
                                    covered
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                {item.selected && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6 text-green"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Breakdown;
