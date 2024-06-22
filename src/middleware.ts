import {
    withMiddlewareAuthRequired,
    getSession,
} from "@auth0/nextjs-auth0/edge";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    const user = await getSession();

    if (user) {
        console.log("User authenticated");
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/onboard", "/welcome"], //we want our middleware to affect these routes
};
