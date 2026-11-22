export function Integrations() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">Integrações previstas</span>
          <h2>Os canais que queremos conectar.</h2>
          <p>
            Lista de intenção. Nenhuma integração está disponível em produção. A
            disponibilidade depende das APIs e permissões de cada plataforma, e
            cada canal será homologado individualmente.
          </p>
        </div>

        <div className="integ reveal">
          <div className="integ__col">
            <h3>Marketplaces</h3>
            <ul>
              <li>
                Mercado Livre <em className="p1">Prioridade MVP</em>
              </li>
              <li>
                Shopee <em>Previsto</em>
              </li>
              <li>
                Amazon <em>Previsto</em>
              </li>
              <li>
                Magazine Luiza <em>Previsto</em>
              </li>
              <li>
                TikTok Shop <em>Previsto</em>
              </li>
            </ul>
          </div>
          <div className="integ__col">
            <h3>Lojas virtuais</h3>
            <ul>
              <li>
                Nuvemshop <em className="p1">Prioridade MVP</em>
              </li>
              <li>
                Shopify <em>Previsto</em>
              </li>
              <li>
                WooCommerce <em>Previsto</em>
              </li>
              <li>
                Tray <em>Previsto</em>
              </li>
              <li>
                VTEX <em>Previsto</em>
              </li>
            </ul>
          </div>
          <div className="integ__col">
            <h3>Redes e mensageria</h3>
            <ul>
              <li>
                Instagram <em>Previsto</em>
              </li>
              <li>
                Facebook Pages <em>Previsto</em>
              </li>
              <li>
                WhatsApp Business <em>Previsto</em>
              </li>
              <li>
                Facebook Marketplace{" "}
                <em className="warn">Depende de acesso oficial</em>
              </li>
            </ul>
          </div>
          <div className="integ__col">
            <h3>Complementares</h3>
            <ul>
              <li>
                Bling e outros ERPs <em>Previsto</em>
              </li>
              <li>
                Google Analytics 4 <em>Previsto</em>
              </li>
              <li>
                Google Merchant Center <em>Previsto</em>
              </li>
              <li>
                Pagamentos e logística <em>Previsto</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
