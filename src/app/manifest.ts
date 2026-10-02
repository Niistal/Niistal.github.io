import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iker / Niistal — Software Engineer",
    short_name: "NIISTAL",
    description:
      "Full Stack Software Engineer focused on .NET, enterprise software, cybersecurity, DevSecOps, Data and AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080D",
    theme_color: "#08080D",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
