import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import clientPromise from "@/lib/mongodb/config";
import { authOptions } from "@/lib/nextauth/auth";
import { Savings } from "@/app/models/models";
import { ObjectId } from "mongodb";

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.redirect("/api/auth/signin");
        }

        const client = await clientPromise;
        const db = client.db("uni");

        const { searchParams } = new URL(request.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json(
                { message: "Missing userId" },
                { status: 400 }
            );
        }

        // Find and update the budget with the current user's ID as the partner
        const budgetUpdateResult = await db
            .collection("budgets")
            .updateOne(
                { userId: userId },
                { $set: { partnerId: session.userId } }
            );

        if (budgetUpdateResult.matchedCount === 0) {
            return NextResponse.json(
                { message: "Budget not found or not accessible 1" },
                { status: 404 }
            );
        }

        const budget = await db
            .collection("budgets")
            .findOne({ userId: userId });

        if (!budget) {
            return NextResponse.json(
                { message: "Budget id not found or not accessible" },
                { status: 404 }
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
            budgetId: budget?._id,
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
            { message: "Budget and savings updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "An error occurred when updating budget and savings:",
            error
        );
        return NextResponse.json(
            { message: "An error occurred when updating budget and savings" },
            { status: 500 }
        );
    }
}
