import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatCurrency = (cost: number): string => {
    return `$ ${Intl.NumberFormat("us").format(cost).toString()}`;
};
