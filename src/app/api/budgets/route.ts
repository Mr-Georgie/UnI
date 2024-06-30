import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/nextauth/auth";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb/config";

export async function GET(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.redirect("/api/auth/signin");
        }

        const client = await clientPromise;
        const db = client.db("uni");

        const budget = await db
            .collection("budgets")
            .findOne({ userId: session.userId });

        if (!budget) {
            const partnerBudget = await db
                .collection("budgets")
                .findOne({ partnerId: session.userId });

            if (!partnerBudget) {
                return NextResponse.json(
                    { message: "Budget not found" },
                    { status: 404 }
                );
            }

            return NextResponse.json(partnerBudget);
        }

        return NextResponse.json(budget);
    } catch (error) {
        console.error("An error occurred when fetching budget:", error);
        return NextResponse.json(
            { message: "An error occurred when fetching budget" },
            { status: 500 }
        );
    }
}
