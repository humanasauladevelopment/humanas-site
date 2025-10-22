import { Card } from "@/components/ui/card";
import { Search, FileText, TrendingUp } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico",
      description: "Avaliação completa do perfil de aprendizagem, identificando pontos fortes, dificuldades e objetivos específicos do estudante.",
      details: [
        "Teste de conhecimentos",
        "Análise do perfil de aprendizagem",
        "Definição de metas personalizadas"
      ]
    },
    {
      number: "02",
      icon: FileText,
      title: "Plano Personalizado",
      description: "Criação de cronograma exclusivo com metodologia adaptada, material didático selecionado e estratégias específicas.",
      details: [
        "Cronograma flexível",
        "Material didático personalizado",
        "Estratégias pedagógicas específicas"
      ]
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Acompanhamento",
      description: "Monitoramento contínuo do progresso com relatórios detalhados, ajustes na metodologia e feedback constante.",
      details: [
        "Relatórios de progresso",
        "Ajustes metodológicos",
        "Feedback contínuo"
      ]
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossa Metodologia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo estruturado em 3 etapas que garante resultados efetivos e duradouros
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`reveal flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 text-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(var(--humanas-yellow))] via-[hsl(var(--humanas-pink))] to-[hsl(var(--humanas-purple))] flex items-center justify-center shadow-lg">
                    <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
                      <step.icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>

              <Card className="card-hover flex-1 p-8 bg-card-gradient border-border/50">
                <h3 className="text-3xl font-bold text-primary mb-4">{step.title}</h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-foreground font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;



