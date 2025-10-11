import { Card } from "@/components/ui/card";
import laylaPhoto from "@/assets/layla.png.jpg";
import marinaPhoto from "@/assets/marina.png";

type Teacher = {
  name: string;
  formation: string;
  experience: string;
  specialty: string;
  photo?: string | null;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
};

const teachers: Teacher[] = [
  {
    name: "Layla Almeida",
    formation:
      "Licenciada em História (PUC Minas) e em Letras Português/Espanhol (Uniube). Pós-graduada em História Cultural, Literatura Afro-brasileira e Indígena (UniCesumar) e atualmente cursa Letras - Tecnologias de Edição no CEFET-MG.",
    experience: "Especialista em História, Português e Redação.",
    specialty:
      "Mentorias personalizadas em Linguagens e Ciências Humanas, com foco em desenvolvimento textual e preparação acadêmica.",
    photo: laylaPhoto
  },
  {
    name: "Marina",
    formation:
      "Graduada em Comunicação Social (UNA) e Mestre em Educação (Universidad de Costa Rica).",
    experience:
      "Especialista em Gramática da Língua Portuguesa (UFMG) e Inglesa (Università ta' Malta).",
    specialty:
      "Ensino de Português, Espanhol e Inglês para brasileiros e estrangeiros, além de preparação para vestibulares e concursos.",
    photo: marinaPhoto
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nossa Equipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professores qualificados e apaixonados pela educação, prontos para transformar a jornada acadêmica de cada estudante
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="card-hover p-6 text-center bg-card-gradient border-border/50 reveal">
              <div className="mb-6">
                {teacher.photo ? (
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-gradient-to-r from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))]">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-full shadow-lg border-4 border-gradient-to-r from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))] bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.2)] via-[hsl(var(--humanas-pink)/0.2)] to-[hsl(var(--humanas-purple)/0.2)] flex items-center justify-center text-3xl font-semibold text-primary">
                    {getInitials(teacher.name)}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-primary mb-2">
                {teacher.name}
              </h3>

              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {teacher.formation}
              </p>

              <div className="inline-block bg-gradient-to-r from-[hsl(var(--humanas-yellow)/0.1)] to-[hsl(var(--humanas-pink)/0.1)] px-3 py-1 rounded-full text-xs font-medium text-primary mb-3">
                {teacher.experience}
              </div>

              <div className="border-t border-border/50 pt-4">
                <div className="text-sm font-semibold text-accent">
                  Especialidade
                </div>
                <div className="text-sm text-foreground">
                  {teacher.specialty}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-muted-foreground mb-4">
            Todos os nossos professores são altamente qualificados e passam por um rigoroso processo de seleção
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 bg-[hsl(var(--humanas-yellow)/0.1)] text-primary px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--humanas-yellow))] animate-pulse" aria-hidden="true"></span>
              Formação Superior
            </span>
            <span className="inline-flex items-center gap-2 bg-[hsl(var(--humanas-pink)/0.1)] text-primary px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--humanas-pink))] animate-pulse" aria-hidden="true"></span>
              Especialização Pedagógica
            </span>
            <span className="inline-flex items-center gap-2 bg-[hsl(var(--humanas-purple)/0.1)] text-primary px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--humanas-purple))] animate-pulse" aria-hidden="true"></span>
              Avaliação Contínua
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
