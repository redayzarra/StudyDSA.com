import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import QueryClientProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyDSA",
  description:
    "Start mastering Data Structures & Algorithms - interactive, engaging, and suitable for all skill levels.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${inter.className}`}>
          <QueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {/* <SmoothScroll>{children}</SmoothScroll> */}
              {children}
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
