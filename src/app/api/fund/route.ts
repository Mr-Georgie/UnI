import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const response = await fetch(
            "https://api.flutterwave.com/v3/payments",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLW_SECRET_KEY}`,
                },
                body: JSON.stringify({
                    customer: {
                        email: data.email,
                    },
                    tx_ref: data.transactionRef,
                    amount: data.amount,
                    currency: data.currency,
                    redirect_url: "http://localhost:3000/api/payment-callback",
                    customizations: {
                        title: "UnI Savings App",
                        logo: "https://raw.githubusercontent.com/Mr-Georgie/UnI/main/public/Logo-dark.png",
                    },
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            return NextResponse.json(
                {
                    message:
                        errorData.error || "Transaction failed. Please retry",
                },
                {
                    status: 400,
                }
            );
        }

        let json = await response.json();

        return NextResponse.json(
            {
                ...json,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return NextResponse.json(
            {
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}
