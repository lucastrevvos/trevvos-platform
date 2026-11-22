import Image from "next/image";
import kmOneLogo from "../../public/images/km-one-logo.png";

export function Products() {
  return (
    <section className="section" id="produtos">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Produtos Trevvos</span>
          <h2>
            Necessidades recorrentes transformadas em tecnologia acessível.
          </h2>
          <p>
            Além de projetos sob medida, a Trevvos desenvolve softwares próprios
            para resolver problemas específicos de mercado.
          </p>
        </div>

        <article className="prod prod--commerce reveal">
          <div className="prod__copy">
            <div className="prod__status">
              <span className="st st--dev">Em desenvolvimento</span>
              <span className="prod__kind">Plataforma SaaS B2B</span>
            </div>
            <h3>Trevvos Commerce</h3>
            <p className="prod__prop">
              Seus canais de venda, atendimento e operações trabalhando juntos.
            </p>
            <ol className="prod__pillars">
              <li>
                <b>1</b>
                <span>Gestão multicanal de produtos, anúncios e pedidos</span>
              </li>
              <li>
                <b>2</b>
                <span>Centralização de atendimento</span>
              </li>
              <li>
                <b>3</b>
                <span>Agentes de IA para automação comercial</span>
              </li>
            </ol>
            <p className="prod__note">
              Para comerciantes, e-commerces e vendedores de marketplaces.
              Integrações pretendidas com Mercado Livre, Instagram, WhatsApp,
              lojas virtuais e outros canais, sujeitas às respectivas APIs e
              aprovações.
            </p>
            <div className="prod__cta">
              <a href="#commerce" className="btn btn--lime">
                Conhecer o Trevvos Commerce
              </a>
              <a href="#contato" className="btn btn--line" data-cta="commerce">
                Tenho interesse no Commerce
              </a>
            </div>
          </div>
          <div className="prod__visual">
            <p>
              Veja o painel demonstrativo no topo da página ou explore o
              conceito em detalhe.
            </p>
            <a href="#plataforma" className="link-arrow link-arrow--light">
              Ver o painel <span>↑</span>
            </a>
          </div>
        </article>

        <article className="prod prod--km reveal" id="kmone">
          <div className="km__phone" aria-label="Aplicativo KM One">
            <div className="phone-frame">
              <div className="phone-frame__notch"></div>
              <div className="phone-frame__screen">
                <div className="phone-frame__brand">
                  <Image
                    className="km-brand-logo"
                    src={kmOneLogo}
                    alt="Logotipo oficial KM One"
                    sizes="200px"
                  />
                  <span>Tecnologia para quem vive de dirigir.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="prod__copy">
            <div className="prod__status">
              <span className="st st--live">Disponível para Android</span>
              <span className="prod__kind">Aplicativo · Gratuito</span>
            </div>
            <h3>KM One</h3>
            <p className="prod__prop">Tecnologia para quem vive de dirigir.</p>
            <p className="prod__desc">
              Aplicativo brasileiro desenvolvido pela Trevvos para ajudar
              motoristas de aplicativo a analisar ofertas, controlar custos e
              acompanhar a operação.
            </p>

            <ul className="km__feats">
              <li>Análise de ofertas por valor, distância, tempo e R$/km</li>
              <li>
                Captura manual ou automática, conforme permissões e condições do
                aparelho
              </li>
              <li>Ofertas capturadas organizadas em Vistas</li>
              <li>Registro de corridas realizadas</li>
              <li>Indicadores e metas</li>
              <li>Controle de abastecimentos</li>
              <li>Registro de deslocamentos sem passageiro</li>
              <li>Registro de corridas particulares</li>
              <li>Lista de bloqueio de regiões ou vias</li>
              <li>
                Copiloto com comandos de voz para ações e consultas da rotina
              </li>
            </ul>

            <p className="km__quote">
              O KM One mostra os dados. A decisão continua sendo sua.
            </p>
            <p className="prod__note">
              Gratuito, sem necessidade de cadastro, cartão ou assinatura para
              começar.
            </p>

            <div className="prod__cta">
              <a
                href="https://kmone.trevvos.com.br/"
                className="btn btn--ink"
                target="_blank"
                rel="noopener"
              >
                Conhecer o KM One
              </a>

              <a
                href="https://kmone.trevvos.com.br/"
                className="btn btn--line-dark"
                target="_blank"
                rel="noopener"
              >
                Baixar para Android
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
