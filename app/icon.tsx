import { ImageResponse } from "next/og";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 168,
          letterSpacing: -8,
          position: "relative",
        }}
      >
        M
        <span
          style={{
            position: "absolute",
            right: 36,
            bottom: 50,
            width: 28,
            height: 28,
            background: "#bef264",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
