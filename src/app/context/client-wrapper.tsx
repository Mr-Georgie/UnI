"use client";

import { useState, useEffect } from "react";
import SessionProvider from "./session-provider";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoadingProvider } from "../context/LoadingContext";
import { Toaster } from "@/components/ui/toaster";

interface ClientWrapperProps {
    session: any;
    children: React.ReactNode;
}

export default function ClientWrapper({
    session,
    children,
}: ClientWrapperProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Render nothing on the server side
    }

    const queryClient = new QueryClient();

    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                <LoadingProvider>
                    {children}
                    <Toaster />
                </LoadingProvider>
            </QueryClientProvider>
        </SessionProvider>
    );
}
