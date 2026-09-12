"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

/* Code-split: the Spline runtime is large and purely decorative, so it
   must not sit in the page bundle. */
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

const SCENE_PATH = "/animated-shape_blend/scene.splinecode";

type Props = { className?: string };

export default function SplineHero({ className }: Props) {
  /* The scene is ~730KB across three files. Previously a HEAD probe ran first
     and the scene only started downloading after it resolved, costing a full
     extra round-trip before anything could render. Now the gradient paints
     immediately and the scene is requested once the browser is idle, so it
     competes with neither hydration nor the hero copy. */
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const w = window as IdleWindow;

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setShowScene(true), { timeout: 2000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setShowScene(true), 300);
    return () => window.clearTimeout(id);
  }, []);

  const rootClass = className
    ? `${className} relative overflow-hidden`
    : "relative h-[360px] sm:h-[600px] w-[800px] overflow-hidden";

  return (
    <div className={rootClass}>
      {/* Painted instantly, and stays as the backdrop if the scene never
          loads — so the hero is never an empty rectangle. */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full blur-2xl opacity-50 animate-float bg-gradient-to-br from-indigo-400 to-purple-400" />
        <div className="absolute -bottom-10 -right-16 h-80 w-80 rounded-full blur-2xl opacity-40 animate-float-delayed bg-gradient-to-br from-fuchsia-400 to-cyan-400" />
      </div>

      {showScene ? (
        <div className="absolute inset-0 opacity-[0.9] motion-safe:animate-[fadeInUp_600ms_ease-out]">
          <Spline scene={SCENE_PATH} />
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
    </div>
  );
}


