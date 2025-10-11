import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import LogoHumanas from "@/assets/logo-humanas.png";

type Section = {
  title: string;
  content: string[];
  items?: string[];
};

const sections: Section[] = [
  {
    title: "1. Introdução",
    content: [
      "A HuManas preza pela proteção e transparência no uso dos dados pessoais de estudantes, responsáveis e interessados.",
      "Esta Política explica como coletamos, utilizamos e protegemos as informações compartilhadas conosco."
    ]
  },
  {
    title: "2. Dados que coletamos",
    content: [
      "Coletamos dados fornecidos voluntariamente por meio de formulários, atendimentos e interações diretas com nossa equipe."
    ],
    items: [
      "Dados de identificação como nome completo e CPF quando necessário para emissão de documentos.",
      "Informações de contato, incluindo e-mail, telefone e endereço.",
      "Dados acadêmicos como série, instituição de ensino, disciplinas de interesse e objetivos educacionais.",
      "Histórico de interações, atendimentos realizados e registros pedagógicos relevantes."
    ]
  },
  {
    title: "3. Como utilizamos os dados",
    content: [
      "Utilizamos os dados para personalizar o atendimento, estruturar planos de estudo, enviar comunicações e cumprir obrigações legais."
    ],
    items: [
      "Criar propostas pedagógicas alinhadas ao perfil do estudante.",
      "Realizar agendamentos, confirmações de aula e acompanhamentos.",
      "Enviar materiais complementares, notícias e atualizações sobre nossos serviços.",
      "Produzir indicadores internos que auxiliem na melhoria contínua da nossa metodologia."
    ]
  },
  {
    title: "4. Compartilhamento de informações",
    content: [
      "Somente compartilhamos dados pessoais quando necessário para executar nossos serviços ou para cumprir obrigações legais.",
      "Nossos parceiros e fornecedores são orientados a seguir o mesmo padrão de segurança adotado pela HuManas."
    ]
  },
  {
    title: "5. Direitos dos titulares",
    content: [
      "Você pode solicitar a qualquer momento informações sobre seus dados pessoais, bem como exercer os direitos assegurados pela legislação vigente."
    ]
  },
  {
    title: "6. Armazenamento e segurança",
    content: [
      "Aplicamos práticas administrativas e técnicas para manter os dados armazenados de forma segura, com acesso restrito a profissionais autorizados.",
      "Os dados são mantidos apenas pelo tempo necessário para cumprir as finalidades descritas e para atender obrigações legais."
    ]
  },
  {
    title: "7. Uso de cookies",
    content: [
      "Utilizamos cookies estritamente necessários para analisar o desempenho do site e melhorar sua experiência.",
      "Você pode ajustar as configurações do navegador para limitar ou bloquear cookies, o que pode impactar algumas funcionalidades."
    ]
  },
  {
    title: "8. Atualizações desta política",
    content: [
      "Podemos atualizar este documento para refletir melhorias em nossas práticas de privacidade.",
      "Sempre que houver alteração relevante, a nova versão será publicada neste espaço com a data da última revisão."
    ]
  },
  {
    title: "9. Contato",
    content: [
      "Se restarem dúvidas ou caso deseje exercer algum direito relacionado aos seus dados, fale conosco pelo e-mail privacidade@humanas.com.br."
    ]
  }
];

const rights = [
  "Confirmar a existência de tratamento.",
  "Solicitar acesso, correção ou atualização de dados.",
  "Solicitar a portabilidade dos dados a outro fornecedor de serviços.",
  "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.",
  "Revogar o consentimento quando o tratamento tiver sido baseado nessa base legal."
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="relative isolate bg-gradient-to-br from-[hsl(var(--humanas-pink)/0.15)] via-[hsl(var(--humanas-yellow)/0.12)] to-[hsl(var(--humanas-purple)/0.15)]">
        <div className="absolute inset-0 -z-10 opacity-25" style={{ background: "var(--soft-gradient)" }} />
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <Link to="/" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors">
            Voltar para a página inicial
          </Link>
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Informações legais</p>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl text-primary">Política de Privacidade</h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Saiba como tratamos os dados pessoais confiados à HuManas e quais são os seus direitos enquanto titular das informações.
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
                  {section.items && (
                    <ul className="mt-4 space-y-2 list-disc pl-6">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-border/70">
              <h2 className="text-2xl font-semibold text-primary">Seus direitos garantidos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Em conformidade com a legislação brasileira de proteção de dados, você pode exercer os seguintes direitos:
              </p>
              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {rights.map((item) => (
                  <li key={item} className="rounded-xl border border-border/60 bg-white px-4 py-3 text-sm text-muted-foreground shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-border/70">
              <h2 className="text-2xl font-semibold text-primary">Termos de uso relacionados</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Para detalhes sobre responsabilidades, serviços e condições comerciais, acesse nossos{" "}
                <Link to="/termos-de-uso" className="text-primary underline hover:text-accent">
                  Termos de Uso
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

export default PrivacyPolicy;
