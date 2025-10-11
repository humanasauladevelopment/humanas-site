import { Instagram, Youtube } from "lucide-react";
import LogoHumanas from "@/assets/logo-humanas.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center space-x-3 md:justify-start">
              <img src={LogoHumanas} alt="Logo HuManas" className="h-10 w-auto" />
              <span className="text-2xl font-bold">HuManas</span>
            </div>
            <p className="max-w-md text-primary-foreground/80">
              Transformando vidas por meio da educação personalizada. Aulas particulares que realmente fazem a diferença.
            </p>
          </div>

          <div className="text-center">
            <h3 className="mb-4 font-semibold">Siga-nos</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com/humanas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@humanas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="mb-4 font-semibold">Informações Legais</h3>
            <div className="space-y-2">
              <Link
                to="/termos-de-uso"
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Termos de Uso
              </Link>
              <Link
                to="/politica-de-privacidade"
                className="block text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            {new Date().getFullYear()} HuManas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
