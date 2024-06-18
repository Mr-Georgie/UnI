import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";
import { ScrollArea } from "../ui/scroll-area";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <main className="h-screen md:grid md:grid-cols-[210px_1fr] bg-slate-200 font-plus_jakarta_sans">
            <Sidebar />

            <div className="border bg-white h-full w-full overflow-hidden">
                {/* top */}
                <Header />
                <ScrollArea className="h-full w-full pb-20">
                    {children}
                </ScrollArea>
            </div>
        </main>
    );
};

export default DashboardLayout;
