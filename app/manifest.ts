import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "McFearless Labs",
    short_name: "McFearless",
    description:
      "Independent web studio — one full-stack developer building real apps, AI tools, dashboards, and the works.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080a",
    theme_color: "#07080a",
    icons: [
      {
        src: "/icon",
        sizes: "256x256",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
