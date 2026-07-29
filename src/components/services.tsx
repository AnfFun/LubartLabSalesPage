type ServiceDiagram = "site" | "commerce" | "integration";

type Service = {
  number: string;
  title: string;
  description: string;
  diagram: ServiceDiagram;
};

const services: readonly Service[] = [
  {
    number: "01",
    title: "Бізнес-сайти",
    description:
      "Коли потрібно зрозуміло представити бізнес, послугу або продукт в інтернеті. Створюємо сайт із чіткою структурою та шляхом до потрібної дії.",
    diagram: "site",
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Коли бізнесу потрібен власний канал онлайн-продажів. Створюємо інтернет-магазин із каталогом, оформленням замовлення та підключенням оплати й доставки.",
    diagram: "commerce",
  },
  {
    number: "03",
    title: "Вебрішення та інтеграції",
    description:
      "Коли готові сервіси не покривають робочий процес або дані доводиться переносити вручну. Створюємо особисті кабінети, внутрішні вебінструменти та інтеграції через API.",
    diagram: "integration",
  },
];

function SiteDiagram() {
  return (
    <div className="service-diagram service-diagram--site">
      <span className="service-site__browser-bar" />
      <span className="service-site__lead" />
      <span className="service-site__aside" />
      <span className="service-site__action" />
    </div>
  );
}

function CommerceDiagram() {
  return (
    <div className="service-diagram service-diagram--commerce">
      <span className="service-commerce__product service-commerce__product--one" />
      <span className="service-commerce__product service-commerce__product--two" />
      <span className="service-commerce__product service-commerce__product--three" />
      <span className="service-commerce__checkout">
        <svg
          className="service-commerce__arrow"
          viewBox="0 0 48 24"
          aria-hidden="true"
        >
          <path d="M4 12h36M31 4l9 8-9 8" />
        </svg>
      </span>
    </div>
  );
}

function IntegrationDiagram() {
  return (
    <div className="service-diagram service-diagram--integration">
      <span className="service-integration__source" />
      <span className="service-integration__api">API</span>
      <span className="service-integration__node service-integration__node--one" />
      <span className="service-integration__node service-integration__node--two" />
      <span className="service-integration__node service-integration__node--three" />
    </div>
  );
}

function Diagram({ type }: { type: ServiceDiagram }) {
  if (type === "site") {
    return <SiteDiagram />;
  }

  if (type === "commerce") {
    return <CommerceDiagram />;
  }

  return <IntegrationDiagram />;
}

export function Services() {
  return (
    <section
      className="services page-grid"
      id="services"
      aria-labelledby="services-title"
    >
      <header className="services__header">
        <p className="services__label">01 / Що ми створюємо</p>
        <h2 className="services__title" id="services-title">
          Сайт, магазин або вебсистема.
        </h2>
        <p className="services__intro">
          Створюємо вебрішення для комунікації з клієнтами, онлайн-продажів і
          робочих процесів.
        </p>
      </header>

      <div className="services__modules">
        {services.map((service) => {
          const titleId = `service-${service.diagram}-title`;

          return (
            <article
              className={`service-module service-module--${service.diagram}`}
              aria-labelledby={titleId}
              key={service.diagram}
            >
              <span className="service-module__number" aria-hidden="true">
                {service.number}
              </span>
              <h3 className="service-module__title" id={titleId}>
                {service.title}
              </h3>
              <p className="service-module__description">
                {service.description}
              </p>
              <div className="service-module__visual" aria-hidden="true">
                <Diagram type={service.diagram} />
              </div>
            </article>
          );
        })}

        <svg
          className="services__signal"
          viewBox="0 0 1280 190"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 104H290c40 0 40-48 80-48h280c40 0 40 78 80 78h282c40 0 40-50 80-50h188" />
          <circle cx="370" cy="56" r="7" />
          <circle cx="730" cy="134" r="7" />
          <circle cx="1092" cy="84" r="7" />
        </svg>
      </div>
    </section>
  );
}
