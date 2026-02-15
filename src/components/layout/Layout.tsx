import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { GlobalBackground } from "@/components/ui/GlobalBackground";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <GlobalBackground />
      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}