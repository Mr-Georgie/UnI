import React from "react";
import Balance from "../extras/balance";
import BudgetBalance from "../extras/budgetBalance";
import Link from "next/link";
import { BudgetChart } from "../extras/budgetChart";

function MyAccount() {
    return (
        <div className="flex flex-col gap-4 h-[300px]">
            <div className="border rounded-lg p-4 h-full">
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
        </div>
    );
}

export default MyAccount;
