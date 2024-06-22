"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Dialog from "./dialog";
import { useUser } from "@auth0/nextjs-auth0/client";

function MainComp() {
    const [arcPercent, setArcPercent] = useState(20);
    const [steps, setSteps] = useState<number>(1);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const router = useRouter();
    // const { user, error, isLoading } = useUser();

    const handleNext = () => {
        setArcPercent((prev) => (prev >= 100 ? 100 : prev + 40));
        setSteps((prev) => (prev >= 4 ? 4 : prev + 1));
    };
    const gradient = `conic-gradient(#b7ccff ${arcPercent}%, transparent 0)`;

    const fontStyle = "text-2xl font-extrabold";

    // useLayoutEffect(() => {
    //     if (!isLoading && user) {
    //         console.log(user);
    //         router.push("/dashboard");
    //     }
    // }, [isLoading, user]);

    return (
        <div className="h-full md:grid md:grid-cols-2">
            <div className="bg-custom-gradient container py-8 h-full hidden md:flex md:flex-col md:justify-between">
                <div>
                    <Image
                        src="/logo.png"
                        width={60}
                        height={60}
                        className=""
                        alt="u-n-i logo"
                        priority
                        // style={{ width: "50%", height: "auto" }}
                    />
                </div>
                <div className="text-white">
                    <p className="font-manrope font-semibold text-sm">
                        {
                            '"UnI helps you budget for your special day, your wedding. It\'s a minimal budget app that simply focuses on your budget goal and how you and your partner reaches it."'
                        }
                    </p>
                    <p className="font-outfit py-2 font-semibold">
                        George Isiguzo
                    </p>
                </div>
            </div>
            <div className="h-full flex flex-col items-center justify-center">
                <div className="max-w-[320px] flex flex-col items-center">
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
                                        className={`font-plus_jakarta_sans ${fontStyle}`}
                                    >
                                        Stress-Free Savings
                                    </h3>
                                </div>
                                <div className="pt-6 px-3">
                                    <p className="font-normal font-manrope  text-sm">
                                        Are expenses causing stress and
                                        uncertainty? UnI is here to help! Say
                                        goodbye to financial headaches and hello
                                        to seamless savings management.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
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
                                        className={`font-plus_jakarta_sans ${fontStyle}`}
                                    >
                                        Turn dreams into reality
                                    </h3>
                                </div>
                                <div className="pt-6 px-3">
                                    <p className="font-normal font-manrope  text-sm">
                                        With UnI, you can turn your wedding
                                        dreams into reality. Set savings goals,
                                        track progress, and celebrate
                                        milestones—all in one place!
                                    </p>
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
                                        className={`font-plus_jakarta_sans ${fontStyle}`}
                                    >
                                        Build a Strong Foundation Together
                                    </h3>
                                </div>
                                <div className="pt-6 px-3">
                                    <p className="font-normal font-manrope  text-sm">
                                        UnI empowers you to build a solif
                                        financial foundation together, setting
                                        the stage for a lifetime of shared
                                        dreams.
                                    </p>
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
                                        className={`font-plus_jakarta_sans ${fontStyle}`}
                                    >
                                        Achieve milestones together
                                    </h3>
                                </div>
                                <div className="pt-6 px-3">
                                    <p className="font-normal font-manrope  text-sm">
                                        With transparency and security at its
                                        core, you can start your journey towards
                                        marital bliss on UnI with confidence!
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {steps !== 4 ? (
                        <div className="pt-10 pb-6 w-full flex justify-between items-center px-3">
                            <Button
                                variant="ghost"
                                className="font-bold font-manrope"
                            >
                                Skip
                            </Button>
                            <div
                                className="relative flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full"
                                style={{
                                    background: gradient,
                                }}
                            >
                                <div className="absolute inset-0 bg-white rounded-full m-2"></div>
                                <Button
                                    // variant="ghost"
                                    onClick={handleNext}
                                    className="bg-blue absolute z-10 p-2 text-white rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6 text-white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="pt-10 pb-6 w-full flex justify-between items-center px-3">
                            <Button
                                variant="default"
                                className="font-bold font-manrope w-full bg-blue"
                                onClick={() => setShowDialog(true)}
                            >
                                Lets go!
                            </Button>
                        </div>
                    )}
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
