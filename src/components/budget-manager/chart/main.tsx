"use client";

import Link from "next/link";
import Header from "../home/header";
import RecentActivities from "@/components/home/recentActivities";

function MainComp() {
    return (
        <section className="px-1 sm:px-4 md:px-8 py-4 w-full overflow-y-hidden overflow-x-hidden">
            <Header />

            {/* <div className="grid grid-cols-1 gap-3 items-start mb-3">
                <Summary />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
                <Breakdown />
                <Activities />
            </div> */}
        </section>
    );
}

export default MainComp;
