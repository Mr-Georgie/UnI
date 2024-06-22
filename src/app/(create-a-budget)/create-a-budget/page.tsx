import MainComp from "@/components/onboard/main";
import Image from "next/image";

export default function CreateABudget() {
    return (
        <main className="h-screen relative overflow-hidden">
            <div className="absolute -right-28 -top-28 md:-right-20 md:-top-20 h-44 w-44 rounded-full bg-[#b7ccff] z-20"></div>
            <div className="absolute -left-28 -bottom-28 md:-left-20 md:-bottom-20 h-44 w-44 rounded-full bg-[#b7ccff] z-20"></div>
            <div className="mt-4 mx-4">
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
            <MainComp />
        </main>
    );
}
