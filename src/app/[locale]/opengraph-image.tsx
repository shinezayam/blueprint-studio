import { ImageResponse } from "next/og";
import { locales } from "@/i18n/locales";

export const alt = "Blueprint Studio — product studio for iOS, Android, and web";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Rendered at build time so every shared link gets a real preview card
// instead of an empty one.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090c",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* accent wash */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -180,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(20,56,204,0.55) 0%, rgba(8,9,12,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 5,
              background: "#1438cc",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              display: "flex",
            }}
          >
            Blueprint Studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -2.5,
              lineHeight: 1.05,
              color: "#ffffff",
              display: "flex",
            }}
          >
            Ideas, Made Real.
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.62)",
              maxWidth: 900,
              display: "flex",
            }}
          >
            A two-person product studio shipping iOS, Android, and web — design through production.
          </div>
        </div>

        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.42)",
            display: "flex",
            gap: 18,
          }}
        >
          <span>Chinguun &amp; Shinezaya</span>
          <span>·</span>
          <span>Ulaanbaatar, Mongolia</span>
        </div>
      </div>
    ),
    size,
  );
}
