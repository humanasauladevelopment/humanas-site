import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const googleReviews = [
  {
    name: "Bárbara Melane",
    headline: "5,0 ★ Google Reviews",
    rating: 5,
    text:
      "Marina foi extremamente necessária para minha aprovação em uma prova. Boas aulas, preço adequado e excelência na qualidade. Indico para todos!",
    response: "Ficamos muito felizes com sua satisfação e sucesso, Bárbara :)"
  },
  {
    name: "Melissa Maia",
    headline: "5,0 ★ Google Reviews",
    rating: 5,
    text: "Uma empresa top, me ajudou demais!!!",
    response: null
  }
];

const writingResults = [
  {
    name: "Carol – Sto Agostinho Centro",
    score: 960,
    exam: "Redação ENEM",
    text:
      "Em menos de um ano, minhas redações semanais ajudaram a controlar o tempo de escrita, ampliar repertório e me prepararam para qualquer tema. Resultado: 960 no Enem." 
  },
  {
    name: "Luiza – BH",
    score: 940,
    exam: "Redação ENEM",
    text:
      "Comecei com a Layla no início do ano e saí de 800 para 940. Aprendi a atualizar repertório, manter constância nas redações e cheguei ao Enem segura para tirar uma nota alta." 
  },
  {
    name: "Rafaela – Sto Agostinho Centro",
    score: 920,
    exam: "Redação ENEM",
    text:
      "As aulas mostraram como aproveitar repertório sociocultural e conectar argumentos. Passei em Odontologia na UFMG e alcancei 920 na redação." 
  },
  {
    name: "Helena – Marista BH",
    score: 880,
    exam: "Redação ENEM",
    text:
      "As discussões sobre temas e estrutura me ajudaram durante todo o ensino médio. Atingi 880 na redação e consegui aprovação em uma universidade federal." 
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Feedbacks & Resultados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de estudantes que cresceram com a HuManas: avaliações do Google e notas de redação que enchem a gente de orgulho.
          </p>
        </div>

        <div className="space-y-16">
          <div className="space-y-6 reveal">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(var(--humanas-purple))] text-center lg:text-left">
              Avaliações no Google
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {googleReviews.map((review) => (
                <Card
                  key={review.name}
                  className="relative overflow-hidden border border-border/40 bg-card-gradient p-8 shadow-[0_20px_60px_rgba(111,45,189,0.15)]"
                >
                  <div className="absolute top-6 right-6 text-[hsl(var(--humanas-yellow))]/40">
                    <Quote className="h-12 w-12" />
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-lg font-semibold text-primary">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.headline}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star
                          key={`${review.name}-star-${index}`}
                          className="h-4 w-4 fill-[hsl(var(--humanas-yellow))] text-[hsl(var(--humanas-yellow))]"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">“{review.text}”</p>

                  {review.response ? (
                    <div className="mt-4 rounded-lg bg-[hsl(var(--humanas-purple)/0.08)] p-3 text-xs text-primary">
                      <span className="font-semibold">Resposta da HuManas: </span>
                      {review.response}
                    </div>
                  ) : null}
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6 reveal">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[hsl(var(--humanas-yellow))] text-center lg:text-left">
              Resultados de redação
            </h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {writingResults.map((result) => (
                <Card
                  key={result.name}
                  className="border border-border/40 bg-white/95 p-6 shadow-[0_18px_50px_rgba(111,45,189,0.18)]"
                >
                  <div className="mb-4 flex items-baseline justify-between gap-4">
                    <div>
                      <div className="text-[2.75rem] font-black text-[hsl(var(--humanas-pink))] leading-none">
                        {result.score}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[hsl(var(--humanas-purple))]">
                        {result.exam}
                      </div>
                    </div>
                    <div className="max-w-[60%] text-right text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {result.name}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{result.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



