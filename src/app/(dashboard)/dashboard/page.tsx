import MainComp from "@/components/dashboard/main";
import DashboardLayout from "@/components/reusables/dashboard-layout";
// import Image from "next/image";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <MainComp />
        </DashboardLayout>
    );
}
