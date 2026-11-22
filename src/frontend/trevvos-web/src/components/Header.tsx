"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Sora } from "next/font/google";
import emblem from "../../public/images/trevvos-emblem.png";
import styles from "./Header.module.css";

// Visual approximation of the original custom lettering, scoped to the header.
const sora = Sora({ subsets: ["latin"], weight: "600", display: "swap" });

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("burger")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav">
      <div className="container nav__inner">
        <a href="#top" className={styles.brand} aria-label="Trevvos, início">
          <Image
            className={styles.emblem}
            src={emblem}
            alt=""
            sizes="56px"
            preload
          />
          <span
            className={sora.className + " " + styles.wordmark}
            aria-hidden="true"
          >
            TR
            <svg
              className={styles.letterE}
              viewBox="0 0 30 36"
              aria-hidden="true"
              focusable="false"
            >
              <rect width="30" height="7" rx="1.4" fill="currentColor" />
              <rect
                y="14.5"
                width="30"
                height="7"
                rx="1.4"
                className={styles.greenBar}
              />
              <rect y="29" width="30" height="7" rx="1.4" fill="currentColor" />
            </svg>
            VVOS
          </span>
        </a>
        <nav
          className={`nav__links${open ? " is-open" : ""}`}
          onClick={() => setOpen(false)}
          aria-label="Navegação principal"
          id="navLinks"
        >
          <a href="#top">Início</a>
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#aplicacoes">Aplicações</a>
          <a href="#sobre">Sobre a Trevvos</a>
          <a href="#contato">Contato</a>
          <a
            href="#contato"
            className="btn btn--sm btn--ink nav__cta"
            data-cta="diagnostico"
          >
            Solicitar diagnóstico
          </a>
        </nav>
        <button
          className="burger"
          id="burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
