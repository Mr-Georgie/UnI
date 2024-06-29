import MainComponent from "@/components/create-budget/main-component";

export default function CreateBudget() {
    return (
        <div className="md:h-screen h-[calc(100dvh)]">
            {/* <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div>
            <div className="absolute -left-20 -bottom-20 h-44 w-44 rounded-full bg-[#b7ccff]"></div> */}
            <MainComponent />
        </div>
    );
}
