// app/api/budget/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import clientPromise from "@/lib/mongodb/config";
import { authOptions } from "@/lib/nextauth/auth";
import { Savings } from "@/app/models/models";
import { ObjectId } from "mongodb";

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.redirect("/api/auth/signin");
        }

        const client = await clientPromise;
        const db = client.db("uni");

        const data = await request.json();

        if (!data) {
            return NextResponse.json(
                { message: "No budget to add" },
                { status: 400 }
            );
        }

        const budget = await db
            .collection("budgets")
            .findOne({ userId: session.userId });

        if (budget) {
            return NextResponse.json(
                { message: "Only one budget can be created for now" },
                { status: 400 }
            );
        }

        // Ensure the userId is set in the data
        data.userId = session.userId;

        // Insert the budget as a new document in the collection
        const budgetResult = await db.collection("budgets").insertOne(data);

        if (!budgetResult.acknowledged) {
            return NextResponse.json(
                { message: "Failed to insert budget" },
                { status: 500 }
            );
        }

        const savings = await db
            .collection("savings")
            .findOne({ userId: new ObjectId(session.userId) });

        if (savings) {
            return NextResponse.json(
                { message: "Only one savings can be created for now" },
                { status: 400 }
            );
        }

        // Create associated savings for the budget
        const savingsData: Savings = {
            budgetId: budgetResult.insertedId,
            amount: 0,
            transactionHistory: [],
            userId: new ObjectId(session.userId),
        };

        const savingsResult = await db
            .collection("savings")
            .insertOne(savingsData);

        if (!savingsResult.acknowledged) {
            return NextResponse.json(
                { message: "Failed to create associated savings" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Budget and savings added successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "An error occurred when adding budget and savings:",
            error
        );
        return NextResponse.json(
            { message: "An error occurred when adding budget and savings" },
            { status: 500 }
        );
    }
}
