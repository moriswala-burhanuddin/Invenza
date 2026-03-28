import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Globe } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#FFFFFF] overflow-hidden relative border-t border-black/[0.04]">
      {/* Background soft lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-black-[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black-[0.05] to-transparent pointer-events-none" />

      <div className="container-safe relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-pro-display text-5xl md:text-7xl text-[#1D1D1F] tracking-tighter mb-8 leading-tight">
              Ready to grow<br/>your business?
            </h2>
            <p className="text-[#86868B] text-xl font-medium mb-12 max-w-md leading-relaxed">
              Contact our team today to discuss how we can help set up Invenza for your company.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: 'Call Us (UK)', val: '+44 7442 193577', icon: Phone, href: 'tel:+447442193577' },
                { label: 'Call Us (India)', val: '+91 84420 53087', icon: Phone, href: 'tel:+918442053087' },
                { label: 'Email Support', val: 'Saifee@gmail.com', icon: Mail, href: 'mailto:Saifee@gmail.com' },
                { label: 'Email Support', val: 'info@sysfotech.uk', icon: Mail, href: 'mailto:info@sysfotech.uk' },
                { label: 'Visit Website', val: 'sysfotech.uk', icon: Globe, href: 'https://sysfotech.uk/' },
                { label: 'Visit Website', val: 'saifeedms.com', icon: Globe, href: 'https://www.saifeedms.com/' }
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex items-center gap-6 group cursor-pointer w-fit pr-8">
                  <div className="w-16 h-16 rounded-[20px] bg-[#F5F5F7] border border-black/[0.03] flex items-center justify-center group-hover:bg-[#E5E5EA] transition-colors duration-500 shadow-subtle flex-shrink-0">
                    <c.icon className="w-6 h-6 text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors" />
                  </div>
                  <div>
                    <div className="text-[#86868B] font-bold uppercase tracking-widest text-xs mb-1 group-hover:text-[#0071E3] transition-colors">{c.label}</div>
                    <div className="text-[#1D1D1F] text-lg sm:text-xl font-semibold tracking-tight">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-[#FAFAFA] rounded-[32px] p-10 lg:p-14 border border-black/[0.04] shadow-subtle relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0071E3]/10 blur-[60px] rounded-full pointer-events-none" />
            
            <form className="relative flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              {[
                { label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { label: 'Your Work Email', type: 'email', placeholder: 'john@company.com' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-xs font-bold tracking-widest uppercase text-[#86868B] mb-3">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full bg-[#FFFFFF] border border-black/[0.04] text-[#1D1D1F] rounded-[16px] px-6 py-4 outline-none focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] transition-all font-medium placeholder:text-[#86868B] shadow-inner"
                  />
                </div>
              ))}
              
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-[#86868B] mb-3">Tell us about your business</label>
                <textarea
                  rows={4}
                  placeholder="Let us know what you need help with..."
                  className="w-full bg-[#FFFFFF] border border-black/[0.04] text-[#1D1D1F] rounded-[16px] px-6 py-4 outline-none focus:border-[#0071E3] focus:ring-1 focus:ring-[#0071E3] transition-all font-medium placeholder:text-[#86868B] shadow-inner resize-none"
                />
              </div>

              <button className="w-full btn-brand-glow py-5 rounded-[16px] uppercase tracking-wider text-sm flex items-center justify-center gap-3 mt-4 text-white shadow-md">
                Send Message <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
