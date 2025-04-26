"use client";

import { Suspense, ReactNode } from "react";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div>Loading app shell...</div>}>{children}</Suspense>
  );
}
