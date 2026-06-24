import { Award, FileText, BadgeCheck, ShieldAlert, Target, Shield, Search, Globe, Crosshair } from "lucide-react";
import { useData } from "../DataContext";

const iconMap: Record<string, any> = {
  "Shield": Shield,
  "Award": Award,
  "Target": Target,
  "BadgeCheck": BadgeCheck,
  "ShieldAlert": ShieldAlert,
  "Search": Search,
  "Globe": Globe,
  "Crosshair": Crosshair
};

export default function Presentation() {
  const { data, loading } = useData();

  if (loading || !data) return <div className="p-20 text-center">Načítání...</div>;

  const certificates = data.certificates;

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
          {certificates.map((cert: any, idx: number) => {
            const IconComponent = iconMap[cert.icon] || Shield;
            return (
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
                  <IconComponent className="w-6 h-6 text-ink" />
                </div>
              </a>
              <h2 className="text-2xl font-serif mb-3 leading-tight text-ink">
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-accent transition-colors">
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed flex-grow">{cert.description}</p>
            </div>
          );
        })}
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
