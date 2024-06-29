"use client";

import Header from "../dashboard/header";
import Sidebar from "../dashboard/sidebar";
import { ScrollArea } from "../ui/scroll-area";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Top from "../extras/top";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <main className="h-screen md:grid md:grid-cols-[210px_1fr] bg-white font-plus_jakarta_sans">
            <Sidebar />

            <div className="border bg-slate-200 h-full w-full overflow-hidden">
                <Header />

                <ScrollArea className="h-full w-full pb-20">
                    <Top />
                    {children}
                </ScrollArea>
            </div>
        </main>
    );
};

export default withPageAuthRequired(DashboardLayout);
