import MainComp from "@/components/budget-manager/create/main";
import DashboardLayout from "@/components/reusables/dashboardLayout";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import Image from "next/image";

export default function CreateBudget() {
    return (
        <DashboardLayout>
            <MainComp />
        </DashboardLayout>
    );
}
