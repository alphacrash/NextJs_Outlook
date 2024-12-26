import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "NextJs Outlook",
  description: "A simplified email application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
