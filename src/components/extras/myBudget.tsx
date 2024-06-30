"use client";
// import BudgetBalance from "./budgetBalance";
import { BudgetChart } from "../extras/budgetChart";
// import { BudgetVsPartnerChart } from "./budgetVsPartnerChart";
import { DonutChartUsageExample } from "../reusables/donut-chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import Link from "next/link";
import RecentActivities from "../reusables/recent-activities";

function MyBudget() {
    return (
        <div className="md:min-h-[480px] flex flex-col">
            <div className="flex flex-col gap-3">
                <DonutChartUsageExample />

                <RecentActivities />
            </div>
        </div>
    );
}

export default MyBudget;
