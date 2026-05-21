import { ImageResponse } from "next/og";

export const alt = "McFearless Labs — Web development that ships";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(900px 600px at 78% -10%, rgba(255,255,255,0.05), transparent 60%), radial-gradient(700px 500px at -10% 40%, rgba(190,242,100,0.10), transparent 60%), #07080a",
          color: "#f4f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#a1a6b0",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#bef264",
            }}
          />
          McFearless / Labs
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            fontWeight: 700,
            fontSize: 132,
            lineHeight: 1.02,
            letterSpacing: -3,
          }}
        >
          <div style={{ display: "flex" }}>Web development</div>
          <div style={{ display: "flex" }}>
            that ships
            <span style={{ color: "#bef264" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#a1a6b0",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 700,
              lineHeight: 1.35,
              fontSize: 26,
            }}
          >
            One full-stack developer. Apps, AI tools, dashboards — designed and
            shipped end-to-end.
          </div>
          <div style={{ display: "flex", color: "#f4f5f7" }}>
            mcfearless.dev
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
