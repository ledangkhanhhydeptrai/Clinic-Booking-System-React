import React from "react";

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-teal-50/40 flex items-center justify-center p-4 medical-pattern relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-b from-teal-400/10 to-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-b from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl" />
      <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {children}
      </div>
    </div>
  );
}
