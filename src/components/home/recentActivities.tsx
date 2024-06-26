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
import Link from "next/link";

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

function RecentActivities() {
    return (
        <div className="border rounded-lg p-4">
            <div className="flex justify-between mb-4">
                <h5 className="font-outfit font-semibold">
                    {"Recent Activities"}
                </h5>

                <Link href="/" className="flex items-center gap-2">
                    <span className="font-outfit font-semibold text-xs">
                        See All
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                    </svg>
                </Link>
            </div>
            <Table>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium max-w-14">
                                {invoice.invoice}
                            </TableCell>
                            <TableCell className="flex flex-col gap-1">
                                <span>{invoice.paymentMethod}</span>
                                <span className="text-xs font-thin font-manrope">
                                    17 days ago
                                </span>
                            </TableCell>
                            <TableCell className="text-right">
                                {invoice.totalAmount}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default RecentActivities;
