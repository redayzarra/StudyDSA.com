import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import QueryClientProvider from "./QueryClientProvider";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

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
        <body className={`${inter.className} dark`}>
          <QueryClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              {/* <SmoothScroll>{children}</SmoothScroll> */}
              {children}
              <Footer />
              <Toaster />
            </ThemeProvider>
          </QueryClientProvider>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "StudyDSA",
  },
  description:
    "Start mastering Data Structures & Algorithms - interactive, engaging, and suitable for all skill levels.",
};
