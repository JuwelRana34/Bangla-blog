import { Roboto  } from "next/font/google";
import "./globals.css";

import { NavbarComponent } from "@/components/NavbarComponent";

export const metadata = {
  title: "Home | Bangla Blog",
  description: "bangla blog app for blogers",
};

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="https://cdn-icons-png.flaticon.com/128/3669/3669967.png"
        sizes="any"
      />

      <body
        className={`${roboto.className} antialiased`}
      >
        <NavbarComponent />

        <main className=" container mx-auto min-h-screen ">{children}</main>
        <footer className="text-center text-sm bg-slate-100 py-5 text-black">
          © 2023 - {new Date().getFullYear()} Bangla Blog. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
