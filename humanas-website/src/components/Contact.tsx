import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá! Gostaria de mais informações sobre as aulas da HuManas.

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}
Mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/55319984062433?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para completar o contato."
    });
  };

  const handleWhatsApp = () => {
    const whatsappUrl = "https://wa.me/55319984062433?text=Olá! Gostaria de agendar uma aula experimental na HuManas.";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[hsl(var(--humanas-purple)/0.05)] to-[hsl(var(--humanas-yellow)/0.05)]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende sua aula experimental gratuita ou tire suas dúvidas. Estamos prontos para ajudar você a alcançar seus objetivos!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-hover p-8 bg-card-gradient border-border/50 reveal">
            <h3 className="text-2xl font-bold text-primary mb-6">Envie sua mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome completo *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefone *</label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(31) 99840-62433"
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu.email@exemplo.com"
                  className="rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Assunto *</label>
                <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Selecione o assunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aula-experimental">Aula experimental</SelectItem>
                    <SelectItem value="reforco-escolar">Reforço escolar</SelectItem>
                    <SelectItem value="enem-vestibular">ENEM e Vestibulares</SelectItem>
                    <SelectItem value="cursos-tecnicos">Cursos técnicos</SelectItem>
                    <SelectItem value="idiomas">Idiomas</SelectItem>
                    <SelectItem value="duvidas">Dúvidas gerais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte-nos mais sobre suas necessidades..."
                  className="rounded-lg min-h-[120px]"
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <Mail className="w-5 h-5 mr-2" />
                Enviar mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <Card className="card-hover p-8 bg-gradient-to-br from-[hsl(var(--humanas-yellow))] to-[hsl(var(--humanas-pink))] text-white reveal">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Fale conosco agora!</h3>
                <p className="mb-6 opacity-90">
                  Tire suas dúvidas ou agende sua aula experimental diretamente pelo WhatsApp
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="card-hover p-8 bg-card-gradient border-border/50 reveal">
              <h3 className="text-2xl font-bold text-primary mb-6">Outras formas de contato</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.2)] to-[hsl(var(--humanas-pink)/0.2)] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Telefone</div>
                    <div className="text-muted-foreground">(31) 99840-62433</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.2)] to-[hsl(var(--humanas-pink)/0.2)] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">contato@humanas.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--humanas-yellow)/0.2)] to-[hsl(var(--humanas-pink)/0.2)] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Atendimento</div>
                    <div className="text-muted-foreground">Online e Presencial<br />Belo Horizonte - MG</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Horário de atendimento:</strong><br />
                  Segunda a sexta: 8h às 20h<br />
                  Sábados: 8h às 14h
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
