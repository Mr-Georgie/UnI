"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import Header from "./header";
import { useSession } from "next-auth/react";

function MainComponent() {
    const { data: session } = useSession();

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
                        <Link
                            href="/create-budget"
                            className={buttonVariants({
                                variant: "default",
                                className: "btn-primary",
                            })}
                        >
                            Create A Budget
                        </Link>
                        {session ? (
                            <Link
                                href="/auth/signin"
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
