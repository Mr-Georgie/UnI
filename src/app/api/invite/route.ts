// pages/api/startPasswordless.ts

import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, send = "link", state } = await request.json();

    // Ensure email is provided
    if (!email) {
        return NextResponse.json(
            { message: "Email is required" },
            { status: 400 }
        );
    }

    try {
        const response = await fetch(
            "https://uni-dev.us.auth0.com/passwordless/start",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    client_id: process.env.AUTH0_CLIENT_ID,
                    client_secret: process.env.AUTH0_CLIENT_SECRET,
                    connection: "email",
                    email,
                    send,
                    authParams: {
                        scope: "openid",
                        state: "partnerId",
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                { message: errorData },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json({ message: data }, { status: 200 });
    } catch (error) {
        console.error("Error starting passwordless:", error);
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
