"use client";
import "./globals.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

// Load the Sunshine font
const sunshine = localFont({
  src: "./fonts/Sunshine.ttf",
  variable: "--font-sunshine",
});

// Load the Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "900"],
  variable: "--font-raleway",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${sunshine.variable}`}>
      <body>
        <Script src={"https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"} />
        {children}
        <ProgressBar
          height="2px"
          color="#db5235"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
