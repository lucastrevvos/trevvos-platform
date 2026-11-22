"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
const messages = [
  { type: "bubble in", text: "Oi! A garrafa térmica 1L está disponível?" },
  { type: "tool", text: "Agente consultou o estoque centralizado" },
  {
    type: "bubble out",
    text: "Olá! Está sim, com 112 unidades. Aqui está o link para comprar: loja.exemplo/garrafa-1l",
  },
  { type: "tool", text: "Conversa vinculada ao produto e à venda" },
];

export function CommerceScenario() {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView<HTMLDivElement>(0.4, true);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!visible || reduced) return;
    const timer = window.setTimeout(
      () => setCount((current) => (current === 4 ? 0 : current + 1)),
      count === 4 ? 5000 : 1300,
    );
    return () => window.clearTimeout(timer);
  }, [count, visible, reduced]);
  return (
    <section className="section">
      <div className="container grid-2 grid-2--center">
        <div className="reveal">
          <span className="eyebrow">Commerce na prática</span>
          <h2>
            Um cliente pergunta no Instagram. A operação inteira responde.
          </h2>
          <ol className="flow" id="flow">
            <li className={reduced || count >= 1 ? "is-on" : ""}>
              <b>1</b>
              <span>O cliente pergunta se o produto está disponível.</span>
            </li>
            <li className={reduced || count >= 2 ? "is-on" : ""}>
              <b>2</b>
              <span>O agente consulta o estoque centralizado.</span>
            </li>
            <li className={reduced || count >= 3 ? "is-on" : ""}>
              <b>3</b>
              <span>
                Responde com informação correta e envia o link de compra.
              </span>
            </li>
            <li className={reduced || count >= 4 ? "is-on" : ""}>
              <b>4</b>
              <span>O lojista acompanha depois o resultado comercial.</span>
            </li>
          </ol>
          <p className="note">
            Cenário ilustrativo do comportamento previsto para a fase de IA.
          </p>
        </div>
        <div
          className="phone reveal"
          id="phone"
          ref={ref}
          aria-label="Exemplo de conversa"
        >
          <div className="phone__bar">Instagram Direct · Casa Alvorada</div>
          <div className="phone__body" id="phoneBody">
            {messages
              .slice(0, reduced ? messages.length : count)
              .map((message, index) => (
                <div className={message.type} key={index}>
                  {message.type === "tool" && <i />}
                  {message.text}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
