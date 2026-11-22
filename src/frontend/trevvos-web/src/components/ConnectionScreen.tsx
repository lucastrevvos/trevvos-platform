import type { CSSProperties } from "react";

export function ConnectionScreen({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <div className="cs">
          <h4>Crie sua conta</h4>
          <p>Cadastro rápido, sem cartão de crédito.</p>
          <div className="cs__field">Nome da loja</div>
          <div className="cs__field">E-mail</div>
          <span className="cs__btn">Criar conta</span>
        </div>
      );
    case 1:
      return (
        <div className="cs">
          <h4>Painel inicial</h4>
          <p>Nenhum canal conectado ainda.</p>
          <div
            className="cs__opt"
            style={
              {
                "justify-content": "center",
                "border-style": "dashed",
              } as CSSProperties
            }
          >
            + Conectar canais
          </div>
        </div>
      );
    case 2:
      return (
        <div className="cs">
          <h4>Escolha o canal</h4>
          <p>Selecione onde você vende.</p>
          <div className="cs__grid">
            <div className="cs__opt is-sel">
              Mercado Livre <span>✓</span>
            </div>
            <div className="cs__opt">Nuvemshop</div>
            <div className="cs__opt">Instagram</div>
            <div className="cs__opt">WhatsApp Business</div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="cs">
          <h4>Autorize no serviço original</h4>
          <p>
            Você faz login no próprio Mercado Livre e autoriza o acesso. A
            Trevvos nunca vê sua senha.
          </p>
          <div className="cs__field">
            Permitir que a Trevvos acesse produtos, pedidos e mensagens?
          </div>
          <span className="cs__btn">Autorizar</span>
          <span className="cs__lock">🔒 Conexão oficial via OAuth</span>
        </div>
      );
    case 4:
      return (
        <div className="cs">
          <h4>Sincronizando…</h4>
          <p>Importando as informações que o canal disponibiliza.</p>
          <div className="cs__prog">
            <i></i>
          </div>
          <ul className="cs__list">
            <li>
              Produtos <em>248</em>
            </li>
            <li>
              Pedidos recentes <em>312</em>
            </li>
            <li>
              Estoque <em>ok</em>
            </li>
          </ul>
        </div>
      );
    case 5:
      return (
        <div className="cs">
          <h4>Tudo em um só painel</h4>
          <p>Gerencie produtos, pedidos e conversas sem sair da Trevvos.</p>
          <ul className="cs__list">
            <li>
              Mercado Livre <em>sincronizado</em>
            </li>
            <li>
              Catálogo <em>248 produtos</em>
            </li>
            <li>
              Conversas <em>17 abertas</em>
            </li>
          </ul>
        </div>
      );
    default:
      return null;
  }
}
