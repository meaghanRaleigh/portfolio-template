import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col text-[var(--muted)] bg-[var(--background)]">
        <Navbar />
        <main className="flex-grow" id="main">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
