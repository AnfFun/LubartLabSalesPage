"use client";

import {
  useAnimate,
  useIsomorphicLayoutEffect,
  useReducedMotion,
} from "motion/react";
import { stagger } from "motion";

const heroNodes = [
  {
    id: "site",
    title: "Бізнес-сайти",
    description: "Структура, зміст, дія",
  },
  {
    id: "commerce",
    title: "E-commerce",
    description: "Каталог, оплата, доставка",
  },
  {
    id: "integration",
    title: "Вебрішення та інтеграції",
    description: "Сервіси, дані, процеси",
  },
] as const;

const finalMotionState = {
  line: { transform: "translateY(0%)" },
  support: { opacity: 1, transform: "translateY(0px)" },
  signal: { opacity: 1, strokeDashoffset: 0 },
  node: { opacity: 1, transform: "scale(1)" },
  pulse: { opacity: 0.35, transform: "scale(1)" },
} as const;

export function Hero() {
  const [heroScope, animate] = useAnimate<HTMLElement>();
  const shouldReduceMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (shouldReduceMotion) {
      const resetAnimations = [
        animate("[data-hero-line]", finalMotionState.line, { duration: 0 }),
        animate("[data-hero-support]", finalMotionState.support, {
          duration: 0,
        }),
        animate("[data-hero-signal]", finalMotionState.signal, { duration: 0 }),
        animate("[data-hero-node]", finalMotionState.node, { duration: 0 }),
        animate("[data-hero-pulse]", finalMotionState.pulse, { duration: 0 }),
      ];

      return () => {
        resetAnimations.forEach((animation) => animation.stop());
      };
    }

    const introAnimation = animate([
      [
        "[data-hero-line]",
        { transform: ["translateY(112%)", "translateY(0%)"] },
        {
          delay: stagger(0.08),
          duration: 0.68,
          ease: [0.22, 1, 0.36, 1],
        },
      ],
      [
        "[data-hero-signal]",
        { opacity: [0.35, 1], strokeDashoffset: [1, 0] },
        {
          at: 0.18,
          duration: 0.9,
          ease: [0.65, 0, 0.35, 1],
        },
      ],
      [
        "[data-hero-support]",
        {
          opacity: [0, 1],
          transform: ["translateY(12px)", "translateY(0px)"],
        },
        {
          at: 0.38,
          delay: stagger(0.08),
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
        },
      ],
      [
        "[data-hero-node]",
        { opacity: [0, 1], transform: ["scale(0.82)", "scale(1)"] },
        {
          at: 0.5,
          delay: stagger(0.09),
          duration: 0.38,
          ease: [0.22, 1, 0.36, 1],
        },
      ],
    ]);

    const ambientAnimation = animate(
      "[data-hero-pulse]",
      {
        opacity: [0.35, 0.08, 0.35],
        transform: ["scale(1)", "scale(1.55)", "scale(1)"],
      },
      {
        delay: 1.3,
        duration: 3.8,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    );

    return () => {
      introAnimation.stop();
      ambientAnimation.stop();
    };
  }, [animate, shouldReduceMotion]);

  return (
    <section
      ref={heroScope}
      className="hero page-grid"
      id="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero__copy">
        <h1
          className="hero__title"
          id="hero-title"
          aria-label="Створюємо вебрішення, на яких працює бізнес."
        >
          <span aria-hidden="true">
            <span className="hero__title-mask">
              <span data-hero-line>Створюємо</span>
            </span>
            <span className="hero__title-mask">
              <span data-hero-line>вебрішення,</span>
            </span>
            <span className="hero__title-mask hero__title-mask--accent">
              <span data-hero-line>на яких працює</span>
            </span>
            <span className="hero__title-mask hero__title-mask--accent">
              <span data-hero-line>бізнес.</span>
            </span>
          </span>
        </h1>

        <div className="hero__support">
          <p data-hero-support>
            Бізнес-сайти, e-commerce та інтеграції для зрозумілої комунікації,
            продажів і автоматизації процесів.
          </p>
          <a className="text-action" href="#contact" data-hero-support>
            <span>Обговорити проєкт</span>
            <span className="text-action__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div
        className="hero__signal hero__signal--desktop"
        aria-hidden="true"
      >
        <svg viewBox="0 0 1440 920" preserveAspectRatio="none">
          <path
            data-hero-signal
            pathLength="1"
            d="M0 612 H510 C548 612 548 664 586 664 H814 C850 664 850 458 886 458 H1046 C1082 458 1082 612 1118 612 H1440"
          />
        </svg>
      </div>

      <div className="hero__nodes">
        {heroNodes.map((node) => (
          <div
            className={`hero-node hero-node--${node.id}`}
            data-hero-node
            key={node.id}
          >
            <span className="system-target" aria-hidden="true">
              <span className="system-target__core" />
              {node.id === "site" ? (
                <span className="system-target__pulse" data-hero-pulse />
              ) : null}
            </span>
            <strong>{node.title}</strong>
            <small>{node.description}</small>
          </div>
        ))}
      </div>

      <div className="hero__mobile-signal" aria-hidden="true">
        <svg viewBox="0 0 390 160" preserveAspectRatio="none">
          <path
            data-hero-signal
            pathLength="1"
            d="M0 94 H228 L300 42 V94 H390"
          />
        </svg>
        <span className="hero__mobile-pulse" data-hero-node>
          <span data-hero-pulse />
        </span>
      </div>

      <p className="hero__ai-note" data-hero-support>
        <span className="hero__ai-arrow" aria-hidden="true">
          ↘
        </span>
        <span>AI — робочий інструмент.</span>
        <span>Рішення та відповідальність — за людьми.</span>
      </p>
    </section>
  );
}
