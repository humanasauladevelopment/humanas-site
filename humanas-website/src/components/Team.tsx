import { Button } from "@/components/ui/button";

const Team = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Nossa Equipe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professores qualificados e apaixonados pela educação, prontos para transformar a jornada
            acadêmica de cada estudante
          </p>
        </div>

        <div className="text-center reveal">
          <p className="mb-4 text-muted-foreground">
            Todos os nossos professores são altamente qualificados e passam por um rigoroso processo
            de seleção
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--humanas-yellow)/0.1)] px-3 py-1 text-primary">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-[hsl(var(--humanas-yellow))]"
                aria-hidden="true"
              />
              Formação Superior
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--humanas-pink)/0.1)] px-3 py-1 text-primary">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-[hsl(var(--humanas-pink))]"
                aria-hidden="true"
              />
              Especialização Pedagógica
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--humanas-purple)/0.1)] px-3 py-1 text-primary">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-[hsl(var(--humanas-purple))]"
                aria-hidden="true"
              />
              Avaliação Contínua
            </span>
          </div>
          <Button onClick={scrollToContact} variant="outline" className="font-semibold">
            Falar com a equipe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
