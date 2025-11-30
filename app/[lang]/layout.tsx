import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";

export function generateStaticParams() {
  return [{lang : "en"}, {lang : "no"}];
}

export const metadata: Metadata = {
  title: "Portfolio | Stian Ø.J",
  description: "Portfolio, Norwegian, Developer, Web Developer, Backend Developer, Spring, Java, JavaScript",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex min-h-screen flex-col items-center justify-center pt-4 bg-[linear-gradient(var(--accent)_1px,transparent_1px),linear-gradient(90deg,var(--accent)_1px,transparent_1px)] bg-[size:40px_40px] bg-[position:20px_20px] bg-fixed">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
