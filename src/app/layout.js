import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavbarComponent } from "@/components/NavbarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Bangla Blog",
  description: "bangla blog app for blogers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="https://cdn-icons-png.flaticon.com/128/3669/3669967.png"
        sizes="any"
      />
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
         <NavbarComponent />
      </nav>
       
        <main className=" container mx-auto min-h-screen ">{children}</main>
 <footer className="text-center text-sm bg-slate-100 py-5 text-black">

     © 2023 - {new Date().getFullYear()} Bangla Blog. All rights reserved.

 </footer>
      </body>
    </html>
  );
}
