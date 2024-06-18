"use client";

import Image from "next/image";
import { SelectItem } from "./selectItem";
import { useState } from "react";

export interface Budget {
    name: string;
    image: string;
    selected: boolean;
    cost: number;
}

export const budgetData: Budget[] = [
    {
        name: "Apartment",
        image: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Furniture",
        image: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Videography",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Cake",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Catering",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Rings",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Honeymoon",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
    {
        name: "Reserved Cash",
        image: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        selected: false,
        cost: 0,
    },
];

export default function MainComp() {
    return <></>;
}
