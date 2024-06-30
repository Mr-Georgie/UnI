"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DonutChartUsageExample } from "../reusables/donut-chart";
import QuickAction from "../reusables/quick-action";
import WalletSavings from "../reusables/wallet-savings";
import RecentActivities from "../reusables/recent-activities";
import { BudgetChartPerMonth } from "../reusables/budget-per-month-chart";
import { Breakdown } from "../reusables/breakdown";

function MainComp() {
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
