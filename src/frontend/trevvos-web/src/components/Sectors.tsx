"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import { sectors } from "@/data/sectors";

export function Sectors() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];
  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const total = sectors.length;
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % total
        : event.key === "ArrowLeft"
          ? (index + total - 1) % total
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? total - 1
              : -1;
    if (next < 0) return;
    event.preventDefault();
    setActive(next);
    document.getElementById("sector-tab-" + next)?.focus();
  }
  return (
    <section className="section" id="aplicacoes">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Aplicações por setor</span>
          <h2>Aplicações inteligentes para desafios de diferentes setores.</h2>
          <p>
            Exemplos de soluções que podem ser desenvolvidas sob medida. São
            possibilidades de aplicação, não projetos já entregues pela Trevvos.
          </p>
        </div>

        <div className="sectors reveal" id="sectors">
          <div
            className="sectors__chips"
            role="tablist"
            aria-label="Setores"
            id="sectorChips"
          >
            {sectors.map((sector, index) => (
              <button
                key={sector.name}
                type="button"
                role="tab"
                id={"sector-tab-" + index}
                aria-controls="sectorList"
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleTabKey(event, index)}
              >
                {sector.name}
              </button>
            ))}
          </div>
          <div
            className={[
              "sectors__list",
              sector.items.some((item) => item.image) &&
                "sectors__list--photographic",
              !sector.items[0].image && "sectors__list--photo-last",
              sector.items.length > 1 &&
                sector.items.every((item) => item.image) &&
                "sectors__list--paired-photos",
            ]
              .filter(Boolean)
              .join(" ")}
            id="sectorList"
            role="tabpanel"
            aria-labelledby={"sector-tab-" + active}
            aria-live="polite"
          >
            {sector.items.map((item) => (
              <article
                className={item.image ? "app-item app-item--photo" : "app-item"}
                key={item.t}
              >
                {item.image && (
                  <div
                    className={
                      item.image.framing === "context"
                        ? "app-item__media app-item__media--context"
                        : "app-item__media"
                    }
                    style={
                      {
                        "--photo-position": item.image.position,
                        "--photo-mobile-position": item.image.mobilePosition,
                      } as CSSProperties
                    }
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1020px) 34vw, 380px"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="app-item__content">
                  <small>{sector.name}</small>
                  <h3>{item.t}</h3>
                  <dl>
                    <div>
                      <dt>Desafio</dt>
                      <dd>{item.p}</dd>
                    </div>
                    <div>
                      <dt>Possível solução</dt>
                      <dd>{item.s}</dd>
                    </div>
                    <div>
                      <dt>Benefícios esperados</dt>
                      <dd>{item.b}</dd>
                    </div>
                  </dl>
                  {item.reg && <p className="note-reg">{item.reg}</p>}
                  <a
                    href="#contato"
                    className="btn btn--ink btn--sm"
                    data-cta="diagnostico"
                    data-app={sector.name + ": " + item.t}
                  >
                    Quero explorar esta solução
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
