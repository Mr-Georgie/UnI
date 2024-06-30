"use client";

import { usePathname } from "next/navigation";

function Top() {
    const pathName = usePathname();

    return (
        <div className="px-8 py-2">
            {pathName.includes("budgets") && (
                <div className="">
                    <h2 className="font-outfit font-bold text-xl">
                        {"Budget Manager"}
                    </h2>
                    <h4 className="font-plus_jakarta_sans text-sm">
                        {"View, Create, Edit and Analyse Budgets here"}
                    </h4>
                </div>
            )}

            {pathName === "/dashboard" && (
                <div className="">
                    <h2 className="font-outfit font-bold text-xl">
                        {"Overview"}
                    </h2>
                    <h4 className="font-plus_jakarta_sans text-sm">
                        {"Everything about your account"}
                    </h4>
                </div>
            )}

            {pathName === "/dashboard/funding" && (
                <div className="">
                    <h2 className="font-outfit font-bold text-xl">
                        {"Funding"}
                    </h2>
                    <h4 className="font-plus_jakarta_sans text-sm">
                        {"Fund your wallet and budget here"}
                    </h4>
                </div>
            )}
        </div>
    );
}

export default Top;
