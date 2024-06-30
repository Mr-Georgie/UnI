import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
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
                { message: "No savings ID or data provided" },
                { status: 400 }
            );
        }

        const result = await db
            .collection("savings")
            .updateOne({ _id: new ObjectId(id) }, { $set: data });

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { message: "Savings not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Savings updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("An error occurred when updating savings:", error);
        return NextResponse.json(
            { message: "An error occurred when updating savings" },
            { status: 500 }
        );
    }
}
