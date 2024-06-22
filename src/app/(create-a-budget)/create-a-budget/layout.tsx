import type { Metadata } from "next";

export default function OnboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
