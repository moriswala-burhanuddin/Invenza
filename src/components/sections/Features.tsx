import { motion } from 'framer-motion';
import { Box, Lock, Zap, Activity } from 'lucide-react';
import ssSales from '../../assets/ss-sales.jpeg';
import ssInventory from '../../assets/ss-inventory.jpeg';

export function Features() {
  return (
    <section id="features" className="section-pad bg-[#FFFFFF] border-y border-black/[0.04]">
      <div className="container-safe">
        
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-pro-display text-5xl md:text-7xl text-[#1D1D1F] tracking-tighter mb-6 leading-[1.05]"
            >
              Fast and <br/>
              Reliable.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#86868B] text-xl font-medium max-w-lg leading-relaxed md:pb-2"
          >
            We made an easy-to-use system that works incredibly fast for your whole team. No slow menus, just a smooth experience.
          </motion.p>
        </div>

        {/* Apple Keynote Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[340px]">
          
          {/* Card 1: Massive Feature (Span 2 Cols, 2 Rows) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2 bg-[#FAFAFA] rounded-[40px] border border-black/[0.04] p-10 lg:p-14 overflow-hidden relative group hover:shadow-subtle transition-shadow duration-500"
          >
            <div className="relative z-10 max-w-sm">
              <div className="mb-8 w-16 h-16 rounded-[24px] bg-[#FFFFFF] shadow-sm border border-black/[0.04] flex items-center justify-center">
                <Activity className="w-8 h-8 text-[#1D1D1F]" />
              </div>
              <h3 className="text-pro-display text-4xl text-[#1D1D1F] tracking-tight mb-4 leading-tight">Real-Time Updates</h3>
              <p className="text-[#86868B] text-lg font-medium leading-relaxed">
                Every sale and restock shows up on your screen instantly. You can watch your entire business happen in real time.
              </p>
            </div>
            
            {/* Embedded Screen Graphic */}
            <motion.div 
              className="absolute -bottom-10 -right-20 w-[80%] md:w-[60%] lg:w-[70%] rounded-tl-[32px] overflow-hidden border-t-8 border-l-8 border-[#FFFFFF] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] origin-bottom-right"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={ssSales} alt="Real Time Updates" className="w-full h-auto object-cover" />
            </motion.div>
          </motion.div>

          {/* Card 2: Standard Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#FAFAFA] rounded-[40px] border border-black/[0.04] p-10 overflow-hidden relative group flex flex-col hover:shadow-subtle transition-shadow duration-500"
          >
            <div className="mb-8 w-16 h-16 rounded-[24px] bg-[#FFFFFF] shadow-sm border border-black/[0.04] flex items-center justify-center">
              <Lock className="w-8 h-8 text-[#1D1D1F]" />
            </div>
            <h3 className="text-pro-display text-3xl text-[#1D1D1F] tracking-tight mb-4">Secure Data</h3>
            <p className="text-[#86868B] text-lg font-medium leading-relaxed relative z-10 flex-1">
              Your business information is locked down safely. We use top-level security to make sure your data is never lost.
            </p>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0071E3]/5 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#0071E3]/10 transition-colors duration-700" />
          </motion.div>

          {/* Card 3: Standard Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#FAFAFA] rounded-[40px] border border-black/[0.04] p-10 overflow-hidden relative hover:shadow-subtle transition-shadow duration-500"
          >
            <div className="mb-8 w-16 h-16 rounded-[24px] bg-[#FFFFFF] shadow-sm border border-black/[0.04] flex items-center justify-center">
              <Zap className="w-8 h-8 text-[#1D1D1F]" />
            </div>
            <h3 className="text-pro-display text-3xl text-[#1D1D1F] tracking-tight mb-4">Smart Predictions</h3>
            <p className="text-[#86868B] text-lg font-medium leading-relaxed">
              Our smart system looks at what you sell and warns you when you might run out of items.
            </p>
          </motion.div>

          {/* Card 4: Wide Feature (Span 2 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-[#FAFAFA] rounded-[40px] border border-black/[0.04] p-10 lg:px-14 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group hover:shadow-subtle transition-shadow duration-500"
          >
            <div className="flex-1 relative z-10">
               <div className="mb-8 w-16 h-16 rounded-[24px] bg-[#FFFFFF] shadow-sm border border-black/[0.04] flex items-center justify-center">
                <Box className="w-8 h-8 text-[#1D1D1F]" />
              </div>
              <h3 className="text-pro-display text-3xl text-[#1D1D1F] tracking-tight mb-4">Manage Multiple Locations</h3>
              <p className="text-[#86868B] text-lg font-medium leading-relaxed max-w-sm">
                Keep track of all your items across different shops and warehouses at the same time. You will never lose an item again.
              </p>
            </div>
            
            {/* Embedded Screen Graphic right side */}
            <motion.div 
               className="hidden md:block w-1/2 relative z-0 h-full origin-right"
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <img src={ssInventory} alt="Inventory Tracker" className="absolute top-1/2 -translate-y-1/2 -right-10 w-[140%] max-w-[600px] rounded-l-[24px] border-y-8 border-l-8 border-[#FFFFFF] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]" />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
