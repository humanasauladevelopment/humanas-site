import { Card } from "@/components/ui/card";
import { Shield, Heart, Eye } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Metodologia comprovada com mais de 1000 alunos aprovados. Professores qualificados e processo pedagógico estruturado.",
      color: "text-[hsl(var(--humanas-purple))]"
    },
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Ambiente afetuoso que respeita o ritmo de cada estudante. Criamos vínculos que facilitam o aprendizado.",
      color: "text-[hsl(var(--humanas-pink))]"
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Relatórios detalhados de progresso, cronograma claro e comunicação direta com responsáveis e estudantes.",
      color: "text-[hsl(var(--humanas-yellow))]"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.05)] to-[hsl(var(--humanas-pink)/0.05)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossos Valores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Os pilares que sustentam nossa metodologia e garantem o sucesso de cada estudante
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="card-hover p-8 text-center bg-card-gradient border-border/50 reveal">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.1)] to-[hsl(var(--humanas-pink)/0.1)] flex items-center justify-center">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>

              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
