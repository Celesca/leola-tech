import type { PropsWithChildren } from "react";

export function GridBackground({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="relative" id="top">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="grid-bg absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
        </div>
        {children}
      </div>
    </div>
  );
}
