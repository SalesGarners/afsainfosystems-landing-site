import { Syne, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: {
    default: "AFSA Infosystems — Cloud Computing & IT Consulting",
    template: "%s | AFSA Infosystems",
  },
  description:
    "AFSA Infosystems is a leading IT consulting & services company delivering cloud computing, application development, big data and Oracle EBS solutions to enterprises globally.",
  keywords: [
    "cloud computing", "AWS consulting", "Oracle cloud", "big data",
    "application development", "IT consulting", "managed services",
    "Azure", "GCP", "Oracle EBS",
  ],
  authors: [{ name: "AFSA Infosystems Pvt. Ltd." }],
  metadataBase: new URL("https://afsainfosystems.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://afsainfosystems.com",
    siteName: "AFSA Infosystems",
    title: "AFSA Infosystems — Cloud Computing & IT Consulting",
    description:
      "End-to-end cloud consulting across AWS, Azure, GCP and Oracle. We help global enterprises modernize, migrate and manage their most critical workloads.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AFSA Infosystems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AFSA Infosystems — Cloud Computing & IT Consulting",
    description: "End-to-end cloud consulting across AWS, Azure, GCP and Oracle.",
    images: ["/og-image.png"],
    creator: "@afsainfosystems",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`} style={{ scrollPaddingTop: "80px" }}>
      <body
        className="antialiased bg-white text-gray-900"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}