import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers/provider"

export const metadata: Metadata = {
    title: "Studyhub",
    description: "A place to organize your studies",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
