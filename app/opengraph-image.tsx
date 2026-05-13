import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hayat Amin — Fractional CFO. IP & Data Strategist. AI Agent Operator.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0f0e0c 0%, #1a1714 55%, #2a201b 100%)",
          color: "#f5efe6",
          fontFamily: "system-ui, -apple-system, Segoe UI, Helvetica, Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#c9b59a",
          }}
        >
          <div>Hayat Amin · Operator</div>
          <div>meethayat.com</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#fff8ee",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>One operator.</span>
            <span style={{ fontStyle: "italic", color: "#e8c89a" }}>
              Three pillars.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#cfc4b1",
              maxWidth: 1000,
              lineHeight: 1.3,
            }}
          >
            Fractional CFO · IP &amp; Data Strategist · AI Agent Operator
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#9c8b73",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>3 exits</span>
            <span style={{ color: "#5d4f3f" }}>·</span>
            <span>3× FT100</span>
            <span style={{ color: "#5d4f3f" }}>·</span>
            <span>20 years in tech</span>
          </div>
          <div style={{ color: "#c9b59a" }}>NYC · London · Dubai</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
