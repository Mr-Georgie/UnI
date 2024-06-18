import MainComp from "@/components/budget-manager/home/main";
import DashboardLayout from "@/components/reusables/dashboardLayout";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import Image from "next/image";

export default function BudgetHome() {
    return (
        <DashboardLayout>
            <MainComp />
        </DashboardLayout>
    );
}
