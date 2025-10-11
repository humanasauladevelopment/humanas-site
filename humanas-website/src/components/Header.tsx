import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHumanas from "@/assets/logo-humanas.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoHumanas}
              alt="HuManas"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: "Metodologia", id: "metodologia" },
              { label: "Aulas", id: "aulas" },
              { label: "Planos", id: "planos" },
              { label: "Equipe", id: "equipe" },
              { label: "Depoimentos", id: "depoimentos" },
              { label: "Contato", id: "contato" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection("contato")}
              className="btn-hero"
            >
              Agendar aula experimental
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {[
                { label: "Metodologia", id: "metodologia" },
                { label: "Aulas", id: "aulas" },
                { label: "Planos", id: "planos" },
                { label: "Equipe", id: "equipe" },
                { label: "Depoimentos", id: "depoimentos" },
                { label: "Contato", id: "contato" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-accent transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("contato")}
                className="btn-hero w-full mt-4"
              >
                Agendar aula experimental
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
