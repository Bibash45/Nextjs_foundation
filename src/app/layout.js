"use client";
import "./globals.css";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
