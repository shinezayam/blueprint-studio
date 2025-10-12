"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Spline from "@splinetool/react-spline";

export default function ProfileSwitcher() {
  const t = useTranslations("about.profiles");
  const [activeProfile, setActiveProfile] = useState<"chinguun" | "shinezaya">("chinguun");
  const [hasSpline, setHasSpline] = useState<boolean | null>(null);
  const [isHoveringCenter, setIsHoveringCenter] = useState(false);

  const isChinguun = activeProfile === "chinguun";
  const isShinezaya = activeProfile === "shinezaya";

  const ROBOT_SCENE_PATH = "/robot_arm/scene.splinecode";

  useEffect(() => {
    let isMounted = true;
    fetch(ROBOT_SCENE_PATH, { method: "HEAD" })
      .then((res) => {
        if (!isMounted) return;
        setHasSpline(res.ok);
      })
      .catch(() => isMounted && setHasSpline(false));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="relative space-y-22 mt-32 py-22 overflow-hidden">
      {/* Robot Arm Background - Receives mouse events but positioned behind UI elements */}
      <div className="absolute inset-0  overflow-hidden pointer-events-auto" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-25">
          <div className="w-full max-w-[800px] h-[1200px] relative">
            {hasSpline ? (
              <div className="w-full h-full">
                <Spline 
                  scene={ROBOT_SCENE_PATH}
                />
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-9xl opacity-20">🤖</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Profile Images Display - Outside the cards */}
      <div className="flex justify-center items-center gap-8 relative mb-6 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Chinguun Images */}
        <div className={`flex gap-6 transition-all duration-500 pointer-events-none ${
          isChinguun ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
        }`}>
          {(t.raw("chinguun.images") as string[]).map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-foreground/10 shadow-xl hover:scale-110 hover:shadow-2xl hover:border-foreground/30 transition-all duration-500 hover:rotate-3 cursor-pointer pointer-events-auto"
              onClick={() => setActiveProfile("chinguun")}
            >
              <Image
                src={img}
                alt={`${t("chinguun.name")} ${idx + 1}`}
                fill
                className="object-cover"
                sizes="160px"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Shinezaya Images */}
        <div className={`flex gap-6 transition-all duration-500 pointer-events-none ${
          isShinezaya ? 'opacity-100 scale-100' : 'opacity-40 scale-90'
        }`}>
          {(t.raw("shinezaya.images") as string[]).map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-foreground/10 shadow-xl hover:scale-110 hover:shadow-2xl hover:border-foreground/30 transition-all duration-500 hover:rotate-3 cursor-pointer pointer-events-auto"
              onClick={() => setActiveProfile("shinezaya")}
            >
              <Image
                src={img}
                alt={`${t("shinezaya.name")} ${idx + 1}`}
                fill
                className="object-cover"
                sizes="160px"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Buttons with Hover Area */}
      <div className="flex justify-center items-center gap-12 relative pointer-events-none" style={{ zIndex: 10 }}>
        <button
          onClick={() => setActiveProfile("chinguun")}
          className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-500 relative transform pointer-events-auto ${
            isChinguun
              ? "bg-foreground text-background shadow-2xl scale-110 ring-4 ring-foreground/20 animate-pulse-subtle"
              : "bg-foreground/10 text-foreground hover:bg-foreground/20 hover:scale-110 hover:shadow-lg"
          }`}
        >
          {t("chinguun.name")}
        </button>

        {/* Interactive hover area between buttons - transparent to allow Spline interaction */}
        <div
          className="w-24 h-14 cursor-pointer group relative pointer-events-none"
          onMouseEnter={() => setIsHoveringCenter(true)}
          onMouseLeave={() => setIsHoveringCenter(false)}
        >
          <div className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
            isHoveringCenter ? 'bg-foreground/5 scale-125' : 'bg-transparent'
          }`} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`text-3xl transition-all duration-500 ${
              isHoveringCenter ? 'scale-150 rotate-12 animate-bounce' : 'scale-100'
            }`}>
              
            </div>
          </div>
        </div>

        <button
          onClick={() => setActiveProfile("shinezaya")}
          className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-500 relative transform pointer-events-auto ${
            isShinezaya
              ? "bg-foreground text-background shadow-2xl scale-110 ring-4 ring-foreground/20 animate-pulse-subtle"
              : "bg-foreground/10 text-foreground hover:bg-foreground/20 hover:scale-110 hover:shadow-lg"
          }`}
        >
          {t("shinezaya.name")}
        </button>
      </div>

      {/* Profile Cards Container */}
      <div className="relative min-h-[650px] pointer-events-none" style={{ zIndex: 10 }}>
        {/* Chinguun Profile */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isChinguun
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 -translate-x-full pointer-events-none"
          }`}
        >
          <div className="rounded-2xl border border-foreground/20 p-8 bg-background/95 backdrop-blur-sm space-y-6 shadow-lg pointer-events-auto">
            {/* Content */}
            <div className="space-y-4 pointer-events-auto">
                <div>
                  <h3 className="text-3xl font-bold text-foreground tracking-tight">{t("chinguun.name")}</h3>
                  <p className="text-foreground/70 mt-2 text-lg">{t("chinguun.role")}</p>
                </div>
                <p className="text-foreground/80 leading-relaxed text-base">{t("chinguun.bio")}</p>

                {/* Certificates & Awards */}
                <div className="mt-6 space-y-4">
                  {/* Coursera Certificates */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/90 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <span>📜</span> Coursera Certificates ({(t.raw("chinguun.certificates") as Array<{name: string, file: string}>).length})
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(t.raw("chinguun.certificates") as Array<{name: string, file: string}>).map((cert, idx) => (
                        <a
                          key={idx}
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg bg-foreground/5 text-foreground text-sm border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-200 flex items-center gap-2"
                        >
                          <span className="text-xs">🎓</span>
                          <span className="line-clamp-1">{cert.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Awards & Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/90 mb-3 uppercase tracking-wide flex items-center gap-2">
                      <span>🏆</span> Awards & Achievements
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(t.raw("chinguun.awards") as Array<{name: string, file: string}>).map((award, idx) => (
                        <a
                          key={idx}
                          href={award.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-lg bg-foreground/5 text-foreground text-sm border border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-200 flex items-center gap-2"
                        >
                          <span className="text-xs">🌟</span>
                          <span className="line-clamp-1">{award.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* Shinezaya Profile */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isShinezaya
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="rounded-2xl border border-foreground/20 p-8 bg-background/95 backdrop-blur-sm space-y-6 shadow-lg pointer-events-auto">
            {/* Content */}
            <div className="space-y-4 pointer-events-auto">
                <div>
                  <h3 className="text-3xl font-bold text-foreground tracking-tight">{t("shinezaya.name")}</h3>
                  <p className="text-foreground/70 mt-2 text-lg">{t("shinezaya.role")}</p>
                </div>
                <p className="text-foreground/80 leading-relaxed text-base">{t("shinezaya.bio")}</p>
                <p className="text-foreground/80 leading-relaxed text-base">{t("shinezaya.fullBio")}</p>

                {/* Skills */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground/90 mb-3 uppercase tracking-wide">Skills & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {(t.raw("shinezaya.skills") as string[]).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-foreground/10 text-foreground text-sm border border-foreground/20 hover:bg-foreground/20 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
