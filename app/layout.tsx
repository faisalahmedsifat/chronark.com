import "../global.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Faisal Ahmed Sifat",
    template: "%s | Faisal Ahmed Sifat",
  },
  description: "CEO at AlphaWolf Ventures, Inc. Building Tensorify.io and other AI-powered platforms for developers, researchers, and businesses.",
  openGraph: {
    title: "Faisal Ahmed Sifat",
    description:
      "CEO at AlphaWolf Ventures, Inc. Building Tensorify.io and other AI-powered platforms for developers, researchers, and businesses.",
    url: "https://theentrepreneuw.com",
    siteName: "Faisal Ahmed Sifat",
    images: [
      {
        url: "https://theentrepreneuw.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Faisal Ahmed Sifat",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
