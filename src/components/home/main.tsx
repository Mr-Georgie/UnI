"use client";

import { useEffect, useState } from "react";
import MyAccount from "./myAccount";
import MyBudget from "./myBudget";
import { useRouter } from "next/navigation";

function MainComp() {
    const router = useRouter();

    useEffect(() => {
        const showWelcome = localStorage.getItem("showWelcome");

        if (showWelcome === "Yes") {
            router.push("/welcome");
        }
    }, []);

    return (
        <section className="px-1 sm:px-4 md:px-8 py-4 w-full overflow-y-hidden overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
                <div className="lg:col-span-7">
                    <MyAccount />
                </div>
                <div className="lg:col-span-5">
                    <MyBudget />
                </div>
            </div>
        </section>
    );
}

export default MainComp;
