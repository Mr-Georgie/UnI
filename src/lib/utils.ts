import { Budget } from "@/components/budget-manager/create/zdata";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface CompiledBudget {
    budgetList: Budget[];
    balance: number | null;
    duration?: string;
    name?: string;
    fundingSource?: string;
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const valueFormatter = (number: number) =>
    `₦ ${Intl.NumberFormat("us").format(number).toString()}`;
