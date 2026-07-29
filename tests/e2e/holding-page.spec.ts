import { expect, test } from "@playwright/test";

test("renders the temporary Ukrainian holding page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("LubartLab");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Нова версія сайту готується",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "lubartlab@gmail.com" }),
  ).toHaveAttribute("href", "mailto:lubartlab@gmail.com");
});

test("does not overflow a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
});

test("blocks indexing during the foundation stage", async ({ request }) => {
  const response = await request.get("/robots.txt");

  expect(response.ok()).toBe(true);
  await expect(response.text()).resolves.toContain("Disallow: /");
});
