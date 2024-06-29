import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ReduxProvider from "@/store/provider";

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
    description: "Saying 'I do' to your finances",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <UserProvider>
                <ReduxProvider>
                    <body
                        className={`${inter.variable} ${manrope.variable} ${plus_jakarta_sans.variable} ${outfit.variable}`}
                    >
                        {children}
                        <Toaster />
                    </body>
                </ReduxProvider>
            </UserProvider>
        </html>
    );
}
