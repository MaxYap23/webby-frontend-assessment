import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ClientOnly from "@/components/ClientOnly";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webby Assessment",
  description: "Frontend assessment project for Webby Group",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <main>{children}</main>
      </body>
    </html>
  );
}
