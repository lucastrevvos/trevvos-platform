"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ConnectionScreen } from "./ConnectionScreen";

export function ConnectionFlow() {
  const [active, setActive] = useState(0);
  const [restart, setRestart] = useState(0);
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!visible || reduced) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % 6),
      4200,
    );
    return () => window.clearInterval(timer);
  }, [visible, reduced, restart]);
  return (
    <section className="section section--paper2" id="conexao">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Onboarding previsto</span>
          <h2>Conectar um canal deve ser simples.</h2>
          <p>
            Sem APIs, tokens ou conceitos técnicos. Sempre que possível,
            usaremos OAuth e os processos oficiais de cada plataforma.
          </p>
        </div>

        <div className="connect reveal" ref={ref}>
          <ol className="connect__steps" id="connectSteps">
            <li className={active === 0 ? "is-active" : ""} data-s="0">
              <button
                type="button"
                aria-current={active === 0 ? "step" : undefined}
                onClick={() => {
                  setActive(0);
                  setRestart((value) => value + 1);
                }}
              >
                <b>1</b>Crie sua conta na Trevvos
              </button>
            </li>
            <li className={active === 1 ? "is-active" : ""} data-s="1">
              <button
                type="button"
                aria-current={active === 1 ? "step" : undefined}
                onClick={() => {
                  setActive(1);
                  setRestart((value) => value + 1);
                }}
              >
                <b>2</b>Acesse “Conectar canais”
              </button>
            </li>
            <li className={active === 2 ? "is-active" : ""} data-s="2">
              <button
                type="button"
                aria-current={active === 2 ? "step" : undefined}
                onClick={() => {
                  setActive(2);
                  setRestart((value) => value + 1);
                }}
              >
                <b>3</b>Escolha o canal
              </button>
            </li>
            <li className={active === 3 ? "is-active" : ""} data-s="3">
              <button
                type="button"
                aria-current={active === 3 ? "step" : undefined}
                onClick={() => {
                  setActive(3);
                  setRestart((value) => value + 1);
                }}
              >
                <b>4</b>Autorize no serviço original
              </button>
            </li>
            <li className={active === 4 ? "is-active" : ""} data-s="4">
              <button
                type="button"
                aria-current={active === 4 ? "step" : undefined}
                onClick={() => {
                  setActive(4);
                  setRestart((value) => value + 1);
                }}
              >
                <b>5</b>A Trevvos sincroniza os dados
              </button>
            </li>
            <li className={active === 5 ? "is-active" : ""} data-s="5">
              <button
                type="button"
                aria-current={active === 5 ? "step" : undefined}
                onClick={() => {
                  setActive(5);
                  setRestart((value) => value + 1);
                }}
              >
                <b>6</b>Administre tudo pelo painel
              </button>
            </li>
          </ol>
          <div className="connect__screen" id="connectScreen">
            <div key={active}>
              <ConnectionScreen step={active} />
            </div>
          </div>
        </div>
        <p className="note center">
          Fluxo conceitual. Algumas integrações poderão exigir configurações ou
          verificações adicionais.
        </p>
      </div>
    </section>
  );
}
