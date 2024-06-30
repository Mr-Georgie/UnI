import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";
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

        const savings = await db
            .collection("savings")
            .findOne({ userId: new ObjectId(session.userId) });

        if (!savings) {
            return NextResponse.json(
                { message: "Savings not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(savings);
    } catch (error) {
        console.error("An error occurred when fetching savings:", error);
        return NextResponse.json(
            { message: "An error occurred when fetching savings" },
            { status: 500 }
        );
    }
}
