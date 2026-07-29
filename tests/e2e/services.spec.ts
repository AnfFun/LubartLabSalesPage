import { expect, test } from "@playwright/test";

const serviceDescriptions = [
  "Коли потрібно зрозуміло представити бізнес, послугу або продукт в інтернеті. Створюємо сайт із чіткою структурою та шляхом до потрібної дії.",
  "Коли бізнесу потрібен власний канал онлайн-продажів. Створюємо інтернет-магазин із каталогом, оформленням замовлення та підключенням оплати й доставки.",
  "Коли готові сервіси не покривають робочий процес або дані доводиться переносити вручну. Створюємо особисті кабінети, внутрішні вебінструменти та інтеграції через API.",
] as const;

test("presents three service directions and reaches them from desktop navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");

  const navigation = page.getByRole("navigation", {
    name: "Головна навігація",
  });
  await navigation.getByRole("link", { name: "Послуги" }).click();

  await expect(page).toHaveURL(/#services$/);

  const services = page.getByRole("region", {
    name: "Сайт, магазин або вебсистема.",
  });
  await expect(services).toBeInViewport();
  await expect(services.locator("article")).toHaveCount(3);
  await expect(
    services.getByRole("heading", { level: 3, name: "Бізнес-сайти" }),
  ).toBeVisible();
  await expect(
    services.getByRole("heading", { level: 3, name: "E-commerce" }),
  ).toBeVisible();
  await expect(
    services.getByRole("heading", {
      level: 3,
      name: "Вебрішення та інтеграції",
    }),
  ).toBeVisible();

  for (const description of serviceDescriptions) {
    await expect(services.getByText(description)).toBeVisible();
  }

  await expect(services.getByRole("link")).toHaveCount(0);
  await expect(services.getByRole("button")).toHaveCount(0);
  await expect(services.locator(".service-module__visual")).toHaveCount(3);
});

test("uses the simplified mobile service layout without overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page
      .getByRole("navigation", { name: "Головна навігація" })
      .getByRole("link", { name: "Послуги" }),
  ).toBeHidden();

  const services = page.getByRole("region", {
    name: "Сайт, магазин або вебсистема.",
  });
  await services.scrollIntoViewIfNeeded();
  await expect(services).toBeInViewport();
  const serviceVisuals = services.locator(".service-module__visual");
  await expect(serviceVisuals).toHaveCount(3);
  expect(
    await serviceVisuals.evaluateAll((visuals) =>
      visuals.every((visual) => getComputedStyle(visual).display === "none"),
    ),
  ).toBe(true);

  const viewportWidths = await page.evaluate(() => ({
    content: document.documentElement.scrollWidth,
    viewport: window.innerWidth,
  }));

  expect(viewportWidths.content).toBe(viewportWidths.viewport);
});

test("keeps the direct mobile contact action touch-friendly", async ({
  browser,
}) => {
  const context = await browser.newContext({
    hasTouch: true,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("/");

  const contactLink = page
    .getByRole("navigation", { name: "Головна навігація" })
    .getByRole("link", { name: "Обговорити проєкт" });
  await contactLink.tap();

  await expect(page).toHaveURL(/#contact$/);
  await context.close();
});

test("keeps service information static with reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const services = page.getByRole("region", {
    name: "Сайт, магазин або вебсистема.",
  });
  await services.scrollIntoViewIfNeeded();

  const runningAnimations = await services.evaluate((section) =>
    section
      .getAnimations({ subtree: true })
      .filter((animation) => animation.playState === "running").length,
  );

  expect(runningAnimations).toBe(0);
  await expect(
    services.getByRole("heading", {
      level: 3,
      name: "Вебрішення та інтеграції",
    }),
  ).toBeVisible();
});
