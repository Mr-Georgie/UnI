"use client";

import MainComp from "@/components/funding/main";
import DashboardLayout from "@/components/reusables/dashboardLayout";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Funding() {
    const searchParams = useSearchParams();
    const status = searchParams.get("status");
    const { toast } = useToast();

    useEffect(() => {
        if (status && status === "success") {
            toast({
                description:
                    "Your funding was successful and your wallet account has been updated accordingly",
            });
        }

        if (status && status === "failed") {
            toast({
                description: "Funding failed. Please retry or contact support",
            });
        }
    }, []);
    return (
        <DashboardLayout>
            <MainComp />
        </DashboardLayout>
    );
}
