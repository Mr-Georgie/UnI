import Header from "@/components/error/header";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
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
                        <h2>Page Not Found</h2>
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
                </main>
            </>
        </div>
    );
}
