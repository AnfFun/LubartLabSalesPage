import { expect, test } from "@playwright/test";

test("renders the approved hero and reaches the contact handoff", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  await expect(page).toHaveTitle("LubartLab");
  const heroHeading = page.getByRole("heading", {
    level: 1,
    name: "Створюємо вебрішення, на яких працює бізнес.",
  });
  await expect(heroHeading).toBeVisible();
  await expect(heroHeading).toBeInViewport();
  await expect(
    page.getByText(
      "Бізнес-сайти, e-commerce та інтеграції для зрозумілої комунікації, продажів і автоматизації процесів.",
    ),
  ).toBeVisible();
  await expect(page.getByText("Структура, зміст, дія")).toBeVisible();
  await expect(page.getByText("Каталог, оплата, доставка")).toBeVisible();
  await expect(page.getByText("Сервіси, дані, процеси")).toBeVisible();
  await expect(
    page.getByText("Рішення та відповідальність — за людьми."),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Обговорити проєкт" }).nth(1),
  ).toBeInViewport();

  await page
    .getByRole("navigation", { name: "Головна навігація" })
    .getByRole("link", { name: "Обговорити проєкт" })
    .click();

  await expect(page).toHaveURL(/#contact$/);
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Хороші ідеї починаються з діалогу.",
    }),
  ).toBeInViewport();
  await expect(
    page.getByRole("link", { name: "lubartlab@gmail.com" }),
  ).toHaveAttribute("href", "mailto:lubartlab@gmail.com");
});

test("keeps keyboard navigation visible and functional", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", {
    name: "Перейти до основного вмісту",
  });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "LubartLab — на початок" }),
  ).toBeFocused();

  await page.keyboard.press("Tab");
  const headerContactLink = page
    .getByRole("navigation", { name: "Головна навігація" })
    .getByRole("link", { name: "Обговорити проєкт" });
  await expect(headerContactLink).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#contact$/);
});

test("does not overflow from 320 pixels through desktop", async ({ page }) => {
  for (const viewport of [
    { width: 320, height: 720 },
    { width: 390, height: 844 },
    { width: 641, height: 844 },
    { width: 1024, height: 768 },
    { width: 1440, height: 1000 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const viewportWidths = await page.evaluate(() => ({
      content: document.documentElement.scrollWidth,
      viewport: window.innerWidth,
    }));

    expect(viewportWidths.content).toBe(viewportWidths.viewport);
  }
});

test("keeps the first viewport stable while fonts and motion initialize", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const layoutState = window as Window & { layoutShiftScore?: number };
    layoutState.layoutShiftScore = 0;

    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const layoutShift = entry as PerformanceEntry & {
          hadRecentInput: boolean;
          value: number;
        };

        if (!layoutShift.hadRecentInput) {
          layoutState.layoutShiftScore =
            (layoutState.layoutShiftScore ?? 0) + layoutShift.value;
        }
      }
    }).observe({ type: "layout-shift", buffered: true });
  });

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.waitForTimeout(1_200);

  const layoutShiftScore = await page.evaluate(
    () =>
      (window as Window & { layoutShiftScore?: number }).layoutShiftScore ?? 0,
  );

  expect(layoutShiftScore).toBeLessThanOrEqual(0.01);
});

test("removes hero motion when reduced motion is requested", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const heroLine = page.locator("[data-hero-line]").first();
  const pulse = page.locator("[data-hero-pulse]:visible").first();
  await expect(heroLine).toBeVisible();

  const initialPulseOpacity = await pulse.evaluate(
    (element) => getComputedStyle(element).opacity,
  );
  await page.waitForTimeout(250);
  const settledPulseOpacity = await pulse.evaluate(
    (element) => getComputedStyle(element).opacity,
  );

  expect(settledPulseOpacity).toBe(initialPulseOpacity);
  expect(
    await page.evaluate(
      () =>
        document
          .getAnimations()
          .filter((animation) => animation.playState === "running").length,
    ),
  ).toBe(0);
});

test("keeps the hero, services, and contact readable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Створюємо вебрішення, на яких працює бізнес.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Обговорити проєкт" }).first(),
  ).toBeVisible();
  await expect(
    page.getByText("Рішення та відповідальність — за людьми."),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Сайт, магазин або вебсистема.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Вебрішення та інтеграції",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Хороші ідеї починаються з діалогу.",
    }),
  ).toBeVisible();

  await context.close();
});

test("blocks indexing during the foundation stage", async ({ request }) => {
  const response = await request.get("/robots.txt");

  expect(response.ok()).toBe(true);
  await expect(response.text()).resolves.toContain("Disallow: /");
});
