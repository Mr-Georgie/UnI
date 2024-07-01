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
import { formatCurrency } from "@/lib/utils";
import { Card } from "@tremor/react";
import Link from "next/link";
import {
    AwaitedReactNode,
    JSXElementConstructor,
    Key,
    ReactElement,
    ReactNode,
    ReactPortal,
    useEffect,
    useState,
} from "react";

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useLoading } from "@/app/context/LoadingContext";
import Loading from "@/app/loading";

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets");
    return data;
};

function Breakdown() {
    const { data: budgets, isLoading } = useQuery("budgets", fetchBudgets);
    const { loading, setLoading } = useLoading();

    return (
        <Card className="w-full rounded-lg h-full">
            <div className="flex flex-col justify-between bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-bold">
                        {"Budget Breakdown"}
                    </h4>

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
                    <TableCaption>
                        {budgets
                            ? "A list of your budget items"
                            : "No budget account found"}
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="max-w-8">S/N</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="">Saved(%)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {budgets?.itemList?.map(
                            (
                                item: { name: string; cost: number },
                                index: number
                            ) => (
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
                                        <span>{`${
                                            item.cost &&
                                            formatCurrency(item.cost)
                                        }`}</span>
                                        {/* <span className="text-xs font-thin font-manrope">
                                        covered
                                    </span> */}
                                    </TableCell>
                                    <TableCell className="">
                                        <span>-</span>
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="size-6 text-green-600"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                clipRule="evenodd"
                                            />
                                        </svg> */}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}

export { Breakdown };
