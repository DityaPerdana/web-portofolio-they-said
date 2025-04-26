import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "NyctOwl Studio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom, #1e293b, #0f172a)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <img
          src="https://your-domain.com/logonobg.png"
          alt="NyctOwl Studio Logo"
          style={{ height: "200px", marginRight: "20px" }}
        />
        <div>
          <div style={{ fontSize: "64px" }}>NyctOwl Studio</div>
          <div style={{ fontSize: "36px" }}>From Pixels to Impact</div>
        </div>
      </div>
    ),
  );
}
