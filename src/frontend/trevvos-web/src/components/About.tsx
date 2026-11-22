export function About() {
  return (
    <section className="section" id="sobre">
      <div className="container grid-2">
        <div className="reveal">
          <span className="eyebrow">Sobre a Trevvos</span>
          <h2>
            Uma empresa de tecnologia e IA que constrói para os outros e para o
            mercado.
          </h2>
        </div>
        <div className="reveal prose">
          <p>
            A Trevvos desenvolve produtos próprios e soluções personalizadas
            para outras organizações. Criamos soluções sob medida para desafios
            específicos e transformamos necessidades recorrentes em tecnologias
            acessíveis.
          </p>
          <p>As duas frentes se complementam:</p>
          <ul className="about__paths">
            <li>
              <b>Empresa que precisa de um sistema exclusivo</b>
              <span>procura nossas soluções sob medida.</span>
            </li>
            <li>
              <b>Comerciante que quer centralizar a operação</b>
              <span>conhece o Trevvos Commerce.</span>
            </li>
            <li>
              <b>Motorista que quer analisar suas corridas</b>
              <span>conhece o KM One.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
