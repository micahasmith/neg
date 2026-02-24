import "./globals.css";
import type { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SidebarAds } from "../components/SidebarAds";

export const metadata = {
  title: "neg — bring your inner hater",
  description: "A negativity-only site where people list the worst parts of each other."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        <div className="mx-auto flex w-full max-w-6xl gap-8 px-6 py-10">
          <main className="flex-1">{children}</main>
          <aside className="hidden w-64 shrink-0 lg:block">
            <SidebarAds />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
