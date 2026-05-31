import "./globals.css";
import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { seoDefaults } from "@/data/seo";

export const metadata: Metadata = {
  title: seoDefaults.defaultTitle,
  description: seoDefaults.defaultDescription,
  metadataBase: new URL(seoDefaults.baseUrl),
  openGraph: {
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
    url: seoDefaults.baseUrl,
    siteName: seoDefaults.siteName,
    images: [{ url: seoDefaults.ogImage }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
