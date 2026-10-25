import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Fuel,
  Gauge,
  MapPinned,
  Radar,
  Route,
  Smartphone,
  Sparkles,
  Target,
  WalletCards,
} from "lucide-react";

import appOnmobile from "../assets/appcelular.png";
import driverApp from "../assets/appcelulardriver.png";
import promotionalImage from "../assets/promocional.png";

const play = "https://play.google.com/store/apps/details?id=com.lucastrevvos.kmone";

const metrics = [
  { value: "Boa", label: "Dentro dos seus parâmetros" },
  { value: "Atenção", label: "Vale conferir antes de decidir" },
  { value: "Ruim", label: "Fora dos parâmetros definidos" },
];

const pains = [
  "A oferta aparece rápido e você precisa decidir antes de fazer a conta na cabeça.",
  "A gasolina e os custos somem no meio da rotina.",
  "Sem parâmetros claros, uma corrida com valor alto pode derrubar seu ganho por km.",
];

const features = [
  {
    icon: Radar,
    title: "Análise de ofertas",
    text: "Use a captura manual ou automática para visualizar valor, distância, tempo e R$/km antes de decidir.",
  },
  {
    icon: WalletCards,
    title: "Vistas",
    text: "As ofertas capturadas ficam em Vistas até você decidir: salve se realizou a corrida, ignore se não realizou ou consulte os detalhes.",
  },
  {
    icon: BarChart3,
    title: "Registros",
    text: "Acompanhe as corridas salvas, consulte o histórico e veja resumos financeiros e operacionais por período.",
  },
  {
    icon: Fuel,
    title: "Abastecimentos",
    text: "Registre abastecimentos e mantenha os gastos de combustível organizados junto da sua rotina.",
  },
  {
    icon: MapPinned,
    title: "Deslocamento sem passageiro",
    text: "Acompanhe tempo e distância dos trajetos sem passageiro e salve esses quilômetros nos Registros como sem receita.",
  },
  {
    icon: Route,
    title: "Corridas particulares",
    text: "Acompanhe distância e tempo, informe o valor recebido e mantenha a corrida registrada no mesmo histórico.",
  },
  {
    icon: Target,
    title: "Lista de bloqueio",
    text: "Cadastre vias ou regiões que exigem atenção e receba alertas quando elas aparecerem no seu trajeto.",
  },
  {
    icon: Smartphone,
    title: "Copiloto KM One",
    text: "Use comandos de voz para consultar o status do dia, registrar abastecimentos, iniciar deslocamentos e acessar ações rápidas.",
  },
];

const steps = [
  {
    icon: Smartphone,
    title: "A corrida é identificada",
    text: "Ative os recursos necessários e escolha captura manual ou automática para analisar ofertas visíveis.",
  },
  {
    icon: Gauge,
    title: "Compare com seus parâmetros",
    text: "O app cruza valor, distância, R$/km e suas regras para classificar a oferta.",
  },
  {
    icon: WalletCards,
    title: "Aceite com mais clareza",
    text: "O KM One auxilia a análise; aceitar ou recusar a oferta permanece sob seu controle no aplicativo de corrida.",
  },
];

const roadmap = [
  "Comunidade e parcerias para reduzir custos do motorista",
  "Indicadores avançados para comparar turnos, regiões e aplicativos",
];

export function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[calc(100vh-104px)] w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28">
        <div className="absolute inset-x-[-35%] top-[-26rem] -z-10 h-[42rem] rounded-full bg-[radial-gradient(circle,rgba(32,242,122,0.18),rgba(0,196,106,0.08)_34%,transparent_64%)] blur-3xl" />
        <div className="absolute right-[-14rem] top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(74,144,226,0.14),transparent_68%)] blur-3xl" />

        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-[var(--green-main)] shadow-[0_0_36px_rgba(32,242,122,0.10)]">
            <Sparkles className="h-4 w-4" />
            Disponível para Android na Google Play
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-7xl">
            Tecnologia para quem vive de dirigir.
          </h1>

          <p className="mt-6 text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
            O KM One reúne ferramentas para ajudar você a tomar decisões e acompanhar
            sua rotina na rua: analise ofertas, registre corridas e deslocamentos,
            acompanhe seus resultados, abastecimentos e metas — tudo em um só lugar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={play}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--green-main)] px-7 py-4 text-base font-extrabold text-[#02100A] shadow-[0_18px_50px_rgba(32,242,122,0.28)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Baixar grátis na Google Play
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left backdrop-blur"
              >
                <strong className="block text-2xl font-black text-[var(--green-main)]">
                  {metric.value}
                </strong>
                <span className="mt-1 block text-sm leading-5 text-[var(--text-muted)]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm font-semibold text-[var(--text-muted)]">
            O KM One mostra os dados. A decisão continua sendo sua.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[36rem] justify-center lg:justify-end">
          <div className="absolute bottom-14 left-0 z-10 hidden rounded-2xl border border-[var(--border-soft)] bg-[#07151D]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--green-main)]/15 text-[var(--green-main)]">
                <Gauge className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  R$/km ideal
                </p>
                <p className="text-2xl font-black text-white">1.80</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-10 z-10 rounded-2xl border border-white/10 bg-[#07151D]/90 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[var(--green-main)] shadow-[0_0_18px_rgba(32,242,122,0.9)]" />
              <span className="text-sm font-bold text-white">
                Meta em tempo real
              </span>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-[var(--border-soft)] bg-gradient-to-b from-white/10 to-white/[0.02] p-3 shadow-[0_36px_110px_rgba(0,0,0,0.65)]">
            <img
              src={appOnmobile}
              alt="Tela do app KM One com resumo financeiro e registro de corrida"
              className="h-auto w-full max-w-[22rem] rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[var(--bg-section)]/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex gap-4 rounded-2xl border border-white/10 bg-[#081923] p-5"
            >
              <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--green-main)]" />
              <p className="text-base leading-7 text-white">{pain}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--green-main)]">
            KM One por Dentro
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Ferramentas para analisar, registrar e acompanhar sua rotina.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-[var(--bg-card)] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-[var(--border-soft)]"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--green-main)]/12 text-[var(--green-main)]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-black text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--text-muted)]">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:pb-28">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--green-main)]">
            Visão completa da operação
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Ofertas, km vazio e resultado financeiro no mesmo app.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--text-muted)]">
            O KM One foi pensado para transformar ofertas rápidas em decisões
            claras e registrar o que acontece fora dos apps: deslocamentos sem
            passageiro, corridas particulares e valores recebidos no fechamento.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <strong className="block text-lg font-black text-white">
                Menos achismo
              </strong>
              <span className="mt-1 block leading-6 text-[var(--text-muted)]">
                Informações para avaliar ofertas e decidir por conta própria,
                sem aceite ou recusa automática.
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <strong className="block text-lg font-black text-white">
                Mais controle
              </strong>
              <span className="mt-1 block leading-6 text-[var(--text-muted)]">
                Ao finalizar uma corrida particular, adicione o valor recebido
                e envie tudo para seu controle de orçamento.
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-8 -z-10 rounded-full bg-[var(--green-main)]/16 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border-soft)] bg-white/[0.04] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.5)]">
            <img
              src={promotionalImage}
              alt="Imagem promocional do KM One com análise de ofertas e indicadores financeiros"
              className="aspect-[16/9] h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-28">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-8 -z-10 rounded-full bg-[var(--green-main)]/16 blur-3xl" />
          <img
            src={driverApp}
            alt="Motorista de aplicativo usando o KM One no celular"
            className="mx-auto w-full max-w-[27rem] rounded-[2rem] border border-[var(--border-soft)] shadow-[0_32px_90px_rgba(0,0,0,0.55)]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--green-main)]">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            Uma leitura simples para decidir antes de aceitar.
          </h2>
          <div className="mt-8 grid gap-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-[var(--green-main)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-7 text-[var(--text-muted)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(135deg,#06151C,#031014_62%,#063B2B)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[var(--green-main)]">
              Próximas versões
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              O KM One continua evoluindo para aumentar seu controle na rua.
            </h2>
          </div>
          <div className="grid gap-3">
            {roadmap.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#020B0F]/55 p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--green-main)] text-sm font-black text-[#02100A]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="baixar" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="rounded-[2rem] border border-[var(--border-soft)] bg-[radial-gradient(circle_at_top,rgba(32,242,122,0.14),transparent_36%),#081923] p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.48)] sm:p-12">
          <h2 className="text-3xl font-black text-white sm:text-5xl">Seu próximo KM começa aqui.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            O KM One já está disponível na Google Play para Android. Instale, configure
            seus parâmetros e explore a análise de ofertas, Vistas, Registros,
            deslocamentos, abastecimentos, corridas particulares e o Copiloto KM One.
          </p>
          <a href={play} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[var(--green-main)] px-8 py-4 text-base font-black text-[#02100A] transition hover:bg-white">
            Instalar KM One na Google Play <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-5 text-sm text-[var(--text-muted)]">
            A captura automática depende das permissões e das condições do aparelho.
            O KM One não aceita nem recusa corridas por você.
          </p>
        </div>
      </section>
    </div>
  );
}
