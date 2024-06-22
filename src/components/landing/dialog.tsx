"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

interface Props {
    setShowDialog: React.Dispatch<boolean>;
    showDialog: boolean;
}

const Dialog: React.FC<Props> = ({ setShowDialog, showDialog }) => {
    const router = useRouter();

    const goForward = (option: string) => {
        localStorage.setItem("showOnboarding", option);
        router.push("/api/auth/login");
    };

    return (
        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
            <AlertDialogTrigger asChild>
                <div className=""></div>
            </AlertDialogTrigger>
            <AlertDialogContent className="">
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Do you want to see this page again?
                    </AlertDialogTitle>
                    <AlertDialogDescription></AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => goForward("Yes")}>
                        Yes
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={() => goForward("No")}>
                        No
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Dialog;
