import { CommerceDemo } from "./CommerceDemo";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__top">
        <div className="hero__copy">
          <span className="badge reveal">
            <i></i> Trevvos · Soluções em Inteligência Artificial
          </span>
          <h1 className="reveal">
            Tecnologia e inteligência artificial para{" "}
            <em>transformar negócios.</em>
          </h1>
        </div>
        <div className="hero__side reveal">
          <p>
            Desenvolvemos agentes de IA, automações e softwares inteligentes que
            conectam sistemas, simplificam operações e criam novas
            possibilidades para empresas e pessoas.
          </p>
          <div className="hero__cta">
            <a href="#solucoes" className="btn btn--lime btn--lg">
              Explorar soluções
            </a>
            <a href="#produtos" className="btn btn--line btn--lg">
              Conhecer nossos produtos
            </a>
          </div>
        </div>
      </div>

      <div className="container" id="plataforma">
        <p className="hero__cap reveal">
          Em destaque: <b>Trevvos Commerce</b>, produto em desenvolvimento ·{" "}
          <a href="#produtos">saiba mais</a>
        </p>
        <CommerceDemo />
      </div>
    </section>
  );
}
