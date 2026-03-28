import invenzaLogo from '../../assets/invenza-bg.png';

const sections = [
  { title: 'Platform', links: ['Features', 'Download', 'Changelog'] },
  { title: 'Ecosystem', links: ['Sysfotech', 'Saifee Digital', 'Partners'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] }
];

export function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-black/[0.04]">
      <div className="container-safe py-20 pb-12">
        
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <img src={invenzaLogo} alt="Invenza" className="h-8 w-auto drop-shadow-sm rounded-lg" />
              <span className="font-bold text-xl tracking-tight text-[#1D1D1F]">Invenza</span>
            </a>
            <p className="text-[#86868B] font-medium leading-relaxed max-w-sm">
              The powerful and easy-to-use software for growing businesses.
            </p>
          </div>

          {sections.map(s => (
            <div key={s.title}>
              <h4 className="text-[#1D1D1F] font-bold tracking-wider uppercase text-xs mb-6">{s.title}</h4>
              <ul className="flex flex-col gap-4">
                {s.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-[#86868B] hover:text-[#0071E3] transition-colors font-medium">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="pt-8 border-t border-black/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#86868B] text-sm font-medium">
            © {new Date().getFullYear()} Invenza Enterprise. Sysfotech & Saifee Digital.
          </p>
        </div>

      </div>
    </footer>
  );
}
