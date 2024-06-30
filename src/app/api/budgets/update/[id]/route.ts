import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/nextauth/auth";
import clientPromise from "@/lib/mongodb/config";
import { ObjectId } from "mongodb";

export async function PUT(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.redirect("/api/auth/signin");
        }

        const client = await clientPromise;
        const db = client.db("uni");

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        const data = await request.json();

        if (!id || !data) {
            return NextResponse.json(
                { message: "No budget ID or data provided" },
                { status: 400 }
            );
        }

        const result = await db
            .collection("budgets")
            .updateOne({ _id: new ObjectId(id) }, { $set: data });

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { message: "Budget not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Budget updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("An error occurred when updating budget:", error);
        return NextResponse.json(
            { message: "An error occurred when updating budget" },
            { status: 500 }
        );
    }
}
