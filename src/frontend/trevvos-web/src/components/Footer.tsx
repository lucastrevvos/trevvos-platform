import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a href="#top" className="logo">
            <BrandLogo />
            <span>Trevvos</span>
          </a>
          <p>Soluções em Inteligência Artificial</p>
        </div>
        <div className="footer__links">
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#aplicacoes">Aplicações</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a
            href="https://kmone.trevvos.com.br/"
            target="_blank"
            rel="noopener"
          >
            KM One
          </a>
        </div>
        <p className="footer__copy">
          © <span id="year">{new Date().getFullYear()}</span> Trevvos Soluções
          em IA. O Trevvos Commerce é um produto em desenvolvimento;
          funcionalidades e integrações descritas estão sujeitas a validação. As
          aplicações por setor são exemplos de possibilidades, não projetos
          entregues.
        </p>
      </div>
    </footer>
  );
}
