"use client";

import { useState, type CSSProperties, type KeyboardEvent } from "react";

export function Services() {
  const [active, setActive] = useState(0);
  function handleTabKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (index + 1) % 5
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? (index + 4) % 5
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? 4
              : -1;
    if (next < 0) return;
    event.preventDefault();
    setActive(next);
    document.getElementById("service-tab-" + next)?.focus();
  }
  return (
    <section className="section section--paper2" id="solucoes">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Soluções sob medida</span>
          <h2>
            Inteligência artificial desenhada para a operação da sua empresa.
          </h2>
          <p>
            Projetos de IA, automação e integração de sistemas, contratados por
            projeto, por escopo ou como contrato recorrente de suporte e
            evolução.
          </p>
        </div>

        <div className="svc reveal" id="svc">
          <div className="svc__nav" role="tablist" aria-label="Serviços">
            <button
              type="button"
              role="tab"
              id="service-tab-0"
              aria-controls="service-panel-0"
              aria-selected={active === 0}
              tabIndex={active === 0 ? 0 : -1}
              className={active === 0 ? "is-active" : ""}
              onClick={() => setActive(0)}
              onKeyDown={(event) => handleTabKey(event, 0)}
              data-svc="0"
            >
              <i>01</i>
              <span>Agentes de IA para atendimento</span>
            </button>
            <button
              type="button"
              role="tab"
              id="service-tab-1"
              aria-controls="service-panel-1"
              aria-selected={active === 1}
              tabIndex={active === 1 ? 0 : -1}
              className={active === 1 ? "is-active" : ""}
              onClick={() => setActive(1)}
              onKeyDown={(event) => handleTabKey(event, 1)}
              data-svc="1"
            >
              <i>02</i>
              <span>Automação inteligente de processos</span>
            </button>
            <button
              type="button"
              role="tab"
              id="service-tab-2"
              aria-controls="service-panel-2"
              aria-selected={active === 2}
              tabIndex={active === 2 ? 0 : -1}
              className={active === 2 ? "is-active" : ""}
              onClick={() => setActive(2)}
              onKeyDown={(event) => handleTabKey(event, 2)}
              data-svc="2"
            >
              <i>03</i>
              <span>Consultoria e implementação de IA</span>
            </button>
            <button
              type="button"
              role="tab"
              id="service-tab-3"
              aria-controls="service-panel-3"
              aria-selected={active === 3}
              tabIndex={active === 3 ? 0 : -1}
              className={active === 3 ? "is-active" : ""}
              onClick={() => setActive(3)}
              onKeyDown={(event) => handleTabKey(event, 3)}
              data-svc="3"
            >
              <i>04</i>
              <span>IA para marketing, vendas e relacionamento</span>
            </button>
            <button
              type="button"
              role="tab"
              id="service-tab-4"
              aria-controls="service-panel-4"
              aria-selected={active === 4}
              tabIndex={active === 4 ? 0 : -1}
              className={active === 4 ? "is-active" : ""}
              onClick={() => setActive(4)}
              onKeyDown={(event) => handleTabKey(event, 4)}
              data-svc="4"
            >
              <i>05</i>
              <span>Copilotos empresariais</span>
            </button>
          </div>

          <div className="svc__panels">
            <div
              className={active === 0 ? "svc__panel is-active" : "svc__panel"}
              role="tabpanel"
              id="service-panel-0"
              aria-labelledby="service-tab-0"
            >
              <h3>Agentes de IA para atendimento</h3>
              <p className="svc__lead">
                Agentes inteligentes para WhatsApp, websites e outros canais
                compatíveis, conectados ao conhecimento e aos sistemas da
                empresa.
              </p>
              <div className="svc__cols">
                <ul className="ticks">
                  <li>Atendimento automatizado</li>
                  <li>Qualificação de oportunidades comerciais</li>
                  <li>Agendamento de serviços</li>
                  <li>Consultas a sistemas internos</li>
                  <li>Respostas baseadas no conhecimento da empresa</li>
                  <li>Encaminhamento para atendentes humanos</li>
                  <li>Integração com CRM e ferramentas corporativas</li>
                </ul>
                <div className="viz" aria-hidden="true">
                  <small className="viz__tag">Exemplo ilustrativo</small>
                  <div className="bubble in">
                    Quero agendar uma visita para amanhã.
                  </div>
                  <div className="tool">
                    <i></i> Consultou agenda no sistema
                  </div>
                  <div className="bubble out">
                    Tenho 10h ou 15h. Qual prefere?
                  </div>
                  <div className="viz__pill">
                    Caso complexo → encaminhado a um atendente
                  </div>
                </div>
              </div>
              <a
                href="#contato"
                className="btn btn--ink"
                data-cta="diagnostico"
                data-service="Agentes de IA para atendimento"
              >
                Solicitar diagnóstico para este serviço
              </a>
            </div>

            <div
              className={active === 1 ? "svc__panel is-active" : "svc__panel"}
              role="tabpanel"
              id="service-panel-1"
              aria-labelledby="service-tab-1"
            >
              <h3>Automação inteligente de processos</h3>
              <p className="svc__lead">
                Automação das tarefas administrativas e operacionais que
                consomem tempo das equipes.
              </p>
              <div className="svc__cols">
                <ul className="ticks">
                  <li>Leitura e classificação de documentos</li>
                  <li>Extração de informações de PDFs</li>
                  <li>Processamento de e-mails</li>
                  <li>Geração de relatórios</li>
                  <li>Integração entre sistemas</li>
                  <li>Conciliação de dados</li>
                  <li>Automação de fluxos de aprovação</li>
                  <li>Processamento de informações em planilhas</li>
                </ul>
                <div className="viz" aria-hidden="true">
                  <small className="viz__tag">Exemplo ilustrativo</small>
                  <div className="viz__doc">
                    <b>Documento recebido</b>
                    <span>nota-fiscal.pdf</span>
                  </div>
                  <div className="viz__arrow">↓ extração e classificação</div>
                  <ul className="viz__fields">
                    <li>
                      <span>Fornecedor</span>
                      <em>campo extraído</em>
                    </li>
                    <li>
                      <span>Valor</span>
                      <em>campo extraído</em>
                    </li>
                    <li>
                      <span>Vencimento</span>
                      <em>campo extraído</em>
                    </li>
                  </ul>
                  <div className="viz__pill">Enviado ao fluxo de aprovação</div>
                </div>
              </div>
              <a
                href="#contato"
                className="btn btn--ink"
                data-cta="diagnostico"
                data-service="Automação inteligente de processos"
              >
                Solicitar diagnóstico para este serviço
              </a>
            </div>

            <div
              className={active === 2 ? "svc__panel is-active" : "svc__panel"}
              role="tabpanel"
              id="service-panel-2"
              aria-labelledby="service-tab-2"
            >
              <h3>Consultoria e implementação de IA</h3>
              <p className="svc__lead">
                Acompanhamento para identificar oportunidades de inteligência
                artificial e levá-las até a operação.
              </p>
              <div className="svc__cols">
                <ul className="ticks">
                  <li>Diagnóstico de processos</li>
                  <li>Identificação de gargalos</li>
                  <li>Avaliação de viabilidade técnica</li>
                  <li>Planejamento de soluções</li>
                  <li>Arquitetura de integração e dados</li>
                  <li>Prototipação e desenvolvimento</li>
                  <li>Implantação e acompanhamento</li>
                </ul>
                <div className="viz" aria-hidden="true">
                  <small className="viz__tag">Exemplo ilustrativo</small>
                  <ol className="viz__steps">
                    <li className="done">
                      <b>1</b>Diagnóstico e gargalos
                    </li>
                    <li className="done">
                      <b>2</b>Viabilidade técnica
                    </li>
                    <li className="now">
                      <b>3</b>Arquitetura e protótipo
                    </li>
                    <li>
                      <b>4</b>Implantação e acompanhamento
                    </li>
                  </ol>
                </div>
              </div>
              <a
                href="#contato"
                className="btn btn--ink"
                data-cta="diagnostico"
                data-service="Consultoria e implementação de IA"
              >
                Solicitar diagnóstico para este serviço
              </a>
            </div>

            <div
              className={active === 3 ? "svc__panel is-active" : "svc__panel"}
              role="tabpanel"
              id="service-panel-3"
              aria-labelledby="service-tab-3"
            >
              <h3>IA para marketing, vendas e relacionamento</h3>
              <p className="svc__lead">
                Soluções para melhorar o relacionamento comercial e o uso dos
                dados de clientes.
              </p>
              <div className="svc__cols">
                <ul className="ticks">
                  <li>Segmentação de clientes</li>
                  <li>Campanhas personalizadas</li>
                  <li>Automação de relacionamento</li>
                  <li>Qualificação comercial</li>
                  <li>Assistentes de vendas</li>
                  <li>Análise de comportamento</li>
                  <li>Apoio à decisão comercial</li>
                </ul>
                <div className="viz" aria-hidden="true">
                  <small className="viz__tag">Exemplo ilustrativo</small>
                  <div className="viz__seg">
                    <span>Segmento A</span>
                    <i style={{ "--w": "78%" } as CSSProperties}></i>
                  </div>
                  <div className="viz__seg">
                    <span>Segmento B</span>
                    <i style={{ "--w": "52%" } as CSSProperties}></i>
                  </div>
                  <div className="viz__seg">
                    <span>Segmento C</span>
                    <i style={{ "--w": "34%" } as CSSProperties}></i>
                  </div>
                  <div className="viz__pill">
                    Mensagem personalizada por segmento
                  </div>
                </div>
              </div>
              <a
                href="#contato"
                className="btn btn--ink"
                data-cta="diagnostico"
                data-service="IA para marketing, vendas e relacionamento"
              >
                Solicitar diagnóstico para este serviço
              </a>
            </div>

            <div
              className={active === 4 ? "svc__panel is-active" : "svc__panel"}
              role="tabpanel"
              id="service-panel-4"
              aria-labelledby="service-tab-4"
            >
              <h3>Copilotos empresariais</h3>
              <p className="svc__lead">
                Assistentes inteligentes conectados ao conhecimento e aos
                sistemas internos da organização.
              </p>
              <div className="svc__cols">
                <ul className="ticks">
                  <li>Consulta a documentos</li>
                  <li>Bases internas de conhecimento</li>
                  <li>Políticas e procedimentos</li>
                  <li>Busca semântica</li>
                  <li>Assistentes para RH, jurídico, suporte e operações</li>
                  <li>Recuperação de informação com RAG</li>
                  <li>Respostas com referências às fontes</li>
                </ul>
                <div className="viz" aria-hidden="true">
                  <small className="viz__tag">Exemplo ilustrativo</small>
                  <div className="bubble in">
                    Qual o procedimento para reembolso de despesas?
                  </div>
                  <div className="bubble out">
                    Resposta baseada nos documentos internos, com indicação de
                    onde a informação foi encontrada.
                  </div>
                  <div className="viz__src">
                    <i>Política de despesas</i>
                    <i>Manual do colaborador</i>
                  </div>
                </div>
              </div>
              <a
                href="#contato"
                className="btn btn--ink"
                data-cta="diagnostico"
                data-service="Copilotos empresariais"
              >
                Solicitar diagnóstico para este serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
