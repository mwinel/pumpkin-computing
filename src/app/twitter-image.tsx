import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pumpkin Computing - Enterprise AI and Data Automation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgb(30,30,30) 0%, rgb(46,46,46) 100%)",
          color: "white",
          padding: "70px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            opacity: 0.9,
            marginBottom: 20,
          }}
        >
          Pumpkin Computing
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: "1000px",
            marginBottom: 16,
          }}
        >
          Enterprise AI, ML, and Data Automation
        </div>
        <div
          style={{
            fontSize: 30,
            opacity: 0.92,
            maxWidth: "980px",
          }}
        >
          Data engineering, analytics, and software systems for measurable business outcomes.
        </div>
      </div>
    ),
    size
  );
}
