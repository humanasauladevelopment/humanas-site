import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import LogoHumanas from "@/assets/logo-humanas.png";

const sections = [
  {
    title: "1. Aceitação dos termos",
    content: [
      "Ao acessar o site ou contratar os serviços da HuManas, você declara ter lido, compreendido e concordado com os termos a seguir.",
      "Caso não concorde com algum ponto, recomendamos interromper o uso do site e entrar em contato para esclarecimentos."
    ]
  },
  {
    title: "2. Quem somos",
    content: [
      "A HuManas oferece aulas particulares e programas personalizados para estudantes do ensino fundamental, médio e preparatórios.",
      "Nossos serviços incluem aulas presenciais e on-line, acompanhamento pedagógico, mentoria e suporte para responsáveis."
    ]
  },
  {
    title: "3. Uso do site",
    content: [
      "O site disponibiliza informações institucionais, conteúdos informativos e formulários de contato.",
      "Você se compromete a utilizar as funcionalidades de forma lícita, respeitando a imagem da HuManas e a integridade de outros usuários."
    ]
  },
  {
    title: "4. Cadastro e comunicação",
    content: [
      "Para receber atendimento, poderemos solicitar dados básicos como nome, e-mail, telefone e informações sobre o estudante.",
      "Ao informar seus dados, você autoriza o contato por e-mail, telefone ou aplicativos de mensagem para dar continuidade ao atendimento."
    ]
  },
  {
    title: "5. Pagamentos e planos",
    content: [
      "Os valores, modalidades de pagamento e políticas de reembolso são apresentados durante a contratação de nossos serviços.",
      "Reservamo-nos o direito de atualizar planos e tabelas de preço, sempre comunicando claramente clientes ativos antes da alteração entrar em vigor."
    ]
  },
  {
    title: "6. Compromissos dos estudantes e responsáveis",
    content: [
      "O estudante deve manter pontualidade, respeito aos profissionais e comprometimento com os materiais enviados.",
      "Responsáveis se comprometem a manter seus dados atualizados e informar sobre mudanças relevantes que possam impactar o atendimento."
    ]
  },
  {
    title: "7. Propriedade intelectual",
    content: [
      "Todo o conteúdo disponibilizado pela HuManas, incluindo materiais didáticos, textos, imagens e marcas, pertence à HuManas ou a parceiros devidamente autorizados.",
      "Não é permitido copiar, distribuir ou utilizar qualquer material sem autorização prévia e por escrito."
    ]
  },
  {
    title: "8. Cancelamentos e reagendamentos",
    content: [
      "Reagendamentos devem ser solicitados com antecedência mínima de 12 horas. Aulas canceladas fora deste prazo poderão ser consideradas como realizadas.",
      "Políticas específicas podem ser negociadas em contrato individual, respeitando as regras aprovadas no ato da adesão."
    ]
  },
  {
    title: "9. Proteção de dados",
    content: [
      "Tratamos seus dados pessoais conforme nossa Política de Privacidade.",
      "Reforçamos o compromisso com a segurança e o tratamento transparente das informações compartilhadas."
    ]
  },
  {
    title: "10. Contato",
    content: [
      "Em caso de dúvidas sobre estes termos ou sobre qualquer serviço oferecido, entre em contato pelo e-mail souhumanasbh@gmail.com."
    ]
  }
];

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="relative isolate bg-gradient-to-br from-[hsl(var(--humanas-purple)/0.15)] via-[hsl(var(--humanas-pink)/0.12)] to-[hsl(var(--humanas-yellow)/0.15)]">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ background: "var(--soft-gradient)" }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
            Voltar para a página inicial
          </Link>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Informações legais</p>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl text-primary">Termos de Uso</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Este documento apresenta as condições para utilizar nossos serviços, plataformas e materiais. Recomendamos a leitura atenta de cada seção.
              </p>
              <p className="mt-6 text-sm text-muted-foreground/80">Atualizado em 04/10/2025</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-primary/10 backdrop-blur">
                <img src={LogoHumanas} alt="HuManas" className="h-16 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto w-full max-w-5xl flex-1 px-6 sm:px-8 lg:px-12 -mt-12 pb-20">
        <div className="rounded-3xl border border-border/60 bg-white/95 p-8 shadow-xl backdrop-blur">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-border/70">
                <h2 className="text-2xl font-semibold text-primary">{section.title}</h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  {section.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
            <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-border/70">
              <h2 className="text-2xl font-semibold text-primary">Política de Privacidade</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Para entender como coletamos, armazenamos e protegemos dados pessoais, consulte a nossa{" "}
                <Link to="/politica-de-privacidade" className="text-primary underline hover:text-accent">
                  Política de Privacidade
                </Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;




