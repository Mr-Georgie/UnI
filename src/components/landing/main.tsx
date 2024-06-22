"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CSSProperties, useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Dialog from "./dialog";

const images = [
    {
        src: "/track-expense.png",
        alt: "uni track expense",
        caption: "Set shared wedding budget goals.",
    },
    {
        src: "/goals.png",
        alt: "uni goals",
        caption: "Reach milestones one at a time",
    },

    {
        src: "/lead.png",
        alt: "uni features",
        caption: "Stay on the same page with real-time updates.",
    },
    {
        src: "/future.png",
        alt: "plan future together with uni",
        caption: "Celebrate your dream wedding, together!",
    },
];

function MainComp() {
    const [arcPercent, setArcPercent] = useState(20);
    const [steps, setSteps] = useState<number>(1);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        let timer: NodeJS.Timeout;

        timer = setInterval(() => {
            setSteps((prev) => (prev >= 4 ? 1 : prev + 1));
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const fontStyle = "text-2xl font-extrabold";

    const login = () => {
        router.push("/api/auth/login");
    };

    const createABudget = () => {
        router.push("/create-a-budget");
    };

    return (
        <div className="h-full md:grid md:grid-cols-2">
            <div className="text-black container py-8 h-full flex items-center justify-center relative">
                <div className="absolute top-4 left-4">
                    <Image
                        src="/Logo-dark.png"
                        width={60}
                        height={60}
                        className=""
                        alt="u-n-i logo"
                        priority
                        // style={{ width: "50%", height: "auto" }}
                    />
                </div>
                <div className="flex flex-col">
                    <p className="font-outfit text-7xl font-bold text-mix">
                        UnI
                    </p>
                    <p className="font-manrope text-sm font-bold">
                        {"\"Saying 'I do' to stress-free finances!\""}
                    </p>
                    <div className="pt-10 w-full flex justify-between items-center">
                        <Button
                            variant="default"
                            className="font-bold font-manrope w-full bg-mix"
                            onClick={() => createABudget()}
                        >
                            Create A Budget
                        </Button>
                    </div>
                    <div className="py-3 w-full flex justify-between items-center">
                        <Button
                            variant="outline"
                            className="font-bold font-manrope w-full"
                            onClick={() => login()}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            <div className="h-full hidden md:flex md:flex-col md:items-center md:justify-center">
                <div className="max-w-[320px] max-h-[400px] flex flex-col items-center">
                    <AnimatePresence>
                        {steps === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full"
                            >
                                <div className="relative h-56 mb-16">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-92 text-[#BAE3CD] top-0 absolute z-10 left-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <Image
                                        src="/goals.png"
                                        width={421}
                                        height={400}
                                        className="absolute z-30 right-0 left-0 top-10 w-56"
                                        alt="u-n-i logo"
                                        priority
                                        style={{
                                            width: "auto",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                                <div className="px-3 ">
                                    <h3
                                        className={`font-plus_jakarta_sans text-center ${fontStyle}`}
                                    >
                                        Reach milestones one at a time
                                    </h3>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {steps === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full"
                            >
                                <div className="relative h-56 mb-16">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-92 text-[#BAE3CD] top-0 absolute z-10 left-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <Image
                                        src="/track-expense.png"
                                        width={421}
                                        height={400}
                                        className="absolute z-30 right-0 left-0 top-10 w-56"
                                        alt="u-n-i logo"
                                        priority
                                        style={{
                                            width: "auto",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                                <div className="px-3 ">
                                    <h3
                                        className={`font-plus_jakarta_sans text-center ${fontStyle}`}
                                    >
                                        Set shared wedding budget goals.
                                    </h3>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {steps === 3 && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full"
                            >
                                <div className="relative h-56 mb-16">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-92 text-[#BAE3CD] top-0 absolute z-10 left-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <Image
                                        src="/lead.png"
                                        width={421}
                                        height={400}
                                        className="absolute z-30 right-0 left-0 top-10 w-56"
                                        alt="u-n-i logo"
                                        priority
                                        style={{
                                            width: "auto",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                                <div className="px-3 ">
                                    <h3
                                        className={`font-plus_jakarta_sans text-center ${fontStyle}`}
                                    >
                                        Track real-time updates.
                                    </h3>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {steps === 4 && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="w-full"
                            >
                                <div className="relative h-56 mb-16">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-92 text-[#BAE3CD] top-0 absolute z-10 left-0"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <Image
                                        src="/future.png"
                                        width={421}
                                        height={400}
                                        className="absolute z-30 right-0 left-10 top-10 w-56"
                                        alt="u-n-i logo"
                                        priority
                                        style={{
                                            width: "auto",
                                            height: "100%",
                                        }}
                                    />
                                </div>
                                <div className="px-3 ">
                                    <h3
                                        className={`font-plus_jakarta_sans text-center ${fontStyle}`}
                                    >
                                        Celebrate your dream wedding, together!
                                    </h3>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-6 flex justify-center">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={` h-2 mr-2 focus:outline-none rounded-2xl ${
                                    index === steps - 1
                                        ? "bg-gray-400 w-8"
                                        : "bg-gray-800 w-2"
                                }`}
                            />
                        ))}
                    </div>
                </div>
                {showDialog && (
                    <Dialog
                        showDialog={showDialog}
                        setShowDialog={setShowDialog}
                    />
                )}
            </div>
        </div>
    );
}

export default MainComp;
