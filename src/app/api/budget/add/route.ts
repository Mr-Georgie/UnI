import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb/config";
import { getSession } from "@auth0/nextjs-auth0";
import { ObjectId } from "mongodb";

export async function POST(request: Request) {
    try {
        const user = await getSession();
        if (!user) {
            return NextResponse.json(
                { message: "User not authenticated" },
                { status: 401 }
            );
        }

        const client = await clientPromise;
        const db = client.db("uni");

        const data = await request.json();
        // Ensure the userId is set in the data
        data.userId = user.user.sub;

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
