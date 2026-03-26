import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    default: "Iris Florets Marredpally | The Happy Play School",
    template: "%s | Iris Florets Marredpally",
  },
  description:
    "Iris Florets Preschool & Daycare at West Marredpally, Hyderabad. A BITS Pilani & IIM Alumni Initiative offering programs for ages 1.5–5.5 years. 100+ awards. Admissions open.",
  keywords: [
    "preschool marredpally",
    "daycare marredpally",
    "iris florets",
    "play school hyderabad",
    "nursery west marredpally",
    "kindergarten secunderabad",
    "best preschool hyderabad",
  ],
  openGraph: {
    title: "Iris Florets Marredpally | The Happy Play School",
    description:
      "Award-winning preschool & daycare in West Marredpally, Hyderabad. Nurturing young minds with the Iris 7 Petals curriculum.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
