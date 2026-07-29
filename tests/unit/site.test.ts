import { describe, expect, it } from "vitest";
import { siteConfig } from "../../src/lib/site";

describe("site configuration", () => {
  it("uses the accepted canonical host", () => {
    expect(siteConfig.url).toBe("https://lubartlab.com.ua");
  });

  it("uses the accepted public contact email", () => {
    expect(siteConfig.email).toBe("lubartlab@gmail.com");
  });

  it("uses the Ukrainian studio description", () => {
    expect(siteConfig.description).toBe(
      "Студія вебрішень для бізнесу: бізнес-сайти, e-commerce та інтеграції.",
    );
  });
});
