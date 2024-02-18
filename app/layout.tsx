import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind CSS button collection - Click-to-copy integration",
  description:
    "Discover a collection of Tailwind CSS buttons designed to enhance your website's look. Easy to integrate with a copy-paste, no js.",
  openGraph: {
    title: "Tailwind CSS button collection - Click-to-copy integration",
    description:
      "Discover a collection of Tailwind CSS buttons designed to enhance your website's look. Easy to integrate with a copy-paste, no js.",
    type: "website",
    url: "https://buttons.ibelick.com",
    images: [
      {
        url: "https://buttons.ibelick.com/opengraph-image.jpg",
        alt: "Tailwind CSS button collection - Click-to-copy integration",
      },
    ],
  },
  twitter: {
    site: "@ibelick",
    images: [
      {
        url: "https://buttons.ibelick.com/opengraph-image.jpg",
        alt: "Tailwind CSS button collection - Click-to-copy integration",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en">
      {!isDev ? (
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="9b94d3fb-fba5-48e9-8c6b-a80fca312be2"
        />
      ) : null}
      <Toaster />
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
