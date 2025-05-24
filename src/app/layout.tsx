import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import StyledComponentsRegistry from "@/lib/registry";
import fonts from "@/lib/fonts";
import metadataGlobal from "@/lib/metadata";
import Footer from "@/components/ui/footer/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = metadataGlobal;

const { roboto } = fonts;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Vercel Analytics */}
      <Analytics />
      <body className={`${roboto.className} antialiased`}>
        <StyledComponentsRegistry>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
