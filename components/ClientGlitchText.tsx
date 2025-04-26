"use client";

import dynamic from "next/dynamic";

const GlitchText = dynamic(() => import("@/components/404Components"), {
  ssr: false,
  loading: () => <div className="text-3xl font-bold">Loading...</div>,
});

export default function ClientGlitchText({
  children,
  speed,
  enableShadows,
  className,
}: {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  className?: string;
}) {
  return (
    <GlitchText
      speed={speed}
      enableShadows={enableShadows}
      className={className}
    >
      {children}
    </GlitchText>
  );
}
