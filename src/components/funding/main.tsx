"use client";

import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { nanoid } from "@reduxjs/toolkit";

function MainComp() {
    const router = useRouter();
    const [initiatePaymentStatus, setInitiatePaymentStatus] = useState("");
    const [redirectLink, setRedirectLink] = useState("");
    const { toast } = useToast();

    useEffect(() => {
        const redirect = () => {
            let timer: NodeJS.Timeout;

            if (initiatePaymentStatus === "success") {
                toast({
                    description: "Success! you will be redirected shortly",
                });

                timer = setTimeout(() => {
                    router.push(redirectLink);
                }, 3000);
            } else if (initiatePaymentStatus === "") {
                console.log("page mounting");
            } else {
                toast({
                    description:
                        "Unable to redirect as payment initiation failed",
                });
            }

            return () => clearTimeout(timer);
        };

        redirect();
    }, [initiatePaymentStatus, redirectLink]);

    async function pay() {
        try {
            const response = await fetch("/api/fund", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: "chetamdavies@gmail.com",
                    transactionRef: nanoid(20),
                    amount: "100",
                    currency: "NGN",
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.error || "Request failed. Bad request");
                setInitiatePaymentStatus(
                    errorData.error || "Request failed. Bad request"
                );
            }

            let json = await response.json();

            console.log(json);
            setInitiatePaymentStatus(json.status);
            setRedirectLink(json.data.link);
        } catch (err) {
            console.log(err);
        }

        // finally {
        //     setIsLoading(false);
        // }
    }

    return (
        <div>
            <div>
                <Button variant="primary" className="text-lg p-5" onClick={pay}>
                    Pay
                </Button>
            </div>

            <div className="mt-6 text-lg font-semibold">
                {initiatePaymentStatus}
            </div>
        </div>
    );
}

export default MainComp;
