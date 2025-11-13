import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Stian O.J",
  description: "A portfolio website where I show off my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          <div className="flex min-h-screen flex-col items-center justify-center pt-4">
            {children}
          </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
