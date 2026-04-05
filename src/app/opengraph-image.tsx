import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #1e1e1e 0%, #0e2433 100%)",
          color: "#ffffff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 32, opacity: 0.9 }}>Pumpkin Computing</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            <span>Enterprise AI, ML,</span>
            <span>and Data Automation</span>
          </div>
          <div style={{ fontSize: 30, opacity: 0.9 }}>
            Analytics, data engineering, and custom software for measurable growth
          </div>
        </div>
      </div>
    ),
    size
  );
}
