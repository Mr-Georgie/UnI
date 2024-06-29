"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DonutChartUsageExample } from "../reusables/donutChart";
import QuickAction from "../reusables/quickAction";
import WalletSavings from "../reusables/walletSavings";
import RecentActivities from "../reusables/recentActivities";
import { BudgetChartPerMonth } from "../reusables/budgetPerMonthChart";
import { Breakdown } from "../reusables/breakdown";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/configureStore";
import { BudgetItem, createBudget } from "@/store/budget/budgetSlice";
import { addBudget } from "@/store/budget/budgetActions";

function MainComp() {
    // const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        let b = localStorage.getItem("newBudget");

        dispatch(addBudget(b));
    }, []);

    return (
        <section className="px-3 sm:px-4 md:px-8 py-4 w-full flex flex-col gap-10 overflow-y-hidden overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="">
                    <DonutChartUsageExample />
                </div>
                <div className="">
                    <WalletSavings />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="lg:col-span-2">
                    <QuickAction />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="">
                    <Breakdown />
                </div>
                <div className="">
                    <RecentActivities />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="lg:col-span-2">
                    <BudgetChartPerMonth />
                </div>
            </div>
        </section>
    );
}

export default MainComp;

// useEffect(() => {
//     if (!alreadyChecked) {
//         const showWelcome = localStorage.getItem("showWelcome");

//         if (!showWelcome) {
//             localStorage.setItem("showWelcome", "No");
//             router.push("/welcome");
//         }

//         // Ensure this logic only runs once
//         setAlreadyChecked(true);
//     }
// }, [alreadyChecked, router]);
