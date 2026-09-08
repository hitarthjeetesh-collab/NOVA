import type { Metadata } from "next";
import Script from "next/script";

import GoogleAnalytics from "./GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVA",
  description: "An intelligent workspace for building what's next.",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "-1K-5zDv2IfZpq2qklfaronV8VuFZiGpnE_L6yWJ6mY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ES46D799BM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ES46D799BM', {
              send_page_view: false
            });
          `}
        </Script>

        <GoogleAnalytics />

        {children}
      </body>
    </html>
  );
}