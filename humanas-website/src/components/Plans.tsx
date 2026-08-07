import { useState } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Aulas Avulsas",
    description: "Perfeito para reforços pontuais, revisão rápida ou teste de metodologia.",
    highlighted: false,
    buttonText: "Agendar aula"
  },
  {
    name: "Pacotes Presenciais",
    description: "Acompanhamento contínuo com presença e proximidade para quem precisa de rotina.",
    highlighted: true,
    buttonText: "Contratar presencial"
  },
  {
    name: "Pacotes Online",
    description: "Mesma mentoria, com flexibilidade total e materiais digitais organizados.",
    highlighted: false,
    buttonText: "Contratar online"
  }
];

type Plan = (typeof plans)[number];

const defaultPlanIndex = plans.findIndex((plan) => plan.highlighted);

const Plans = () => {
  const [activePlanIndex, setActivePlanIndex] = useState(
    defaultPlanIndex >= 0 ? defaultPlanIndex : 0
  );
  const activePlan = plans[activePlanIndex];
  const secondaryPlan =
    activePlan?.name === "Pacotes Presenciais"
      ? plans.find((plan) => plan.name === "Aulas Avulsas")
      : undefined;

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
            Planos e Formatos
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Conheça nossos formatos presenciais e online e escolha a melhor combinação para sua
            rotina.
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
              {cardsToRender.map((plan) => (
                <div
                  key={plan.name}
                  className={`w-full max-w-md rounded-3xl border border-white/40 bg-white/90 p-6 text-left shadow-[0_18px_40px_rgba(111,45,189,0.25)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(111,45,189,0.35)] ${
                    plan.highlighted ? "border-[hsl(var(--humanas-pink))]" : ""
                  }`}
                >
                  <div className="mb-3 space-y-1">
                    <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="mb-4">
                    <span className="block text-base font-semibold text-primary">Valores sob consulta</span>
                    <span className="block text-xs text-muted-foreground">
                      Para saber preços, entre em contato
                    </span>
                  </div>
                  <Button
                    className="mt-6 w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    onClick={() => scrollToSection("contato")}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-28 text-center reveal">
          <p className="mb-4 text-muted-foreground">
            Quer personalizar um plano? Entre em contato com a nossa equipe pedagógica.
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
