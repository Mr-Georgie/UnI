"use client"; // Add this line to mark the component as a Client Component

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

interface Props {
    session: Session | null;
    children: React.ReactNode;
}

export default function SessionProvider({ session, children }: Props) {
    return (
        <NextAuthSessionProvider session={session}>
            {children}
        </NextAuthSessionProvider>
    );
}
