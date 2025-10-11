import { useState } from "react";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      name: "Avulso",
      price: "x",
      period: "por aula",
      description: "Ideal para reforços pontuais ou testes",
      features: [
        "1 aula de 60 minutos",
        "Material didático incluso",
        "Relatório de desempenho",
        "Suporte via WhatsApp"
      ],
      highlighted: false,
      buttonText: "Agendar aula"
    },
    {
      name: "Pacotes",
      price: "x",
      period: "4 aulas",
      description: "Melhor custo-benefício para resultados consistentes",
      features: [
        "x aulas de 60 minutos",
        "Plano de estudos personalizado",
        "Material didático exclusivo",
        "Relatórios detalhados",
        "Suporte pedagógico",
        "Acompanhamento das famílias"
      ],
      highlighted: true,
      buttonText: "Escolher pacote"
    },
    {
      name: "Mensalidade",
      price: "x",
      period: "x aulas/mês",
      description: "Acompanhamento contínuo e completo",
      features: [
        "x aulas de 60 minutos",
        "Cronograma flexível",
        "Material didático completo",
        "Simulados mensais",
        "Reuniões pedagógicas",
        "Acompanhamento total",
        "Desconto em pacotes extras"
      ],
      highlighted: false,
      buttonText: "Assinar plano"
    }
  ];

  type Plan = (typeof plans)[number];

  const defaultPlanIndex = plans.findIndex((plan) => plan.highlighted);
  const [activePlanIndex, setActivePlanIndex] = useState(
    defaultPlanIndex >= 0 ? defaultPlanIndex : 0
  );
  const activePlan = plans[activePlanIndex];
  const secondaryPlan =
    activePlan?.name === "Pacotes"
      ? plans.find((plan) => plan.name === "Avulso")
      : undefined;

  const renderPlanCard = (plan: Plan) => (
    <div
      key={plan.name}
      className="w-full max-w-md rounded-3xl border border-white/40 bg-white/90 p-6 text-left shadow-[0_18px_40px_rgba(111,45,189,0.25)] backdrop-blur-xl"
    >
      <div className="mb-3 space-y-1">
        <h3 className="text-lg font-semibold text-primary">{plan.name}</h3>
        <p className="text-xs text-muted-foreground">{plan.description}</p>
      </div>
      <div className="mb-4">
        <span className="block text-2xl font-bold text-primary">R$ {plan.price}</span>
        <span className="text-xs text-muted-foreground">{plan.period}</span>
      </div>
      <ul className="space-y-2 text-xs text-foreground">
        {plan.features.map((feature, featureIndex) => (
          <li
            key={`${plan.name}-feature-${featureIndex}`}
            className="flex items-center gap-2 text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(255,16,122,0.5)]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cardsToRender = [activePlan, secondaryPlan].filter(Boolean) as Plan[];

  return (
    <section
      id="planos"
      className="py-20 bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.05)] to-[hsl(var(--humanas-pink)/0.05)]"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16 text-center reveal">
          <h2 className="mb-6 text-4xl font-bold text-primary lg:text-5xl">
            Planos e Valores
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Escolha o plano que melhor se adapta às suas necessidades e objetivos acadêmicos
          </p>
        </div>

        <div className="reveal">
          <div className="flex flex-wrap justify-center gap-4">
            {plans.map((plan, index) => {
              const isActive = index === activePlanIndex;

              return (
                <button
                  key={plan.name}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActivePlanIndex(index)}
                  className={`relative overflow-hidden rounded-full border px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "border-transparent bg-gradient-to-r from-[hsl(var(--humanas-pink)/0.75)] to-[hsl(var(--humanas-purple)/0.75)] text-white shadow-[0_0_25px_rgba(111,45,189,0.4)]"
                      : "border-white/70 bg-white/80 text-primary shadow-sm hover:bg-white hover:text-primary"
                  }`}
                >
                  <span className="relative z-10">{plan.name}</span>
                  <span
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : ""
                    }`}
                    style={{
                      background:
                        "radial-gradient(circle at 0% 0%, rgba(250, 209, 43, 0.35) 0%, transparent 55%), radial-gradient(circle at 100% 100%, rgba(255, 16, 122, 0.25) 0%, transparent 45%)"
                    }}
                  />
                </button>
              );
            })}
          </div>

          {cardsToRender.length > 0 && (
            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {cardsToRender.map((plan) => renderPlanCard(plan))}
            </div>
          )}
        </div>

        <div className="mt-28 text-center reveal">
          <p className="mb-4 text-muted-foreground">
            Dúvidas sobre os planos? Entre em contato conosco!
          </p>
          <Button
            onClick={() => scrollToSection("contato")}
            variant="outline"
            className="font-semibold"
          >
            Falar com consultor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
