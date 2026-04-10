import { ImageResponse } from "next/og";

export const alt = "Зефирчат — лёгкие послания от незнакомцев";
export const size = { width: 1200, height: 630 };
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
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #fcf8ff 0%, #e6deff 42%, #ebe5ff 100%)",
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: "#1b163c",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Зефирчат
        </div>
        <div
          style={{
            fontSize: 38,
            fontWeight: 600,
            color: "#534790",
            marginTop: 20,
            maxWidth: 920,
            lineHeight: 1.25,
          }}
        >
          Лёгкие послания от незнакомцев
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#484550",
            marginTop: 24,
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          Анонимная лента, голос и зефирки — скоро запуск
        </div>
      </div>
    ),
    { ...size },
  );
}
