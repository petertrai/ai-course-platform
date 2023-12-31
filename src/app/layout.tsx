import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";

const lexend = Lexend({ subsets: ["latin"] });
export const dynamic = "force-dynamic"
export const metadata: Metadata = {
  title: "Course Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn(lexend.className, "antialiased min-h-screen pt-16")}>
        <Provider>
          {/* @ts-expect-error Server Component */}
          <Navbar />

          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
