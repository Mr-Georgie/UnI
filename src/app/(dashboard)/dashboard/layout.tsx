import type { Metadata } from "next";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
