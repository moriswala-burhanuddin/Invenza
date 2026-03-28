import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Box, Download as DownloadIcon } from 'lucide-react';
import invenzaLogo from '../../assets/invenza-bg.png';

interface Asset { name: string; browser_download_url: string; }
interface Release { tag_name: string; published_at: string; assets: Asset[]; }

export function Download() {
  const [release, setRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/repos/moriswala-burhanuddin/ERP/releases/latest')
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(setRelease)
      .catch(() => null)
      .finally(() => setLoading(false));
  }, []);

  const winAsset = release?.assets?.find(a => a.name.endsWith('.exe'));
  const macAsset = release?.assets?.find(a => a.name.endsWith('.dmg') || (a.name.endsWith('.zip') && a.name.toLowerCase().includes('mac')));

  return (
    <section id="download" className="section-pad bg-[#F5F5F7] border-y border-black/[0.04] relative overflow-hidden">
      
      {/* Light Blur aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0071E3]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-safe relative z-10 flex flex-col items-center">
        
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src={invenzaLogo} 
          alt="Invenza Logo" 
          className="w-24 h-24 mb-10 drop-shadow-md rounded-2xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-pro-display text-5xl md:text-7xl text-[#1D1D1F] tracking-tighter mb-6 text-center"
        >
          Get Invenza today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#86868B] text-xl font-medium mb-16 text-center max-w-2xl"
        >
          Download the Invenza app for your Windows or Mac computer to run your business smoothly.
        </motion.p>

        {loading ? (
          <div className="w-12 h-12 border-2 border-black/10 border-t-[#0071E3] rounded-full animate-spin my-20" />
        ) : release ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl"
          >
            <div className="flex justify-center mb-12">
              <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/5 bg-white shadow-subtle">
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-[0_0_12px_rgba(40,200,64,0.4)]" />
                <span className="text-[#1D1D1F] font-bold text-sm tracking-wide">Version {release.tag_name} &nbsp;—&nbsp; Available now</span>
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: 'Windows (64-bit)', desc: 'For Windows 10 and Windows 11', icon: Monitor, asset: winAsset },
                { label: 'macOS (Apple Silicon / Intel)', desc: 'For macOS 12 and later', icon: Box, asset: macAsset },
              ].map((plat, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-black/[0.04] shadow-subtle flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 bg-[#F5F5F7] rounded-full flex items-center justify-center mb-6 border border-black/[0.03]">
                    <plat.icon className="w-8 h-8 text-[#1D1D1F]" />
                  </div>
                  <h3 className="text-2xl text-pro-headline text-[#1D1D1F] mb-2">{plat.label}</h3>
                  <p className="text-[#86868B] font-medium mb-10">{plat.desc}</p>
                  
                  {plat.asset ? (
                    <button 
                      onClick={() => window.location.assign(plat.asset!.browser_download_url)} 
                      className="w-full btn-industrial py-4 rounded-full flex items-center justify-center gap-2 font-bold cursor-pointer"
                    >
                      <DownloadIcon className="w-5 h-5" /> Download App
                    </button>
                  ) : (
                    <button disabled className="w-full bg-[#E5E5EA] text-[#86868B] font-bold py-4 rounded-full cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              ))}
            </div>

          </motion.div>
        ) : (
          <div className="text-[#86868B] py-10">We can't connect right now. Please try again later.</div>
        )}

      </div>
    </section>
  );
}
