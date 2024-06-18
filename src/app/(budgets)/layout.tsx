import type { Metadata } from "next";

export default function CreateBudgetLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
