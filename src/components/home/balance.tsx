"use client";

import { Card, ProgressBar } from "@tremor/react";
import { Button } from "../ui/button";
import { useState } from "react";

function Balance() {
    const [showBalance, setShowBalance] = useState(false);

    const togglePasswordVisibility = () => {
        setShowBalance(!showBalance);
    };

    return (
        <Card className="w-full min-h-[190px] rounded-lg text-white bg-green relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#bae3cd] "></div>
            <h4 className="text-tremor-default ">Wallet Balance</h4>
            <div className="grid grid-cols-6 gap-3">
                <p className="text-tremor-metric font-bold col-span-5 z-40">
                    {showBalance ? `₦${"100,000.00"}` : "₦*.**"}
                </p>
                <div className="col-span-1 z-40">
                    <Button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="px-2 flex items-center focus:outline-none text-white bg-black/50 hover:bg-black/80"
                    >
                        {showBalance ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        )}
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-4 right-0 left-4 flex items-center justify-between text-xs ">
                <Button
                    variant="secondary"
                    className="font-semibold font-outfit"
                >
                    Add/Remove Fund
                </Button>
            </div>
        </Card>
    );
}

export default Balance;
