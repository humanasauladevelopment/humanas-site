import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Methodology from "@/components/Methodology";
import RemoteLearning from "@/components/RemoteLearning";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import Plans from "@/components/Plans";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Values />
        <Methodology />
        <RemoteLearning />
        <Classes />
        <Testimonials />
        <Plans />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;



