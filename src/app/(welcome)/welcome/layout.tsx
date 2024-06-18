import type { Metadata } from "next";

export default function WelcomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
