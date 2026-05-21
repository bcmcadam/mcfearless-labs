import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#07080a",
          color: "#f4f5f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 700,
          fontSize: 118,
          letterSpacing: -6,
          position: "relative",
          borderRadius: 36,
        }}
      >
        M
        <span
          style={{
            position: "absolute",
            right: 26,
            bottom: 36,
            width: 20,
            height: 20,
            background: "#bef264",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
