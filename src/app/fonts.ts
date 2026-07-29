import localFont from "next/font/local";

export const fixelText = localFont({
  src: [
    {
      path: "./fonts/FixelText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FixelText-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FixelText-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-fixel-text",
});

export const fixelDisplay = localFont({
  src: [
    {
      path: "./fonts/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
  variable: "--font-fixel-display",
});
