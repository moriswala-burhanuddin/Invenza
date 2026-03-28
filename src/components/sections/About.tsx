import { motion } from 'framer-motion';
import sysfotechLogo from '../../assets/sysfotech-logo.png';
import saifeeLogo from '../../assets/saifee.png';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#FFFFFF] relative">
      <div className="container-safe flex flex-col items-center justify-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h3 className="text-[#86868B] font-bold tracking-widest uppercase text-sm mb-12">Powered By</h3>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32"
        >
          <img src={sysfotechLogo} alt="Sysfotech" className="h-12 md:h-16 w-auto" />
          <img src={saifeeLogo} alt="Saifee Digital" className="h-12 md:h-16 w-auto" />
        </motion.div>

      </div>
    </section>
  );
}
