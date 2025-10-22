import LogoHumanas from "@/assets/logo-humanas.png";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import type { SVGProps } from "react";

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M9.75 0C9.336 0 9 .336 9 .75v11.829c-.46-.132-.942-.2-1.431-.201A4.569 4.569 0 0 0 3 16.95 4.569 4.569 0 0 0 7.569 21.52c2.493 0 4.57-2.017 4.57-4.51V8.366c1.307.863 2.86 1.34 4.445 1.34.414 0 .75-.336.75-.75V5.25a.75.75 0 0 0-.69-.747c-1.427-.087-2.775-.79-3.628-1.89C12.812 1.423 12.75.74 12.75 0H9.75Zm.75 8.918v8.092c0 1.674-1.35 3.01-3.033 3.01a3.07 3.07 0 0 1-3.07-3.07 3.07 3.07 0 0 1 3.07-3.07c.358 0 .708.066 1.033.195A.75.75 0 0 0 9.75 13V8.918Z" />
  </svg>
);

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
                href="https://www.instagram.com/aulashumanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@humanas_aulas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <TiktokIcon className="h-5 w-5" />
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


