(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  /* ---------- Nav ---------- */
  const nav = $('#nav'), burger = $('#burger'), links = $('#navLinks');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 20);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('a', links).forEach(a => a.addEventListener('click', () => {
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }));
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Product window tabs ---------- */
  const tabs = $$('.tab'), views = $$('.view'), bars = $('#bars');
  let autoTab, userTouched = false;
  function showTab(name) {
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.tab === name));
    views.forEach(v => v.classList.toggle('is-active', v.dataset.view === name));
    if (name === 'overview') { bars.classList.remove('is-in'); requestAnimationFrame(() => requestAnimationFrame(() => bars.classList.add('is-in'))); }
  }
  tabs.forEach(t => t.addEventListener('click', () => { userTouched = true; clearInterval(autoTab); showTab(t.dataset.tab); }));
  const appIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    bars.classList.add('is-in');
    if (!reduced) {
      const order = ['overview', 'catalog', 'inbox', 'ai'];
      let i = 0;
      autoTab = setInterval(() => { if (userTouched) return clearInterval(autoTab); i = (i + 1) % order.length; showTab(order[i]); }, 5500);
    }
    appIO.disconnect();
  }), { threshold: .35 });
  appIO.observe($('#app'));

  /* ---------- Instagram scenario ---------- */
  const phoneBody = $('#phoneBody');
  const flowItems = $$('#flow li');
  const steps = [
    { f: 0, t: 'bubble in', x: 'Oi! A garrafa térmica 1L está disponível?' },
    { f: 1, t: 'tool', x: 'Agente consultou o estoque centralizado' },
    { f: 2, t: 'bubble out', x: 'Olá! Está sim, com 112 unidades. Aqui está o link para comprar: loja.exemplo/garrafa-1l' },
    { f: 3, t: 'tool', x: 'Conversa vinculada ao produto e à venda' }
  ];
  async function playScenario() {
    do {
      phoneBody.innerHTML = '';
      flowItems.forEach(li => li.classList.remove('is-on'));
      for (const s of steps) {
        await sleep(reduced ? 0 : 1300);
        const d = document.createElement('div');
        if (s.t === 'tool') { d.className = 'tool'; d.innerHTML = '<i></i>' + s.x; }
        else { d.className = s.t.includes('out') ? 'bubble out' : 'bubble in'; d.textContent = s.x; }
        phoneBody.appendChild(d);
        flowItems[s.f].classList.add('is-on');
      }
      if (!reduced) await sleep(5000);
    } while (!reduced);
  }
  const phoneIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { playScenario(); phoneIO.disconnect(); }
  }), { threshold: .4 });
  phoneIO.observe($('#phone'));

  /* ---------- Connect flow ---------- */
  const screens = [
    `<div class="cs"><h4>Crie sua conta</h4><p>Cadastro rápido, sem cartão de crédito.</p>
      <div class="cs__field">Nome da loja</div><div class="cs__field">E-mail</div><span class="cs__btn">Criar conta</span></div>`,
    `<div class="cs"><h4>Painel inicial</h4><p>Nenhum canal conectado ainda.</p>
      <div class="cs__opt" style="justify-content:center;border-style:dashed">+ Conectar canais</div></div>`,
    `<div class="cs"><h4>Escolha o canal</h4><p>Selecione onde você vende.</p>
      <div class="cs__grid"><div class="cs__opt is-sel">Mercado Livre <span>✓</span></div><div class="cs__opt">Nuvemshop</div><div class="cs__opt">Instagram</div><div class="cs__opt">WhatsApp Business</div></div></div>`,
    `<div class="cs"><h4>Autorize no serviço original</h4><p>Você faz login no próprio Mercado Livre e autoriza o acesso. A Trevvos nunca vê sua senha.</p>
      <div class="cs__field">Permitir que a Trevvos acesse produtos, pedidos e mensagens?</div><span class="cs__btn">Autorizar</span>
      <span class="cs__lock">🔒 Conexão oficial via OAuth</span></div>`,
    `<div class="cs"><h4>Sincronizando…</h4><p>Importando as informações que o canal disponibiliza.</p>
      <div class="cs__prog"><i></i></div>
      <ul class="cs__list"><li>Produtos <em>248</em></li><li>Pedidos recentes <em>312</em></li><li>Estoque <em>ok</em></li></ul></div>`,
    `<div class="cs"><h4>Tudo em um só painel</h4><p>Gerencie produtos, pedidos e conversas sem sair da Trevvos.</p>
      <ul class="cs__list"><li>Mercado Livre <em>sincronizado</em></li><li>Catálogo <em>248 produtos</em></li><li>Conversas <em>17 abertas</em></li></ul></div>`
  ];
  const stepEls = $$('#connectSteps li'), screen = $('#connectScreen');
  let cIdx = 0, cTimer;
  function showStep(i) {
    cIdx = i;
    stepEls.forEach((li, k) => li.classList.toggle('is-active', k === i));
    screen.innerHTML = screens[i];
  }
  function cRestart() { clearInterval(cTimer); if (!reduced) cTimer = setInterval(() => showStep((cIdx + 1) % screens.length), 4200); }
  stepEls.forEach((li, i) => li.addEventListener('click', () => { showStep(i); cRestart(); }));
  showStep(0);
  const cIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) cRestart(); else clearInterval(cTimer);
  }), { threshold: .3 });
  cIO.observe($('.connect'));

  /* ---------- Serviços sob medida (seletor) ---------- */
  const svcBtns = $$('.svc__nav button'), svcPanels = $$('.svc__panel');
  function showSvc(i) {
    svcBtns.forEach((b, k) => { b.classList.toggle('is-active', k === i); b.setAttribute('aria-selected', k === i); });
    svcPanels.forEach((p, k) => p.classList.toggle('is-active', k === i));
  }
  svcBtns.forEach((b, i) => b.addEventListener('click', () => showSvc(i)));

  /* ---------- Aplicações por setor ---------- */
  // Exemplos de possibilidades de aplicação, não projetos entregues.
  const SECTORS = [
    { name: 'Jurídico', items: [
      { t: 'Análise e revisão assistida de contratos',
        p: 'Equipes gastam muito tempo lendo contratos para localizar cláusulas críticas e divergências.',
        s: 'IA que lê os contratos, destaca cláusulas relevantes e inconsistências em relação a modelos e políticas da empresa, para revisão humana.',
        b: 'Revisões mais ágeis e padronizadas, com profissionais focados na análise.' },
      { t: 'Copilotos para consultas jurídicas internas',
        p: 'Áreas internas recorrem ao jurídico para dúvidas repetitivas.',
        s: 'Assistente conectado a políticas, modelos e documentos, que responde com indicação das fontes e encaminha o que exige um profissional.',
        b: 'Menos demandas repetitivas e respostas rastreáveis.' } ] },
    { name: 'Indústria', items: [
      { t: 'Manutenção preditiva de equipamentos',
        p: 'Paradas inesperadas de máquinas geram custos e atrasos na produção.',
        s: 'Modelos que analisam dados de sensores e históricos de manutenção para sinalizar sinais de falha antes que aconteçam.',
        b: 'Manutenção melhor planejada e maior previsibilidade da operação.' },
      { t: 'Inspeção de qualidade por visão computacional',
        p: 'A inspeção visual manual é lenta e sujeita a variações entre pessoas.',
        s: 'Visão computacional para identificar possíveis defeitos em imagens da linha de produção, com apoio à decisão da equipe de qualidade.',
        b: 'Critérios de inspeção mais consistentes e registro das ocorrências.' } ] },
    { name: 'Varejo', items: [
      { t: 'Recomendações personalizadas de produtos',
        p: 'Clientes encontram poucos produtos relevantes entre catálogos extensos.',
        s: 'Sistema de recomendação baseado em comportamento de navegação, buscas e histórico de compras.',
        b: 'Experiência de compra mais relevante e novas oportunidades de venda.' },
      { t: 'Previsão de demanda e otimização de estoque',
        p: 'Excesso ou falta de produtos prejudica o caixa e as vendas.',
        s: 'Modelos que projetam a demanda e apoiam as decisões de reposição.',
        b: 'Decisões de estoque apoiadas em dados.' } ] },
    { name: 'Saúde', items: [
      { t: 'Apoio à documentação e elaboração de relatórios clínicos',
        p: 'Profissionais dedicam tempo significativo a registros e relatórios.',
        s: 'Assistentes que organizam informações e geram rascunhos de documentação para revisão e validação do profissional.',
        b: 'Menos tempo em tarefas administrativas.' },
      { t: 'Apoio à análise de imagens médicas',
        p: 'O volume de exames exige apoio para priorizar e organizar análises.',
        s: 'Ferramentas de apoio à análise de imagens, sempre como suporte ao profissional.',
        b: 'Apoio à organização e à priorização de análises.',
        reg: 'Sujeito a validação profissional e a requisitos regulatórios.' } ] },
    { name: 'Finanças', items: [
      { t: 'Detecção de possíveis fraudes',
        p: 'Transações suspeitas precisam ser identificadas rapidamente entre grandes volumes de dados.',
        s: 'Modelos que sinalizam padrões atípicos para análise da equipe responsável.',
        b: 'Mais agilidade na identificação de casos para investigação.' },
      { t: 'Modelos de apoio à avaliação de crédito',
        p: 'A análise de crédito envolve muitas variáveis e exige consistência.',
        s: 'Modelos que apoiam a avaliação, com controles de risco e conformidade.',
        b: 'Análises mais consistentes e documentadas.',
        reg: 'Exige controles de risco e conformidade.' } ] },
    { name: 'Educação', items: [
      { t: 'Tutores virtuais personalizados',
        p: 'Estudantes têm ritmos e dúvidas diferentes, e o atendimento individual é limitado.',
        s: 'Tutores virtuais que explicam conteúdos, respondem dúvidas e adaptam as interações ao perfil do estudante.',
        b: 'Apoio ao aprendizado fora do horário de aula.' } ] },
    { name: 'Logística', items: [
      { t: 'Planejamento e otimização de rotas de entrega',
        p: 'Rotas pouco eficientes aumentam custos e prazos.',
        s: 'Algoritmos que planejam rotas considerando endereços, janelas de entrega e restrições da operação.',
        b: 'Rotas melhor planejadas e uso mais eficiente da frota.' } ] }
  ];
  const chipsEl = $('#sectorChips'), listEl = $('#sectorList');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  function showSector(i) {
    $$('button', chipsEl).forEach((b, k) => { b.classList.toggle('is-active', k === i); b.setAttribute('aria-selected', k === i); });
    const sec = SECTORS[i];
    listEl.innerHTML = sec.items.map(it => `
      <article class="app-item">
        <small>${esc(sec.name)}</small>
        <h3>${esc(it.t)}</h3>
        <dl>
          <div><dt>Desafio</dt><dd>${esc(it.p)}</dd></div>
          <div><dt>Possível solução</dt><dd>${esc(it.s)}</dd></div>
          <div><dt>Benefícios esperados</dt><dd>${esc(it.b)}</dd></div>
        </dl>
        ${it.reg ? `<p class="note-reg">${esc(it.reg)}</p>` : ''}
        <a href="#contato" class="btn btn--ink btn--sm" data-cta="diagnostico" data-app="${esc(sec.name + ': ' + it.t)}">Quero explorar esta solução</a>
      </article>`).join('');
  }
  SECTORS.forEach((s, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.textContent = s.name;
    b.addEventListener('click', () => showSector(i));
    chipsEl.appendChild(b);
  });
  showSector(0);

  /* ---------- Contato: abas e CTAs contextualizados ---------- */
  const forms = { diagnostico: $('#formDiagnostico'), commerce: $('#formCommerce') };
  const ctabs = $$('.ctabs button');
  function showForm(kind) {
    ctabs.forEach(b => b.classList.toggle('is-active', b.dataset.form === kind));
    Object.entries(forms).forEach(([k, f]) => { f.hidden = k !== kind; });
  }
  ctabs.forEach(b => b.addEventListener('click', () => showForm(b.dataset.form)));

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-cta]');
    if (!a) return;
    const kind = a.dataset.cta;
    showForm(kind);
    if (kind === 'diagnostico') {
      const sel = $('#servicoSel'), txt = $('#desafioTxt');
      if (a.dataset.service) {
        sel.value = [...sel.options].some(o => o.value === a.dataset.service) ? a.dataset.service : '';
      }
      if (a.dataset.app) {
        sel.value = 'Ainda não sei, quero conversar';
        txt.value = `Tenho interesse nesta aplicação: ${a.dataset.app}.\n\n`;
      }
    }
  });

  /* ---------- Envio dos formulários ---------- */
  // Configure um destino real. Sem endpoint, o envio abre o e-mail do visitante (mailto).
  const FORM_ENDPOINT = '';                       // TODO: ex. 'https://api.trevvos.com.br/contato'
  const CONTACT_EMAIL = 'contato@trevvos.com.br'; // TODO: confirmar o e-mail comercial
  const TITLES = { diagnostico: 'Solicitação de diagnóstico', commerce: 'Lista de interesse: Trevvos Commerce' };
  const LABELS = { nome: 'Nome', empresa: 'Empresa', email: 'E-mail', whatsapp: 'WhatsApp', servico: 'Serviço de interesse', desafio: 'Desafio', canal: 'Canal principal de venda' };

  Object.values(forms).forEach(form => {
    const msg = $('.form__msg', form);
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const kind = form.dataset.kind;
      const d = Object.fromEntries(new FormData(form));
      msg.className = 'form__msg';
      if (!d.nome.trim()) { msg.textContent = 'Informe seu nome.'; msg.classList.add('err'); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) { msg.textContent = 'Informe um e-mail válido.'; msg.classList.add('err'); return; }

      if (FORM_ENDPOINT) {
        try {
          const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tipo: kind, ...d }) });
          if (!r.ok) throw new Error();
          msg.textContent = 'Recebemos sua mensagem. Obrigado!';
          msg.classList.add('ok');
          form.reset();
        } catch {
          msg.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
          msg.classList.add('err');
        }
        return;
      }

      const body = Object.entries(d).filter(([, v]) => String(v).trim()).map(([k, v]) => `${LABELS[k] || k}: ${v}`).join('\n');
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(TITLES[kind])}&body=${encodeURIComponent(body)}`;
      msg.textContent = 'Abrimos seu aplicativo de e-mail com a mensagem pronta para enviar.';
      msg.classList.add('ok');
    });
  });
})();
