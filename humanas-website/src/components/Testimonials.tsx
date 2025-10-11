import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lorem Ipsum",
      role: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      rating: 5,
      subject: "Lorem ipsum"
    },
    {
      name: "Lorem Ipsum",
      role: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      rating: 5,
      subject: "Lorem ipsum"
    },
    {
      name: "Lorem Ipsum",
      role: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      rating: 5,
      subject: "Lorem ipsum"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            O que dizem sobre nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de famílias e estudantes que transformaram seus resultados com a HuManas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover p-8 bg-card-gradient border-border/50 reveal relative">
              <div className="absolute top-6 right-6 text-[hsl(var(--humanas-yellow))] opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[hsl(var(--humanas-yellow))] text-[hsl(var(--humanas-yellow))]" />
                ))}
              </div>

              {/* Subject Badge */}
              <div className="inline-block bg-gradient-to-r from-[hsl(var(--humanas-yellow)/0.1)] to-[hsl(var(--humanas-pink)/0.1)] px-3 py-1 rounded-full text-sm font-medium text-primary mb-4">
                {testimonial.subject}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
