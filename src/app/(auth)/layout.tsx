import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Uni | Couples #1 Budget-Savings App",
    description: "Saying 'I do' to your finances",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
