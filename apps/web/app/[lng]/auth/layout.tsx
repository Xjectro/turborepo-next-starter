"use client";

import * as React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start w-full max-w-xs gap-10">
        {children}
      </div>
    </div>
  );
}
