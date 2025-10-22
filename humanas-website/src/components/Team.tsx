import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRightLeft, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import laylaPhoto from "@/assets/layla.jpg";
import marinaPhoto from "@/assets/marina.png";
import joycePhoto from "@/assets/joyce.png";

type Teacher = {
  name: string;
  formation: string;
  experience: string;
  specialty: string;
  summary?: string;
  photo?: string | null;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

const teachers: Teacher[] = [
  {
    name: "Layla Almeida",
    summary: "Historiadora e mentora com foco em metodologias inclusivas.",
    formation:
      "Graduada em História (PUC MG). Especialista em História, Cultura e Literatura Afro-brasileira e indígena (UniCesumar). Graduanda em Letras Português/Espanhol (Universidade de Uberaba).",
    experience: "Mais de 10 anos de experiência na Educação Básica e em preparatórios.",
    specialty:
      "Ensino de História e Linguagens, apoio em redação e pesquisa histórica para vestibulares e processos seletivos do ensino médio.",
    photo: laylaPhoto
  },
  {
    name: "Marina Costa",
    summary: "Educadora linguística com repertório internacional.",
    formation:
      "Graduada em Comunicação Social (UNA) e Mestre em Educação (Universidad de Costa Rica). Especialista em Gramática da Língua Portuguesa (UFMG) e Inglesa (Università ta' Malta).",
    experience:
      "Experiência com produção textual, gramática aplicada, comunicação e projetos acadêmicos.",
    specialty:
      "Redação e interpretação de textos, análise de gramática, acompanhamento dos anos escolares e preparação para concursos.",
    photo: marinaPhoto
  },
  {
    name: "Joyce Andrade",
    summary: "Engenheira e professora que conecta raciocínio científico e comunicação bilíngue.",
    formation:
      "Graduada em Engenharia Mecânica (CEFET-MG). Graduanda em Letras (CEFET-MG). Certificado de Proficiência em Língua Inglesa C1 (Cambridge University).",
    experience: "Docência em Física desde 2022 e Língua Inglesa desde 2018.",
    specialty:
      "Aulas de Física aplicadas ao cotidiano e Inglês acadêmico com foco em certificações e mobilidade internacional.",
    photo: joycePhoto
  }
];

const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Nossa Equipe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professores qualificados e apaixonados pela educação, prontos para transformar a jornada acadêmica de cada estudante
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="-ml-4">
            {teachers.map((teacher) => (
              <CarouselItem key={teacher.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="card-hover h-full p-6 text-center bg-card-gradient border-border/40 shadow-lg">
                  <div className="mb-6">
                    {teacher.photo ? (
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-gradient-to-r from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))]">
                        <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-gradient-to-r from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))] bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.2)] via-[hsl(var(--humanas-pink)/0.2)] to-[hsl(var(--humanas-purple)/0.2)] flex items-center justify-center text-3xl font-semibold text-primary">
                        {getInitials(teacher.name)}
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-primary">{teacher.name}</h3>
                  {teacher.summary ? (
                    <p className="text-muted-foreground text-sm mt-1 mb-4 leading-relaxed">{teacher.summary}</p>
                  ) : null}

                  <div className="space-y-3 text-left text-sm">
                    <CurriculumLine icon={GraduationCap} label="Formação" text={teacher.formation} variant="yellow" />
                    <CurriculumLine icon={Briefcase} label="Experiência" text={teacher.experience} variant="pink" />
                    <CurriculumLine icon={Sparkles} label="Como posso ajudar" text={teacher.specialty} variant="purple" />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground md:hidden">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <ArrowRightLeft className="h-4 w-4" />
          </span>
          <span>Arraste para ver mais professores</span>
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

type CurriculumLineProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  text: string;
  variant?: "yellow" | "pink" | "purple";
};

const colorStyles = {
  yellow: {
    bg: "bg-[hsl(var(--humanas-yellow)/0.12)]",
    border: "border-[hsl(var(--humanas-yellow)/0.3)]",
    text: "text-[hsl(var(--humanas-yellow))]"
  },
  pink: {
    bg: "bg-[hsl(var(--humanas-pink)/0.12)]",
    border: "border-[hsl(var(--humanas-pink)/0.3)]",
    text: "text-[hsl(var(--humanas-pink))]"
  },
  purple: {
    bg: "bg-[hsl(var(--humanas-purple)/0.12)]",
    border: "border-[hsl(var(--humanas-purple)/0.3)]",
    text: "text-[hsl(var(--humanas-purple))]"
  }
} as const;

const CurriculumLine = ({ icon: Icon, label, text, variant = "purple" }: CurriculumLineProps) => {
  const palette = colorStyles[variant];

  return (
    <div className={`rounded-xl border ${palette.border} ${palette.bg} p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
      <div className={`mb-1.5 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${palette.text}`}>
        <Icon className="h-3.5 w-3.5" />
        <span>{label}</span>
      </div>
      <p className="text-muted-foreground leading-snug text-sm">{text}</p>
    </div>
  );
};
