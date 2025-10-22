import { Button } from "@/components/ui/button";
import presentationVideo from "@/assets/apresentacao.mp4";

const highlights = [
  "Metodologias adaptadas para cada estudante",
  "Equipe multidisciplinar com atendimento acolhedor",
  "Planos flexíveis e acompanhamento contínuo"
];

const Presentation = () => {
  return (
    <section id="apresentacao" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border/40 bg-card/80 p-8 shadow-[0_25px_70px_rgba(111,45,189,0.15)] backdrop-blur-sm md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="flex flex-col gap-6 text-left">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Nossa essência
              </span>

              <h2 className="text-4xl font-bold leading-tight text-primary lg:text-5xl">
                Conheça a HuManas em 60 segundos
              </h2>

              <p className="text-lg text-muted-foreground">
                Descubra como criamos trilhas personalizadas unindo mentoria próxima, conteúdos atualizados e suporte
                emocional para que cada estudante avance com confiança.
              </p>

              <ul className="space-y-3 text-sm text-foreground">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/50 px-4 py-3 shadow-sm"
                  >
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[hsl(var(--humanas-yellow))]" aria-hidden="true" />
                    <span className="font-medium text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  className="rounded-full px-8 font-semibold"
                  onClick={() => {
                    const section = document.getElementById("contato");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Agendar conversa
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 font-semibold">
                  <a href={presentationVideo} download>
                    Baixar apresentação
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-xs rounded-[36px] bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.38)] via-[hsl(var(--humanas-pink)/0.28)] to-[hsl(var(--humanas-purple)/0.25)] p-3 shadow-[0_30px_70px_rgba(111,45,189,0.2)]">
                <div className="rounded-[30px] border border-white/40 bg-black/90 p-1">
                  <video
                    className="w-full rounded-[26px] border border-white/20 shadow-[0_24px_60px_rgba(111,45,189,0.28)]"
                    controls
                    preload="auto"
                    playsInline
                  >
                    <source src={presentationVideo} type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;



