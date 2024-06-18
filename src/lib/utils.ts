import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const valueFormatter = (number: number) =>
    `₦ ${Intl.NumberFormat("us").format(number).toString()}`;
