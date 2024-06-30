"use client";

import Header from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import { ScrollArea } from "../ui/scroll-area";
import Top from "./top";

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { setupBudgetAndSavings, setupPartner } from "@/lib/mongodb/actions";
import { useToast } from "../ui/use-toast";

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets");
    return data;
};

const fetchSavings = async () => {
    const { data } = await axios.get("/api/savings");
    return data;
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { data: budgets, isLoading: isBudgetLoading } = useQuery(
        "budgets",
        fetchBudgets
    );
    const { data: savings, isLoading: isSavingsLoading } = useQuery(
        "savings",
        fetchSavings
    );
    //
    const { toast } = useToast();
    //
    const { data: session } = useSession();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const setup = async () => {
            const id = searchParams.get("partnerId");

            // Check for budget in localStorage
            const budget = localStorage.getItem("newBudget");

            if (budget) {
                // Function to save budget to DB
                try {
                    await setupBudgetAndSavings(budget);
                    localStorage.removeItem("newBudget"); // Clear the localStorage after saving
                    localStorage.removeItem("newBudgetList"); // Clear the localStorage after saving
                } catch (error) {
                    if (!isBudgetLoading && budgets) {
                        toast({
                            description:
                                "We only support one budget per account for now.",
                        });
                    } else {
                        toast({
                            description:
                                "An error occurred while creating budget. Please retry",
                        });
                    }
                }
            }

            if (id) {
                try {
                    // API call to handle userId
                    await setupPartner(id);
                    localStorage.removeItem("newBudget"); // Clear the localStorage after saving
                    localStorage.removeItem("newBudgetList"); // Clear the localStorage after saving
                } catch (error) {
                    if (!isBudgetLoading && budgets) {
                        toast({
                            description:
                                "We only support one budget per account for now.",
                        });
                    } else {
                        toast({
                            description:
                                "An error occurred while creating budget. Please retry",
                        });
                    }
                }
            }

            // Set loading state to false after setup is complete
            setIsLoading(false);
        };

        setup();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isBudgetLoading, budgets]);

    if (isLoading) {
        return (
            <div className="flex gap-2 justify-center items-center h-screen">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-16 animate-pulse text-brand-dark"
                >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <div className="font-outfit font-bold text-xl">
                    Fetching your data, please wait...
                </div>
            </div>
        );
    }

    return (
        <main className="h-screen md:grid md:grid-cols-[210px_1fr] bg-white font-plus_jakarta_sans">
            <Sidebar />

            <div className="border bg-slate-200 h-full w-full overflow-hidden">
                <Header />

                <ScrollArea className="h-full w-full pb-20">
                    <Top />
                    {children}
                </ScrollArea>
            </div>
        </main>
    );
};

export default DashboardLayout;
// export default withPageAuthRequired(DashboardLayout);
