export function Roadmap() {
  return (
    <section className="section section--paper2" id="roadmap">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Roadmap do Commerce</span>
          <h2>Primeiro validar, depois expandir.</h2>
          <p>
            Não desenvolvemos tudo ao mesmo tempo. O foco é lançar um produto
            utilizável antes de ampliar integrações.
          </p>
        </div>

        <div className="road reveal">
          <div className="road__item is-now">
            <small>Fase 1 · MVP</small>
            <h3>Catálogo e vendas</h3>
            <p>
              Catálogo centralizado, integração inicial com Mercado Livre e uma
              plataforma de e-commerce, produtos, pedidos e métricas básicas.
            </p>
          </div>
          <div className="road__item">
            <small>Fase 2</small>
            <h3>Atendimento</h3>
            <p>
              Caixa unificada conectada aos primeiros canais compatíveis,
              começando pelos mais viáveis.
            </p>
          </div>
          <div className="road__item">
            <small>Fase 3</small>
            <h3>Inteligência artificial</h3>
            <p>
              Agentes para atendimento, consulta operacional e criação assistida
              de anúncios.
            </p>
          </div>
          <div className="road__item">
            <small>Fase 4</small>
            <h3>Expansão</h3>
            <p>
              Outros marketplaces, publicação em redes sociais, análises
              avançadas e automações comerciais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
