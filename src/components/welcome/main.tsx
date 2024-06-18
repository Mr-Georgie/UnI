"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function MainComp() {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        let timer: NodeJS.Timeout;

        timer = setTimeout(() => {
            localStorage.setItem("showWelcome", "No");
            router.push("/onboard");
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-custom-gradient h-full w-full flex justify-center items-center">
            <div className="">
                <Image
                    src="/logo.png"
                    width={100}
                    height={100}
                    className="animate-pulse"
                    alt="u-n-i logo"
                    priority
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>
    );
}

export default MainComp;
