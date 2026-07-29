import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

const artDirectionDirectory = dirname(fileURLToPath(import.meta.url));
const exportDirectory = resolve(artDirectionDirectory, "exports");
const artboardUrl =
  process.env.ARTBOARD_URL ??
  "http://127.0.0.1:4173/docs/art-direction/artboards.html";

const exports = [
  ["#direction-board", "direction-board.png"],
  ["#desktop-hero", "desktop-hero.png"],
  ["#desktop-sections", "desktop-sections.png"],
  ["#mobile-page", "mobile-page.png"],
  ["#motion-storyboard", "motion-storyboard.png"],
];

await mkdir(exportDirectory, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: {
    width: 1680,
    height: 1100,
  },
  deviceScaleFactor: 1,
});

try {
  await page.goto(artboardUrl, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  for (const [selector, filename] of exports) {
    const artboard = page.locator(selector);

    await artboard.screenshot({
      path: resolve(exportDirectory, filename),
      animations: "disabled",
    });
  }
} finally {
  await browser.close();
}
