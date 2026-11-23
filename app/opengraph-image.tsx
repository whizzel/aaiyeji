import { ImageResponse } from "next/og";

export const alt = "Aaiyeji — a beautiful way to say, you’re invited.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Raster Open Graph cover generated at build time (social crawlers, including
 * WhatsApp, prefer PNG). Master concept: brand-assets/social/og-cover.svg.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#351824",
          padding: "90px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "2px solid #C99B50",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, color: "#FBF7F0", letterSpacing: 14, fontFamily: "serif" }}>
            AAIYEJI
          </div>
          <div style={{ width: 540, height: 2, background: "#C99B50", marginTop: 26, display: "flex" }} />
          <div
            style={{
              fontSize: 42,
              color: "#E4C98F",
              fontStyle: "italic",
              marginTop: 30,
              fontFamily: "serif",
            }}
          >
            A beautiful way to say, you’re invited.
          </div>
          <div style={{ fontSize: 23, color: "#FBF7F0", letterSpacing: 3, marginTop: 34, opacity: 0.85 }}>
            PERSONALISED DIGITAL INVITATION WEBSITES
          </div>
          <div style={{ fontSize: 23, color: "#FBF7F0", letterSpacing: 3, marginTop: 12, opacity: 0.6 }}>
            WEDDINGS & LIFE’S SPECIAL CELEBRATIONS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
