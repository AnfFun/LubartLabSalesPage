import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Перейти до основного вмісту
      </a>

      <header className="site-header page-grid">
        <a
          className="brand-lockup"
          href="#hero"
          aria-label="LubartLab — на початок"
        >
          <span className="brand-mark" aria-hidden="true">
            L.
          </span>
          <span className="brand-name">LubartLab</span>
        </a>

        <nav className="header-nav" aria-label="Головна навігація">
          <a className="header-nav__link" href="#services">
            Послуги
          </a>
          <a className="header-cta" href="#contact">
            <span>Обговорити проєкт</span>
            <span className="header-cta__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />

        <section
          className="contact-handoff page-grid"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-handoff__content">
            <p className="section-label">Контакт</p>
            <h2 id="contact-title">Хороші ідеї починаються з діалогу.</h2>
            <a
              className="contact-handoff__email"
              href={`mailto:${siteConfig.email}`}
            >
              <span>{siteConfig.email}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
