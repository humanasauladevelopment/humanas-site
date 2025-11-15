import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen, Calculator, Atom, Globe2, Palette } from "lucide-react";

const subjectFrames = [
  {
    title: "Matemática",
    icon: Calculator,
    accent: "Fórmulas em ação",
    accentGradient: "from-[#FDE68A] via-[#FB7185] to-[#C026D3]",
    tags: ["Álgebra", "Geometria"]
  },
  {
    title: "Ciências da Natureza",
    icon: Atom,
    accent: "Experimentos",
    accentGradient: "from-[#A5F3FC] via-[#38BDF8] to-[#6366F1]",
    tags: ["Biologia", "Química", "Física"]
  },
  {
    title: "Ciências humanas",
    icon: Globe2,
    accent: "Debates guiados",
    accentGradient: "from-[#F9A8D4] via-[#F472B6] to-[#C084FC]",
    tags: ["História", "Geografia", "Atualidades"]
  },
  {
    title: "Linguagens & artes",
    icon: Palette,
    accent: "Expressão criativa",
    accentGradient: "from-[#FDE68A] via-[#FBBF24] to-[#F97316]",
    tags: ["Redação", "Literatura", "Português"]
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeFrame = activeIndex !== null ? subjectFrames[activeIndex] : null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pb-24 lg:pt-32 lg:min-h-screen">
      <div className="hero-gradient absolute inset-0">
        <div className="floating-radial" />
        <div className="floating-radial" />
        <div className="floating-radial" />
      </div>

      <div className="container relative mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="text-background text-center lg:text-left">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Badge
                variant="secondary"
                className="border-primary/20 bg-background/20 text-primary backdrop-blur-sm"
              >
                <Star className="mr-1 h-4 w-4" />
                Centenas de alunos aprovados
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 bg-background/20 text-primary backdrop-blur-sm"
              >
                <Users className="mr-1 h-4 w-4" />
                Professores especializados
              </Badge>
              <Badge
                variant="secondary"
                className="border-primary/20 bg-background/20 text-primary backdrop-blur-sm"
              >
                <BookOpen className="mr-1 h-4 w-4" />
                Metodologia exclusiva
              </Badge>
            </div>

            <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
              Aulas que{" "}
              <span className="bg-gradient-to-r from-background via-[hsl(var(--humanas-yellow))] to-background bg-clip-text text-transparent">
                transformam
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-xl text-background/90 lg:mx-0 lg:text-2xl">
              Metodologia personalizada que conecta ensino e emoção. Desperte o potencial único de cada estudante com aulas particulares que realmente funcionam.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                onClick={() => scrollToSection("contato")}
                size="lg"
                className="rounded-full bg-background px-8 py-4 font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-background/90 hover:shadow-xl"
              >
                Sou responsável
              </Button>
              <Button
                onClick={() => scrollToSection("contato")}
                variant="outline"
                size="lg"
                className="rounded-full bg-background/10 px-8 py-4 font-semibold text-background backdrop-blur-sm transition-all duration-300 hover:bg-background/20"
              >
                Sou estudante
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="flex w-full max-w-3xl flex-col gap-6 sm:gap-8">
              <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
                {subjectFrames.map((frame, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={frame.title}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                      className={`relative w-full overflow-hidden rounded-full border px-4 py-2 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.12em] transition-all duration-300 sm:px-5 sm:text-[0.7rem] lg:px-6 lg:text-xs ${
                        isActive
                          ? "border-transparent bg-gradient-to-r from-[hsl(var(--humanas-pink)/0.75)] to-[hsl(var(--humanas-purple)/0.75)] text-white shadow-[0_0_25px_rgba(111,45,189,0.4)]"
                          : "border-white/70 bg-white/80 text-primary shadow-sm hover:bg-white hover:text-primary"
                      }`}
                    >
                      <span className="relative z-10 block whitespace-normal">{frame.title}</span>
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

              {activeFrame ? (
                <div className="w-full rounded-3xl border border-white/40 bg-white/90 p-5 text-left text-foreground shadow-[0_20px_60px_rgba(111,45,189,0.25)] backdrop-blur-xl sm:p-6">
                  {(() => {
                    const ActiveIcon = activeFrame.icon;
                    return (
                      <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
                        <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${activeFrame.accentGradient} text-white shadow-[0_12px_24px_rgba(111,45,189,0.25)]`}>
                          <ActiveIcon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                            {activeFrame.accent}
                          </span>
                          <h4 className="text-base font-semibold text-primary">
                            {activeFrame.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeFrame.tags.map((tag) => (
                      <span
                        key={`${activeFrame.title}-${tag}`}
                        className="rounded-full bg-muted/80 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex w-full flex-col items-center justify-center gap-2 rounded-3xl border border-white/30 border-dashed bg-white/10 p-6 text-center text-white/80 backdrop-blur-sm">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Selecione uma área
                  </span>
                  <p className="max-w-xs text-xs leading-relaxed">
                    Clique em uma das opções acima para conhecer os focos de aprendizado e exemplos de conteúdos trabalhados.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




