import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Uni | Create Budget",
    description: "In 3 Easy Steps",
};

export default function CreateBudgetLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
