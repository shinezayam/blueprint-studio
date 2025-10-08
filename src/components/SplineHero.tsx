"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

type Props = { className?: string };

export default function SplineHero({ className }: Props) {
  const [hasSpline, setHasSpline] = useState<boolean | null>(null);
  const SCENE_PATH = "/animated-shape_blend/scene.splinecode";

  useEffect(() => {
    let isMounted = true;
    fetch(SCENE_PATH, { method: "HEAD" })
      .then((res) => {
        if (!isMounted) return;
        setHasSpline(res.ok);
      })
      .catch(() => isMounted && setHasSpline(false));
    return () => {
      isMounted = false;
    };
  }, []);

  const rootClass = className ? `${className} relative overflow-hidden` : "relative h-[360px] sm:h-[600px] w-[800px] overflow-hidden";

  return (
    <div className={rootClass}>
      <div className="absolute inset-0 opacity-[0.9]">
        {hasSpline ? (
          <Spline scene={SCENE_PATH} />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full blur-2xl opacity-50 animate-float bg-gradient-to-br from-indigo-400 to-purple-400" />
            <div className="absolute -bottom-10 -right-16 h-80 w-80 rounded-full blur-2xl opacity-40 animate-float-delayed bg-gradient-to-br from-fuchsia-400 to-cyan-400" />
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
    </div>
  );
}


