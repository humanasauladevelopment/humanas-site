import { Card } from "@/components/ui/card";
import { Laptop, Users, Clock } from "lucide-react";

const RemoteLearning = () => {
  const highlights = [
    {
      icon: Laptop,
      title: "Para estudantes",
      description: "Aulas ao vivo com recursos interativos, gravações disponíveis e materiais compartilhados em tempo real para estudar no seu ritmo."
    },
    {
      icon: Users,
      title: "Para famílias",
      description: "Acompanhe relatórios, combine horários flexíveis e participe de encontros virtuais sempre que precisar alinhar estratégias."
    },
    {
      icon: Clock,
      title: "Para professores",
      description: "Planejamento otimizado, ferramentas colaborativas e feedback contínuo para personalizar cada encontro."
    }
  ];

  return (
    <section id="ead" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Por que o nosso EAD funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A HuManas nasceu no online e comprova todos os dias que o ensino a distncia pode ser humano, acolhedor e eficiente para quem ensina, acompanha e aprende.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="card-hover p-8 text-center bg-card-gradient border-border/50 reveal">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.2)] to-[hsl(var(--humanas-pink)/0.2)] flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemoteLearning;



