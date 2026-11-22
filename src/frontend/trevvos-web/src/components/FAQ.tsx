export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container container--narrow">
        <div className="section__head reveal">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Transparência sobre o que é e o que ainda não é.</h2>
        </div>
        <div className="faq reveal">
          <details open>
            <summary>A Trevvos Commerce já está disponível?</summary>
            <p>
              Ainda não. É um produto em desenvolvimento, com lançamento em
              fases. As telas do site são demonstrações conceituais.
            </p>
          </details>
          <details>
            <summary>O KM One já pode ser usado?</summary>
            <p>
              Sim. O KM One está disponível para Android e é gratuito. Para
              começar, não é preciso cadastro, cartão ou assinatura. Mais
              detalhes no site oficial.
            </p>
          </details>
          <details>
            <summary>
              As aplicações por setor são projetos já entregues?
            </summary>
            <p>
              Não. São exemplos de soluções que podem ser desenvolvidas sob
              medida. Cada projeto começa por um diagnóstico das necessidades da
              empresa.
            </p>
          </details>
          <details>
            <summary>
              Todos os canais do Commerce funcionarão da mesma forma?
            </summary>
            <p>
              Não. Publicação, atendimento e métricas dependem das permissões e
              APIs que cada plataforma disponibiliza. O Facebook Marketplace,
              por exemplo, tem restrições específicas.
            </p>
          </details>
          <details>
            <summary>
              A IA do Commerce poderá alterar preços ou cancelar pedidos
              sozinha?
            </summary>
            <p>
              Não. Operações sensíveis, como preços, descontos e cancelamentos,
              terão regras e controles de autorização.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
