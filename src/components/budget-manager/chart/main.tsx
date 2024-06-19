"use client";

import Link from "next/link";
import Header from "../home/header";
import { BudgetVsPartnerChart } from "./budgetVsPartnerChart";
import { BudgetChartPerMonth } from "./budgetPerMonthChart";
import { DonutChartPage } from "./donutChart";

function MainComp() {
    return (
        <section className="px-1 sm:px-4 md:px-8 py-4 w-full overflow-y-hidden overflow-x-hidden">
            <Header />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
                <BudgetVsPartnerChart />
                <BudgetChartPerMonth />
                <DonutChartPage />
            </div>
        </section>
    );
}

export default MainComp;
