import ScrollProgress from "@/components/layout/scroll-progress";
import ManifestoFlow from "@/components/effects/manifesto-flow";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <main className="bg-background relative">

        <Hero />

        <div className="relative z-10 bg-background border-t border-border">

          <section id="about">
            <About />
          </section>

          <ManifestoFlow />

          <section id="experience">
            <Experience />
          </section>

          <ManifestoFlow reverse />

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </div>

      </main >
    </>
  );
}
