import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/nextauth/auth";
import clientPromise from "@/lib/mongodb/config";
import { ObjectId } from "mongodb";

export async function DELETE(request: NextRequest) {
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

        const result = await db
            .collection("budgets")
            .deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { message: "Budget not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Budget deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("An error occurred when deleting budget:", error);
        return NextResponse.json(
            { message: "An error occurred when deleting budget" },
            { status: 500 }
        );
    }
}
