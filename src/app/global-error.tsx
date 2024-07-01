"use client";

import Link from "next/link";
import Header from "@/components/error/header";
import { Button, buttonVariants } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="md:h-screen h-[calc(100dvh)] relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>
                    <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>
                    <>
                        <Header />
                        <main
                            role="main"
                            className="h-full flex justify-center items-center"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="">
                                    <h3>Something went wrong!</h3>
                                </div>
                                <div className="flex flex-col gap-3 w-full">
                                    {/* <Button className="btn-primary" onClick={() => reset()}>
                                        Refresh
                                    </Button> */}
                                    <Link
                                        href="/"
                                        className={buttonVariants({
                                            variant: "outline",
                                            className: "",
                                        })}
                                    >
                                        Return Home
                                    </Link>
                                </div>
                            </div>
                        </main>
                    </>
                </div>
            </body>
        </html>
    );
}
