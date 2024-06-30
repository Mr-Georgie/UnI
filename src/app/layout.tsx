import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextauth/auth";
import ClientWrapper from "./context/client-wrapper";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-manrope",
});

const plus_jakarta_sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plus-jakarta-sans",
});

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Uni | Couples #1 Budget-Savings App",
    description: 'Saying "I do" to your finances',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${manrope.variable} ${plus_jakarta_sans.variable} ${outfit.variable}`}
            >
                <ClientWrapper session={session}>{children}</ClientWrapper>
            </body>
        </html>
    );
}
