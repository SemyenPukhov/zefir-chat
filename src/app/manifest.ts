import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Зефирчат",
    short_name: "Зефирчат",
    description:
      "Анонимная сеть лёгких посланий: зефирки в ленте, голос и безопасная среда.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf8ff",
    theme_color: "#534790",
    lang: "ru",
  };
}
