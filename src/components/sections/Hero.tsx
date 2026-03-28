import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PlayCircle } from 'lucide-react';


import ssDashboard from '../../assets/ss-dashboard.jpeg';
import ssInventory from '../../assets/ss-inventory.jpeg';
import ssSales from '../../assets/ss-sales.jpeg';

export function Hero() {
  const { scrollY } = useScroll();

  // High-End Physics Springs for buttery smooth Apple scrolling
  const physicsY = useSpring(scrollY, { stiffness: 80, damping: 25, restDelta: 0.001 });

  // Aggressive 3D Blooming Transforms
  const rotateX = useTransform(physicsY, [0, 600], [15, 0]);
  const scaleFront = useTransform(physicsY, [0, 600], [0.95, 1.05]);

  // Background images spread out as you scroll down
  const xLeft = useTransform(physicsY, [0, 800], ['-15%', '-55%']);
  const rotateLeft = useTransform(physicsY, [0, 800], [-2, -8]);

  const xRight = useTransform(physicsY, [0, 800], ['15%', '55%']);
  const rotateRight = useTransform(physicsY, [0, 800], [2, 8]);

  const yBg = useTransform(physicsY, [0, 800], [0, -80]);

  return (
    <section className="relative min-h-[140vh] bg-[#F5F5F7] flex flex-col items-center pt-32 pb-40 overflow-hidden perspective-[2000px]">

      {/* Absolute Ambient Background Blur */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] max-w-[1400px] h-[800px] bg-gradient-to-b from-[#0071E3]/10 to-transparent blur-[120px] rounded-[100%] pointer-events-none opacity-80" />

      <div className="container-safe relative z-10 flex flex-col items-center w-full">

        {/* Supreme Typography Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12 w-full max-w-4xl"
        >
          {/* <span className="inline-block px-5 py-2 rounded-full text-[11px] font-black tracking-[0.3em] text-[#1D1D1F] uppercase mb-8 shadow-sm border border-black/[0.03] bg-white/70 backdrop-blur-md">
            The Pure Native ERP Experience
          </span> */}

          <h1 className="text-pro-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-[#1D1D1F] tracking-tighter mb-4 text-center leading-[0.95] drop-shadow-sm">
            Business, <br />
            <span className="text-gradient-brand">Simplified.</span>
          </h1>

          <p className="text-xl md:text-[28px] text-[#86868B] font-medium max-w-3xl mx-auto tracking-tight mt-10 leading-[1.3] text-balance">
            Invenza is powerful, easy-to-use software for Windows and Mac. It helps you run your business smoothly every day.
          </p>
        </motion.div>

        {/* Action Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 mb-24 md:mb-32 w-full"
        >
          <a href="#download" className="btn-brand-glow px-12 py-5 text-[15px] font-bold tracking-wide rounded-full text-white shadow-xl hover:-translate-y-1 transition-transform duration-300">
            Download for Desktop
          </a>
          <a href="#features" className="flex items-center gap-3 text-[#1D1D1F] font-bold text-[15px] tracking-wide hover:text-[#0071E3] transition-colors group">
            <PlayCircle className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" /> See how it works
          </a>
        </motion.div>

        {/* 3D Hardware Matrix Reveal */}
        <div className="relative w-full max-w-[1400px] h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] flex justify-center mt-10 perspective-[2000px]">

          {/* Back Left (Sales) */}
          <motion.div
            style={{ x: xLeft, y: yBg, rotateZ: rotateLeft }}
            className="absolute top-10 md:top-20 w-[80%] md:w-[65%] max-w-[900px] rounded-[24px] overflow-hidden border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] origin-center z-0"
          >
            <img src={ssSales} alt="Invenza Sales Interface" className="w-full h-auto object-cover" />
          </motion.div>

          {/* Back Right (Inventory) */}
          <motion.div
            style={{ x: xRight, y: yBg, rotateZ: rotateRight }}
            className="absolute top-5 md:top-10 w-[85%] md:w-[70%] max-w-[950px] rounded-[24px] overflow-hidden border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] origin-center z-10"
          >
            <img src={ssInventory} alt="Invenza Inventory Interface" className="w-full h-auto object-cover" />
          </motion.div>

          {/* Front Center 3D Plate (Dashboard) */}
          <motion.div
            style={{ rotateX, scale: scaleFront, transformStyle: 'preserve-3d' }}
            className="absolute z-20 w-[95%] md:w-[85%] max-w-[1200px] rounded-[32px] overflow-hidden border-[8px] border-[#ECECEC] bg-[#FFFFFF] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 origin-bottom"
          >
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[24px] pointer-events-none z-30" />
            <img src={ssDashboard} alt="Invenza Dashboard" className="w-full h-auto object-cover block" />

            {/* Glossy glare overlay across screen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none z-20" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
