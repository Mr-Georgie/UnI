import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Uni | Home",
    description: "Saying 'I do' to your finances",
};

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <section>{children}</section>;
}
