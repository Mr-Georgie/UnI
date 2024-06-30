import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/nextauth/auth";
import clientPromise from "@/lib/mongodb/config";
// import Budget from "@/app/models/Budget";

export async function POST(request: Request) {
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

        // Ensure the userId is set in the data
        data.userId = session.userId;

        // Insert the data as a new document in the collection
        const result = await db.collection("budget").insertOne(data);

        if (!result.acknowledged) {
            return NextResponse.json(
                { message: "Failed to insert budget" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Budget added successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("An error occurred when adding budget:", error);
        return NextResponse.json(
            { message: "An error occurred when adding budget" },
            { status: 500 }
        );
    }
}
