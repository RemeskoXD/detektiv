import { Award, FileText, BadgeCheck, ShieldAlert, Target, Shield } from "lucide-react";

export default function Presentation() {
  const certificates = [
    {
      title: "Člen ČKDS",
      description: "Česká komora detektivních služeb. Od roku 2005 člen profesního sdružení a regionální zmocněnec pro Olomoucký kraj.",
      icon: <Target className="w-6 h-6 text-ink" />,
      image: "https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/certifikat-clena-ckds.jpg"
    },
    {
      title: "Členství v hospodářské komoře",
      description: "Zapsán a aktivní v profesních sdruženích.",
      icon: <BadgeCheck className="w-6 h-6 text-ink" />,
      image: "https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/osvedceni-clenstvi-v-hk.jpg"
    },
    {
      title: "Manažer bezpečnostní služby",
      description: "Osvědčení pro management a řízení bezpečnostních složek.",
      icon: <ShieldAlert className="w-6 h-6 text-ink" />,
      image: "https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/osvedceni-hospkomory.jpg"
    },
    {
      title: "Detektivní specialista",
      description: "Certifikace pro výkon odborné detektivní činnosti.",
      icon: <Search className="w-6 h-6 text-ink" />,
      image: "https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/osvedceni-detektiv-spec.jpg"
    },
    {
      title: "Mezinárodní bezpečnost",
      description: "Certifikát znalostí pro oblast mezinárodní bezpečnosti.",
      icon: <Globe className="w-6 h-6 text-ink" />,
      image: "https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/osvedceni-mezin-konf.jpg"
    },
    {
      title: "Znalost zbraní",
      description: "Oprávnění a zkoušky předepsané pro nakládání a manipulaci se zbraněmi.",
      icon: <Crosshair className="w-6 h-6 text-ink" />,
      image: "https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/seminar-zak-o-zbranich.jpg"
    }
  ];

  return (
    <div className="pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">Kvalifikace</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink mb-6 tracking-tight">Prezentace a oprávnění</h1>
          <div className="w-24 h-1 bg-ink mx-auto mt-8"></div>
        </header>

        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-normal">
            Níže uvádím přehled získaných certifikátů, osvědčení a profesních členství, které garantují vysokou odbornou úroveň poskytovaných služeb, zákonný postup a dodržování etického kodexu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col group">
              <a 
                href={cert.image} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mb-8 relative rounded-2xl bg-gray-50 border border-gray-100 group-hover:border-gray-200 transition-colors overflow-hidden"
              >
                <div className="aspect-[3/4] w-full p-4 sm:p-6 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center shadow-sm">
                  {cert.icon}
                </div>
              </a>
              <h3 className="text-2xl font-serif mb-3 leading-tight text-ink">{cert.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-ink text-white rounded-[2rem] p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl">
           <div className="md:w-2/3">
             <h2 className="text-3xl font-serif mb-4 text-white">Ověřte si mé podnikání</h2>
             <p className="text-gray-300 text-lg leading-relaxed">
               Zda je detektivní kancelář způsobilá vykonávat svou činnost dle zákona se můžete jednoduše přesvědčit nahlédnutím do Živnostenského rejstříku.
             </p>
           </div>
           <div className="md:w-1/3 flex justify-start md:justify-end">
             <a href="http://www.rzp.cz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-ink rounded-full font-bold hover:bg-gray-100 transition-colors">
               <FileText className="w-5 h-5" />
               Rejstřík RZP
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}

// Quick icons fallback inside this file
function Search(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
}
function Globe(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
}
function Crosshair(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>;
}
