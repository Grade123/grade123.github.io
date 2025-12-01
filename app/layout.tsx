import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";


export const metadata: Metadata = {
  title: "Portfolio | Stian Ø.J",
  description: "Portfolio, Norwegian, Developer, Web Developer, Backend Developer, Spring, Java, JavaScript",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
