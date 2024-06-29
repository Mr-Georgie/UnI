import MainComponent from "@/components/landing-page/main-component";

export default function Home() {
    return (
        <div className="md:h-screen h-[calc(100dvh)] relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>
            <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>

            <MainComponent />
        </div>
    );
}
