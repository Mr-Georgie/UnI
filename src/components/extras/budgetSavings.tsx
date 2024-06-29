import { formatCurrency } from "@/lib/utils";
import { Card } from "@tremor/react";
import React from "react";

function BudgetSavings() {
    return (
        <Card className="w-full h-full rounded-lg bg-brand text-white">
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-tremor-default font-bold">
                        Budget Cost
                    </h4>
                </div>

                <div>
                    <h3 className="font-outfit text-4xl font-bold">
                        {formatCurrency(71465)}
                    </h3>
                </div>
            </div>
        </Card>
    );
}

export default BudgetSavings;
