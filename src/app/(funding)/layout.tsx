import type { Metadata } from "next";

export default function FundingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
