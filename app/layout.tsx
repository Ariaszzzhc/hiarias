import localFont from "next/font/local";
import "./globals.css";
import "highlight.js/styles/github.min.css";
import { HeaderBar } from "@/components/header-bar";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://esm.sh/@wooorm/starry-night@3/style/both.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderBar />
        <div id="main-body" className="container mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
