import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main className="holding-page">
      <div className="holding-page__frame">
        <p className="holding-page__brand" aria-label="LubartLab">
          <span aria-hidden="true">L.</span>
          LubartLab
        </p>

        <div className="holding-page__content">
          <p className="holding-page__eyebrow">AI-powered web studio</p>
          <h1>Нова версія сайту готується</h1>
          <p>
            Створюємо вебрішення для бізнесу: сайти, e-commerce та інтеграції.
          </p>
        </div>

        <a className="holding-page__email" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
      </div>
    </main>
  );
}
