
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import FeaturedProjects from "../components/home/FeaturedProjects";
import TechStack from "../components/home/TechStack";
import Process from "../components/home/Process";
import WhyWorkWithMe from "../components/home/WhyWorkWithMe";
import CTA from "../components/home/CTA";

import AboutIntro from "../components/about/AboutIntro";
import Experience from "../components/about/Experience";
import Skills from "../components/about/Skills";

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main>
        <Hero />

        <Services />

        <FeaturedProjects />

        <TechStack />

        <Process />

        <AboutIntro />

        <Experience />

        <Skills />

        <WhyWorkWithMe />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default Home;

