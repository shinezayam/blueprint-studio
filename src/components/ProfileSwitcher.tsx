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

  const chImages = (t.raw("chinguun.images") as string[]) || [];
  const shImages = (t.raw("shinezaya.images") as string[]) || [];

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
    <div className="relative space-y-16 mt-28 sm:mt-32 py-16 sm:py-22 overflow-hidden">
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
      <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap relative mb-6 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Chinguun Images (Primary + Overlapped Secondary) */}
        <div className={`relative transition-all duration-500 pointer-events-none ${isChinguun ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}`}>
          {chImages[0] && (
            <div
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-foreground/10 shadow-xl hover:scale-110 hover:shadow-2xl hover:border-foreground/30 transition-all duration-500 hover:rotate-3 cursor-pointer pointer-events-auto"
              onClick={() => setActiveProfile("chinguun")}
            >
              <Image
                src={chImages[0]}
                alt={`${t("chinguun.name")} 1`}
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
          )}
          {chImages[1] && (
            <div
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-foreground/10 bg-background cursor-pointer pointer-events-auto"
              onClick={() => setActiveProfile("chinguun")}
              aria-label="Show more Chinguun photos"
            >
              <Image
                src={chImages[1]}
                alt={`${t("chinguun.name")} 2`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          )}
        </div>

        {/* Shinezaya Images (Primary + Overlapped Secondary) */}
        <div className={`relative transition-all duration-500 pointer-events-none ${isShinezaya ? 'opacity-100 scale-100' : 'opacity-40 scale-90'}`}>
          {shImages[0] && (
            <div
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-foreground/10 shadow-xl hover:scale-110 hover:shadow-2xl hover:border-foreground/30 transition-all duration-500 hover:rotate-3 cursor-pointer pointer-events-auto"
              onClick={() => setActiveProfile("shinezaya")}
            >
              <Image
                src={shImages[0]}
                alt={`${t("shinezaya.name")} 1`}
                fill
                className="object-cover"
                sizes="160px"
                priority
              />
            </div>
          )}
          {shImages[1] && (
            <div
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-foreground/10 bg-background cursor-pointer pointer-events-auto"
              onClick={() => setActiveProfile("shinezaya")}
              aria-label="Show more Shinezaya photos"
            >
              <Image
                src={shImages[1]}
                alt={`${t("shinezaya.name")} 2`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          )}
        </div>
      </div>

      {/* Toggle Buttons with Hover Area */}
      <div className="flex justify-center items-center gap-4 sm:gap-12 px-4 relative pointer-events-none" style={{ zIndex: 10 }}>
        <button
          onClick={() => setActiveProfile("chinguun")}
          className={`px-6 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-500 relative transform pointer-events-auto ${
            isChinguun
              ? "bg-foreground text-background shadow-2xl scale-110 ring-4 ring-foreground/20 animate-pulse-subtle"
              : "bg-foreground/10 text-foreground hover:bg-foreground/20 hover:scale-110 hover:shadow-lg"
          }`}
        >
          {t("chinguun.name")}
        </button>

        {/* Interactive hover area between buttons - transparent to allow Spline interaction */}
        <div
          className="hidden sm:block w-24 h-14 cursor-pointer group relative pointer-events-none"
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
          className={`px-6 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-500 relative transform pointer-events-auto ${
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
