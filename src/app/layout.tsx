import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers/provider"
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    title: "Estudaki",
    description: "Organizar os estudos de forma fácil",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body cz-shortcut-listen="true">
                <Providers>
                    {children}
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}
