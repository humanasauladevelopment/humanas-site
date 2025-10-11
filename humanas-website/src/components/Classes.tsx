import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Wrench, Globe } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      icon: GraduationCap,
      title: "Reforço Escolar",
      description: "Apoio pedagógico para todas as disciplinas do ensino fundamental e médio",
      features: [
        "Matemática, Português, Ciências",
        "Método lúdico e personalizado",
        "Acompanhamento de notas",
        "Preparação para provas"
      ],
      color: "from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))]"
    },
    {
      icon: Target,
      title: "ENEM e Vestibulares",
      description: "Preparação intensiva para os principais processos seletivos do país",
      features: [
        "Todas as áreas do conhecimento",
        "Simulados e redação",
        "Estratégias de prova",
        "Cronograma personalizado"
      ],
      color: "from-[hsl(var(--humanas-pink))] to-[hsl(var(--humanas-purple))]",
      featured: true
    },
    {
      icon: Wrench,
      title: "Cursos Técnicos",
      description: "Preparação para vestibulares de instituições técnicas e profissionalizantes",
      features: [
        "Exatas e tecnologia",
        "Raciocínio lógico",
        "Disciplinas específicas",
        "Provas anteriores"
      ],
      color: "from-[hsl(var(--humanas-purple))] to-[hsl(var(--humanas-yellow))]"
    },
    {
      icon: Globe,
      title: "Idiomas",
      description: "Inglês e Espanhol com foco em conversação e gramática aplicada",
      features: [
        "Conversação fluente",
        "Gramática prática",
        "Preparação para certificações",
        "Cultura e imersão"
      ],
      color: "from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))]"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="aulas" className="py-20 bg-gradient-to-br from-[hsl(var(--humanas-purple)/0.05)] to-[hsl(var(--humanas-yellow)/0.05)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Aulas e Preparatórios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cobertura completa para todas as etapas da vida acadêmica, do reforço escolar à aprovação nos melhores vestibulares
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className={`card-hover p-6 text-center bg-card-gradient border-border/50 reveal relative overflow-hidden ${
                classItem.featured ? "ring-2 ring-accent ring-opacity-50 scale-105" : ""
              }`}
            >
              {classItem.featured && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Mais Procurado
                </div>
              )}

              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${classItem.color} flex items-center justify-center shadow-lg`}>
                  <classItem.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">{classItem.title}</h3>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{classItem.description}</p>

              <div className="space-y-2 mb-6 text-left mx-auto max-w-[240px]">
                {classItem.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-2 text-sm">
                    <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <span className="text-foreground leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection("contato")}
                variant={classItem.featured ? "default" : "outline"}
                className={classItem.featured ? "btn-hero w-full" : "w-full"}
              >
                Saiba mais
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
