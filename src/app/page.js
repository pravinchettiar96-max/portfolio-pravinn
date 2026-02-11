import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Figma from '@/components/Figma';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Institutions from '@/components/Institutions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Figma />
      <Certifications />
      <Education />
      <Institutions />
      <Contact />
      <Footer />
    </div>
  );
}
