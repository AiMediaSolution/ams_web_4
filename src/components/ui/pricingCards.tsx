"use client";

import { useEffect } from "react";
import "@/styles/pricing-cards.css";

const pricingData = [
  {
    title: "Basic",
    price: "$9.99",
    bullets: [
      "Access to standard workouts and nutrition plans",
      "Email support",
    ],
    cta: "Get Started",
    href: "#basic",
  },
  {
    title: "Pro",
    price: "$19.99",
    bullets: [
      "Access to advanced workouts and nutrition plans",
      "Priority Email support",
      "Exclusive access to live Q&A sessions",
    ],
    cta: "Upgrade to Pro",
    href: "#pro",
  },
  {
    title: "Ultimate",
    price: "$29.99",
    bullets: [
      "Access to all premium workouts and nutrition plans",
      "24/7 Priority support",
      "1-on-1 virtual coaching session every month",
      "Exclusive content and early access to new features",
    ],
    cta: "Go Ultimate",
    href: "#ultimate",
  },
  {
    title: "Ultimate",
    price: "$29.99",
    bullets: [
      "Access to all premium workouts and nutrition plans",
      "24/7 Priority support",
      "1-on-1 virtual coaching session every month",
      "Exclusive content and early access to new features",
    ],
    cta: "Go Ultimate",
    href: "#ultimate",
  },
];

export const PricingCards = () => {
  useEffect(() => {
    const cardsContainer = document.querySelector(
      ".pricing-cards"
    ) as HTMLElement;
    const overlay = document.querySelector(".pricing-overlay") as HTMLElement;
    const cards = Array.from(document.querySelectorAll(".pricing-card"));

    const applyOverlayMask = (e: PointerEvent) => {
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;
      overlay.style.cssText = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const createOverlayCta = (overlayCard: HTMLElement, ctaEl: Element) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("pricing-cta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", "true");
      overlayCard.appendChild(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target as HTMLElement);
        const box = entry.borderBoxSize?.[0];
        if (box && cardIndex >= 0 && overlay.children[cardIndex]) {
          const el = overlay.children[cardIndex] as HTMLElement;
          el.style.width = `${box.inlineSize}px`;
          el.style.height = `${box.blockSize}px`;
        }
      });
    });

    const initOverlayCard = (cardEl: HTMLElement) => {
      const overlayCard = document.createElement("div");
      overlayCard.className = cardEl.className;
      createOverlayCta(overlayCard, cardEl.lastElementChild!);
      overlay.appendChild(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach((card) => initOverlayCard(card as HTMLElement));
    document.body.addEventListener("pointermove", applyOverlayMask);
  }, []);

  return (
    <main className="pricing-main w-full mx-auto">
      <h1 className="pricing-main__heading">WHAT ARE WE CAPABLE OF DOING?</h1>
      <h2>
        Our Track Record Speaks For Itself, With Numerous Success Stories From
        People Who Have Achieved Remarkable Results With Our Solutions
      </h2>
      <div className="pricing-cards">
        <div className="pricing-cards__inner  flex flex-wrap justify-center gap-10">
          {pricingData.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h2 className="pricing-card__heading">{plan.title}</h2>
              <p className="pricing-card__price">{plan.price}</p>
              <ul role="list" className="pricing-card__bullets pricing-flow">
                {plan.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a href={plan.href} className="pricing-card__cta pricing-cta">
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="pricing-overlay pricing-cards__inner"></div>
      </div>
    </main>
  );
};
