import MainComp from "@/components/home/main";
import DashboardLayout from "@/components/reusables/dashboardLayout";
import Image from "next/image";

export default function Home() {
    return (
        <DashboardLayout>
            <MainComp />
        </DashboardLayout>
    );
}
