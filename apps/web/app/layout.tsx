import "@workspace/ui/styles/globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@workspace/ui/components/themeProvider";
import Nav from "@workspace/ui/components/nav";
import Footer from "@workspace/ui/components/footer";

const baseUrl = "https://tunelab.theosis.ai";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Llama Lab",
    template: "%s | Llama Lab",
  },
  description: "finetune llamas with torchtune",
  openGraph: {
    title: "Llama Lab",
    description: "finetune llamas with torchtune",
    url: baseUrl,
    siteName: "Llama Lab",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
