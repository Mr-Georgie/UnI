import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/nextauth/auth";
import clientPromise from "@/lib/mongodb/config";
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
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { message: "No budget ID provided" },
                { status: 400 }
            );
        }

        const budget = await db
            .collection("budgets")
            .findOne({ _id: new ObjectId(id) });

        if (!budget) {
            return NextResponse.json(
                { message: "Budget not found" },
                { status: 404 }
            );
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
