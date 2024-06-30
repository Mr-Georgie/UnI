import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/nextauth/auth";
import clientPromise from "@/lib/mongodb/config";

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
                { message: "No savings to add" },
                { status: 400 }
            );
        }

        // Ensure the userId is set in the data
        data.userId = session.userId;

        // Insert the data as a new document in the collection
        const result = await db.collection("savings").insertOne(data);

        if (!result.acknowledged) {
            return NextResponse.json(
                { message: "Failed to insert savings" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Savings added successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("An error occurred when adding savings:", error);
        return NextResponse.json(
            { message: "An error occurred when adding savings" },
            { status: 500 }
        );
    }
}
