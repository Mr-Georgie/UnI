import MainComp from "@/components/budget-manager/chart/main";
import DashboardLayout from "@/components/reusables/dashboardLayout";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import Image from "next/image";

export default function BudgetChart() {
    return (
        <DashboardLayout>
            <MainComp />
        </DashboardLayout>
    );
}
