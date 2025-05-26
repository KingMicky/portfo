import type { Metadata } from "next";
import "./globals.css";
import { Tenor_Sans, Cardo } from "next/font/google";

import Wrapper from "@/components/Wrapper";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: ["400"], variable: "--font-tenor" });
const cardo = Cardo({ subsets: ["latin"], weight: ["400"], variable: "--font-cardo" });

const siteMeta = {
  name: "Okechukwu Joshua Onyedikachi",
  title: "Okechukwu Joshua Onyedikachi – DevOps & Cloud Engineer",
  description:
    "Cloud & DevOps Engineer specializing in Terraform, Kubernetes, CI/CD, and scalable cloud systems on Azure and AWS.",
  url: "https://yourdomain.com",
  image: "https://yourdomain.com/og.png",
};

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.title,
    images: [{ url: siteMeta.image, alt: siteMeta.name }],
    type: "website",
  },
  twitter: {
    title: siteMeta.title,
    description: siteMeta.description,
    images: [{ url: siteMeta.image, alt: siteMeta.name }],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${tenor.variable} ${cardo.variable} font-sans bg-white text-[#1a1a1a] dark:bg-[#121212] dark:text-white transition-colors duration-300`}
      >
        <Wrapper>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
