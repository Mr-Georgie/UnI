"use client";

import { usePathname } from "next/navigation";
import styles from "./section.module.css";
import Link from "next/link";

function Header() {
    const pathname = usePathname();
    return (
        <div
            className={`flex items-center gap-6 font-semibold text-sm overflow-x-scroll scrollbar-hidden ${styles["hide-scrollbar"]}`}
        >
            <Link
                href="/budgets"
                className={`${
                    pathname === "/budgets"
                        ? "bg-gray-200 dark:bg-[#366571] "
                        : ""
                } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
            >
                Home
            </Link>
            <Link
                href="/budgets/charts"
                className={`${
                    pathname.includes("/budgets/charts")
                        ? "bg-gray-200 dark:bg-[#366571] "
                        : ""
                } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
            >
                Charts
            </Link>
            <Link
                href="/budgets/edit"
                className={`${
                    pathname.includes("/budgets/edit")
                        ? "bg-gray-200 dark:bg-[#366571] "
                        : ""
                } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
            >
                Edit Budget
            </Link>
            <Link
                href="/budgets/create"
                className={`${
                    pathname.includes("/budgets/create")
                        ? "bg-gray-200 dark:bg-[#366571] "
                        : ""
                } flex gap-2 rounded-3xl px-4 py-2 hover:bg-gray-300 dark:hover:bg-[#274952] cursor-pointer`}
            >
                Create New Budget
            </Link>
        </div>
    );
}

export default Header;
