import type { Metadata } from "next";
import {Poppins, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Section/navigation";

const figtree = Figtree({
  variable:"--font-figtree",
  subsets:["latin"]
})

const poppins = Poppins({
  variable:"--font-poppins",
  subsets:["latin"],
  weight:['100','200','300','400','500', '600','700']
})

export const metadata: Metadata = {
  title: "ACADS FTI ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    suppressHydrationWarning
    >
      <body
        className={`${poppins.className}  antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          <Navigation/>
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
