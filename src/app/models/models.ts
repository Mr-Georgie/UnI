import { ObjectId } from "mongodb";

export interface User {
    _id: ObjectId;
    name: string;
    email: string;
    emailVerified: Date;
}

export interface Item {
    name: string;
    cost: number | null;
}

export interface Budget {
    userId: ObjectId | null;
    title: string;
    totalCost: number;
    duration: number;
    monthlySavings: number;
    itemList: Item[];
    partnerId: ObjectId | null;
}

export interface Transaction {
    _id: ObjectId;
    savingsId: ObjectId;
    amount: number;
    date: Date;
    successful: boolean;
}

export interface Savings {
    budgetId: ObjectId;
    amount: number;
    transactionHistory: Transaction[];
    userId: ObjectId;
}
