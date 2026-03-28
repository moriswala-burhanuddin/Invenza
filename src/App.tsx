import { Navbar }       from './components/layout/Navbar';
import { Hero }         from './components/sections/Hero';
import { About }        from './components/sections/About';
import { Features }     from './components/sections/Features';
import { Testimonials } from './components/sections/Testimonials';
import { Download }     from './components/sections/Download';
import { Contact }      from './components/sections/Contact';
import { Footer }       from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1D1D1F] overflow-x-hidden selection:bg-[#0071E3]/20 selection:text-[#1D1D1F]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
