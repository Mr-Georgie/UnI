import React from "react";
import Balance from "./balance";
import BudgetBalance from "./budgetBalance";
import RecentActivities from "./recentActivities";
import Link from "next/link";
import { BudgetChart } from "./budgetChart";

function MyAccount() {
    return (
        <div className="flex flex-col gap-4">
            <div className="border rounded-lg p-4">
                <div>
                    <h5 className="font-outfit font-semibold mb-4">
                        {"My Accounts"}
                    </h5>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <BudgetBalance />
                    <Balance />
                </div>
            </div>

            <BudgetChart />
        </div>
    );
}

export default MyAccount;
