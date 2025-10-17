import { Header } from "@/components/header";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
