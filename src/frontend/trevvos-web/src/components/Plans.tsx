export function Plans() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow eyebrow--lime">Modelo em estudo</span>
          <h2>Planos pensados para crescer com o lojista.</h2>
          <p>
            Estrutura preliminar. Valores serão definidos após validar custos de
            conexão, atendimento, infraestrutura e uso de IA.
          </p>
        </div>

        <div className="plans reveal">
          <article className="plan">
            <h3>Essencial</h3>
            <p>Gestão de produtos, integrações básicas e dashboard.</p>
          </article>
          <article className="plan plan--mid">
            <h3>Profissional</h3>
            <p>Múltiplos canais, atendimento centralizado e automações.</p>
          </article>
          <article className="plan">
            <h3>Inteligente</h3>
            <p>Agentes de IA, análise avançada e automações comerciais.</p>
          </article>
        </div>
        <div className="center plans__cta reveal">
          <a
            href="#contato"
            className="btn btn--lime btn--lg"
            data-cta="commerce"
          >
            Tenho interesse no Commerce
          </a>
        </div>
      </div>
    </section>
  );
}
