"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { BrandLogo } from "./BrandLogo";

const order = ["overview", "catalog", "inbox", "ai"];

export function CommerceDemo() {
  const [active, setActive] = useState("overview");
  const [touched, setTouched] = useState(false);
  const reduced = useReducedMotion();
  const { ref, visible } = useInView<HTMLDivElement>(0.35, true);
  useEffect(() => {
    if (!visible || reduced || touched) return;
    const timer = window.setInterval(
      () =>
        setActive(
          (current) => order[(order.indexOf(current) + 1) % order.length],
        ),
      5500,
    );
    return () => window.clearInterval(timer);
  }, [visible, reduced, touched]);
  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, name: string) {
    const index = order.indexOf(name);
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (index + 1) % 4
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? (index + 3) % 4
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? 3
              : -1;
    if (next < 0) return;
    event.preventDefault();
    setTouched(true);
    setActive(order[next]);
    document.getElementById("demo-tab-" + order[next])?.focus();
  }
  return (
    <div className="app reveal" id="app" ref={ref}>
      <div className="app__chrome">
        <div className="app__dots">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="app__url">app.trevvos.com.br / commerce</div>
        <span className="app__demo">
          Demonstração conceitual · dados fictícios
        </span>
      </div>

      <div className="app__body">
        <aside
          className="app__side"
          role="tablist"
          aria-label="Painel demonstrativo"
        >
          <div className="app__brand">
            <BrandLogo compact /> Trevvos
          </div>
          <button
            role="tab"
            id="demo-tab-overview"
            aria-controls="demo-panel-overview"
            aria-selected={active === "overview"}
            tabIndex={active === "overview" ? 0 : -1}
            className={active === "overview" ? "tab is-active" : "tab"}
            onClick={() => {
              setTouched(true);
              setActive("overview");
            }}
            onKeyDown={(event) => handleTabKey(event, "overview")}
            data-tab="overview"
          >
            <b>▦</b> Visão geral
          </button>
          <button
            role="tab"
            id="demo-tab-catalog"
            aria-controls="demo-panel-catalog"
            aria-selected={active === "catalog"}
            tabIndex={active === "catalog" ? 0 : -1}
            className={active === "catalog" ? "tab is-active" : "tab"}
            onClick={() => {
              setTouched(true);
              setActive("catalog");
            }}
            onKeyDown={(event) => handleTabKey(event, "catalog")}
            data-tab="catalog"
          >
            <b>▤</b> Catálogo
          </button>
          <button
            role="tab"
            id="demo-tab-inbox"
            aria-controls="demo-panel-inbox"
            aria-selected={active === "inbox"}
            tabIndex={active === "inbox" ? 0 : -1}
            className={active === "inbox" ? "tab is-active" : "tab"}
            onClick={() => {
              setTouched(true);
              setActive("inbox");
            }}
            onKeyDown={(event) => handleTabKey(event, "inbox")}
            data-tab="inbox"
          >
            <b>✉</b> Atendimento
          </button>
          <button
            role="tab"
            id="demo-tab-ai"
            aria-controls="demo-panel-ai"
            aria-selected={active === "ai"}
            tabIndex={active === "ai" ? 0 : -1}
            className={active === "ai" ? "tab is-active" : "tab"}
            onClick={() => {
              setTouched(true);
              setActive("ai");
            }}
            onKeyDown={(event) => handleTabKey(event, "ai")}
            data-tab="ai"
          >
            <b>✦</b> Assistente IA
          </button>
          <div className="app__store">
            <small>Loja</small>
            <strong>Casa Alvorada</strong>
            <span>exemplo</span>
          </div>
        </aside>

        <div className="app__main">
          <section
            role="tabpanel"
            id="demo-panel-overview"
            aria-labelledby="demo-tab-overview"
            className={active === "overview" ? "view is-active" : "view"}
            data-view="overview"
          >
            <header className="view__head">
              <h3>Visão geral</h3>
              <span>Últimos 7 dias</span>
            </header>
            <div className="kpis">
              <div className="kpi">
                <small>Vendas</small>
                <b>R$ 48.210</b>
                <em className="up">+12,4%</em>
              </div>
              <div className="kpi">
                <small>Pedidos</small>
                <b>312</b>
                <em className="up">+8,1%</em>
              </div>
              <div className="kpi">
                <small>Ticket médio</small>
                <b>R$ 154</b>
                <em className="up">+3,9%</em>
              </div>
              <div className="kpi">
                <small>Conversas abertas</small>
                <b>17</b>
                <em className="down">-4</em>
              </div>
            </div>
            <div className="split">
              <div className="panel">
                <h4>Vendas por canal</h4>
                <div
                  className={
                    visible && active === "overview" ? "bars is-in" : "bars"
                  }
                  id="bars"
                >
                  <div>
                    <i style={{ "--h": "72%" } as CSSProperties}></i>
                    <span>Seg</span>
                  </div>
                  <div>
                    <i style={{ "--h": "55%" } as CSSProperties}></i>
                    <span>Ter</span>
                  </div>
                  <div>
                    <i style={{ "--h": "84%" } as CSSProperties}></i>
                    <span>Qua</span>
                  </div>
                  <div>
                    <i style={{ "--h": "63%" } as CSSProperties}></i>
                    <span>Qui</span>
                  </div>
                  <div>
                    <i style={{ "--h": "92%" } as CSSProperties}></i>
                    <span>Sex</span>
                  </div>
                  <div>
                    <i style={{ "--h": "78%" } as CSSProperties}></i>
                    <span>Sáb</span>
                  </div>
                  <div>
                    <i style={{ "--h": "49%" } as CSSProperties}></i>
                    <span>Dom</span>
                  </div>
                </div>
              </div>
              <div className="panel">
                <h4>Canais conectados</h4>
                <ul className="channels">
                  <li>
                    <span>Mercado Livre</span>
                    <em className="ok">sincronizado</em>
                  </li>
                  <li>
                    <span>Nuvemshop</span>
                    <em className="ok">sincronizado</em>
                  </li>
                  <li>
                    <span>Instagram</span>
                    <em className="ok">ativo</em>
                  </li>
                  <li>
                    <span>WhatsApp Business</span>
                    <em className="wait">conectando</em>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            role="tabpanel"
            id="demo-panel-catalog"
            aria-labelledby="demo-tab-catalog"
            className={active === "catalog" ? "view is-active" : "view"}
            data-view="catalog"
          >
            <header className="view__head">
              <h3>Catálogo multicanal</h3>
              <span>248 produtos</span>
            </header>
            <div className="table">
              <div className="tr th">
                <span>Produto</span>
                <span>Preço</span>
                <span>Estoque</span>
                <span>Canais</span>
              </div>
              <div className="tr">
                <span>
                  <b>Jogo de panelas 5 peças</b>
                  <small>SKU PAN-005</small>
                </span>
                <span>R$ 289,90</span>
                <span>34</span>
                <span className="chips">
                  <i>ML</i>
                  <i>NS</i>
                  <i>IG</i>
                </span>
              </div>
              <div className="tr">
                <span>
                  <b>Garrafa térmica 1L</b>
                  <small>SKU GAR-010</small>
                </span>
                <span>R$ 79,90</span>
                <span>112</span>
                <span className="chips">
                  <i>ML</i>
                  <i>NS</i>
                </span>
              </div>
              <div className="tr">
                <span>
                  <b>Conjunto de facas inox</b>
                  <small>SKU FAC-003</small>
                </span>
                <span>R$ 149,00</span>
                <span className="low">6</span>
                <span className="chips">
                  <i>ML</i>
                  <i>IG</i>
                </span>
              </div>
              <div className="tr">
                <span>
                  <b>Tábua de bambu G</b>
                  <small>SKU TAB-021</small>
                </span>
                <span>R$ 59,90</span>
                <span>77</span>
                <span className="chips">
                  <i>NS</i>
                  <i>IG</i>
                </span>
              </div>
              <div className="tr">
                <span>
                  <b>Organizador de gaveta</b>
                  <small>SKU ORG-007</small>
                </span>
                <span>R$ 39,90</span>
                <span>203</span>
                <span className="chips">
                  <i>ML</i>
                  <i>NS</i>
                  <i>IG</i>
                </span>
              </div>
            </div>
            <p className="legend">
              ML Mercado Livre · NS Nuvemshop · IG Instagram. Preço e estoque
              atualizados em um só lugar.
            </p>
          </section>

          <section
            role="tabpanel"
            id="demo-panel-inbox"
            aria-labelledby="demo-tab-inbox"
            className={active === "inbox" ? "view is-active" : "view"}
            data-view="inbox"
          >
            <header className="view__head">
              <h3>Atendimento</h3>
              <span>Caixa unificada</span>
            </header>
            <div className="inbox">
              <ul className="convs">
                <li className="is-sel">
                  <b>Marina S.</b>
                  <small>Instagram · Tem na cor azul?</small>
                  <em>agora</em>
                </li>
                <li>
                  <b>Carlos P.</b>
                  <small>WhatsApp · Quando chega meu pedido?</small>
                  <em>4 min</em>
                </li>
                <li>
                  <b>Ana L.</b>
                  <small>Mercado Livre · Pergunta</small>
                  <em>12 min</em>
                </li>
                <li>
                  <b>Rafael T.</b>
                  <small>Chat da loja · Troca</small>
                  <em>1 h</em>
                </li>
              </ul>
              <div className="thread">
                <div className="thread__head">
                  <b>Marina S.</b>
                  <span className="chip-ig">Instagram Direct</span>
                  <span className="assign">Atribuída: Júlia</span>
                </div>
                <div className="bubble in">
                  Oi! A garrafa térmica 1L tem na cor azul?
                </div>
                <div className="bubble out">
                  Olá, Marina! Temos sim, 112 unidades disponíveis. Posso enviar
                  o link para compra?
                </div>
                <div className="bubble in">Pode!</div>
                <div className="thread__meta">
                  Conversa vinculada ao produto GAR-010
                </div>
              </div>
            </div>
          </section>

          <section
            role="tabpanel"
            id="demo-panel-ai"
            aria-labelledby="demo-tab-ai"
            className={active === "ai" ? "view is-active" : "view"}
            data-view="ai"
          >
            <header className="view__head">
              <h3>Assistente IA</h3>
              <span>Usa dados reais da operação</span>
            </header>
            <div className="aichat">
              <div className="bubble in">
                Quais produtos estão com estoque baixo e vendendo bem?
              </div>
              <div className="tool">
                <i></i> Consultou estoque e vendas dos últimos 30 dias
              </div>
              <div className="bubble out">
                3 produtos vendem acima da média e têm menos de 10 unidades. O
                de maior risco é o <b>Conjunto de facas inox</b> (6 un., ritmo
                de 2 vendas/dia).
              </div>
              <div className="approve">
                <div>
                  <small>Ação sugerida · requer autorização</small>
                  <b>Pausar anúncio do Conjunto de facas até reposição</b>
                </div>
                <div className="approve__btns">
                  <button className="btn btn--sm btn--ink" type="button">
                    Aprovar
                  </button>
                  <button className="btn btn--sm btn--line-dark" type="button">
                    Recusar
                  </button>
                </div>
              </div>
            </div>
            <p className="legend">
              Alterações sensíveis, como preços, descontos e cancelamentos,
              passam por regras e aprovação.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
