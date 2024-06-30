"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Done: React.FC = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const createBudget = async () => {
        router.push("/dashboard");
    };
    return (
        <>
            <div className="flex flex-col gap-4 bg-gray-100 h-[81.5%]">
                <ScrollArea className="h-[90%] w-full container">
                    <div className="text-center py-3">
                        <h5 className="font-bold">All Set!</h5>
                        <span className=" text-gray-500 font-thin text-sm">
                            (steps 4/4)
                        </span>
                        <p className="">Time to save up!</p>
                    </div>
                    <div className="flex flex-col items-center gap-3 w-full">
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-60 text-green-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-5">
                                    <p className="text-sm font-semibold font-plus_jakarta_sans">
                                        {
                                            "You'll have to signin if you're not signed in already"
                                        }
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </ScrollArea>
            </div>
            <footer role="banner" className="h-1/6 flex justify-center">
                <div className="w-full container p-2 ">
                    <div className="flex justify-center">
                        <Button
                            className="w-full max-w-80"
                            onClick={() => createBudget()}
                        >
                            continue to dashboard
                        </Button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Done;
