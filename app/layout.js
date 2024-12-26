import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

export const metadata = {
  title: "NextJs Outlook",
  description: "A simplified email application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
