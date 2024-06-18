import MainComp from "@/components/signup/main";

export default function Signup() {
    return (
        <main className="h-screen relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>
            <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>
            <MainComp />
        </main>
    );
}
