import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import QueryClientProvider from "./QueryClientProvider";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

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

export const metadata: Metadata = {
  title: {
    template: "%s | StudyDSA",
    default: "StudyDSA",
  },
  description:
    "Start mastering Data Structures & Algorithms - interactive, engaging, and suitable for all skill levels.",
};
