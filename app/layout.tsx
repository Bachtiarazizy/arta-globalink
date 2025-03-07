import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ScrollProvider from "./components/scroll-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Arta Globalink",
  description: "Connecting Markets, Expanding Horizons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        <ScrollProvider>{children}</ScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
