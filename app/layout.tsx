import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Container from "@/components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyDSA",
  description:
    "Start mastering Data Structures & Algorithms - interactive, engaging, and suitable for all skill levels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background to-muted-foreground/25 dark:from-accent dark:to-background`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Container>
            <main className="mt-16 ">{children}</main>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
