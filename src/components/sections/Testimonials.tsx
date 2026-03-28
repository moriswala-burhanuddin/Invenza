import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Invenza completely changed how we manage our 12 warehouses. It is extremely fast, smooth, and very easy to use.',
    author: 'Elena Rodriguez',
    role: 'COO — Nexus Manufacturing',
  },
  {
    quote: 'Our team learned how to use it in hours, not weeks. The design is beautiful and makes everyone’s job so much easier.',
    author: 'Marcus Chen',
    role: 'Director of Ops — Velo Retail',
  },
  {
    quote: 'We set it up in just two days. The real-time dashboard showed us important business insights we had never seen before.',
    author: 'Sarah Jenkins',
    role: 'CTO — Horizon Logistics',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-[#FAFAFA]">
      <div className="container-safe">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-pro-display text-4xl md:text-6xl text-[#1D1D1F] tracking-tighter mb-6 relative inline-block">
            <span className="relative z-10">Loved by Business Leaders.</span>
            <div className="absolute -bottom-2 inset-x-0 h-1/2 bg-[#0071E3]/10 blur-2xl -z-10" />
          </h2>
          <p className="text-[#86868B] text-xl font-medium max-w-2xl mx-auto">
            See what people rely on every day to run their companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative flex flex-col"
            >
              <Quote className="w-12 h-12 text-[#D2D2D7] mb-6" />
              <p className="text-2xl font-semibold text-[#1D1D1F] tracking-tight leading-snug mb-10 flex-1">
                "{t.quote}"
              </p>
              <div>
                <div className="text-[#1D1D1F] font-bold tracking-tight text-lg">{t.author}</div>
                <div className="text-[#86868B] font-medium text-sm mt-1 uppercase tracking-wider">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
