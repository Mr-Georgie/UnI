"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Header from "./header";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets");
    return data;
};

function MainComponent() {
    const { data: session } = useSession();

    const { data: budgets, isLoading: isBudgetLoading } = useQuery(
        "budgets",
        fetchBudgets
    );

    return (
        <>
            <Header />

            <main
                role="main"
                className="h-full flex justify-center items-center"
            >
                <div className="flex flex-col gap-4">
                    <div className="">
                        <div className="logo">UnI</div>
                        <p>{"Saying 'I do' to stress-free finances!"}</p>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        {session && !budgets && (
                            <Link
                                href="/create-budget"
                                className={buttonVariants({
                                    variant: "default",
                                    className: "btn-primary",
                                })}
                            >
                                Create A Budget
                            </Link>
                        )}

                        {!session && (
                            <Link
                                href="/create-budget"
                                className={buttonVariants({
                                    variant: "default",
                                    className: "btn-primary",
                                })}
                            >
                                Create A Budget
                            </Link>
                        )}

                        {session ? (
                            <Link
                                href="/dashboard"
                                className={buttonVariants({
                                    variant: "outline",
                                    className: "",
                                })}
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className={buttonVariants({
                                    variant: "outline",
                                    className: "",
                                })}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainComponent;
