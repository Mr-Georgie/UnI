import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Uni | Dashboard",
    description: "Manage your budget and savings",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
