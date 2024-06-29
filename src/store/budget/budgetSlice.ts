import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "mongodb";

export interface Fund {
    user: string;
    date: string;
    amount: number;
    account: string;
}

export interface BudgetItem {
    name: string;
    image?: string;
    cost: number | null;
}

export interface Budget {
    _id: ObjectId | null;
    userId: string | null;
    itemList: BudgetItem[] | null;
    title: string | null;
    totalCost: number | null;
    duration: string | null;
    balance: number | null;
    partnerId: string | null;
}

export interface BudgetState {
    budget: Budget;
    loading: boolean;
    error: string;
}

const initialState: BudgetState = {
    budget: {
        _id: null,
        userId: null,
        title: null,
        totalCost: null,
        itemList: null,
        duration: null,
        balance: null,
        partnerId: null,
    },
    loading: false,
    error: "",
};

const budgetSlice = createSlice({
    name: "budget",
    initialState,
    reducers: {
        requestInitiated: (state) => {
            state.loading = true;
            state.error = "";
        },

        requestFailed: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },

        createBudget: (state, action: PayloadAction<Budget>) => {
            state.budget = action.payload;
            state.loading = false;
            state.error = "";
        },

        clearBudget: (state) => {
            state.loading = false;
            return initialState;
        },

        updateBudget: (state, action: PayloadAction<Budget>) => {
            state.budget = {
                ...state.budget,
                ...action.payload,
            };
            state.loading = false;
            state.error = "";
        },

        updateBudgetItemsList: (state, action: PayloadAction<BudgetItem[]>) => {
            state.budget.itemList = action.payload;
            state.loading = false;
            state.error = "";
        },

        updateBudgetDuration: (state, action: PayloadAction<string>) => {
            state.budget.duration = action.payload;
        },

        updateBudgetBalance: (state, action: PayloadAction<number>) => {
            state.budget.balance = action.payload;
        },

        updateBudgetTotal: (state, action: PayloadAction<number>) => {
            state.budget.totalCost = action.payload;
        },
    },
});

export const budgetReducer = budgetSlice.reducer;

export const {
    requestFailed,
    requestInitiated,
    updateBudgetBalance,
    createBudget,
    updateBudgetDuration,
    updateBudgetItemsList,
    updateBudgetTotal,
    updateBudget,
    clearBudget,
} = budgetSlice.actions;
