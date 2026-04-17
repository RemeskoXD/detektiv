import { Shield, Target, Search, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform origin-top-right -z-10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-2/3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-8">
              <Shield className="w-4 h-4" />
              Detektivní Agentura
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif text-ink mb-6 tracking-tight leading-[0.9]">
              Důvěřuj, prověřuj,<br /> 
              <span className="text-gray-400 italic">předcházej.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-800 mb-10 max-w-2xl leading-relaxed">
              Diskrétnost, profesionalita a efektivnost. Nabízíme detektivní služby soukromým osobám, firmám i právním subjektům s působností více než 30 let.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/nabidka-sluzeb" 
                className="inline-flex justify-center items-center px-8 py-4 bg-ink text-white rounded-full font-medium hover:bg-accent transition-all hover:scale-105 active:scale-95 text-lg"
              >
                Naše služby
              </Link>
              <a 
                href="#kontakt" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-ink border border-gray-300 rounded-full font-medium hover:border-ink hover:bg-gray-50 transition-all text-lg shadow-sm"
              >
                Konzultace zdarma
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-24 bg-white relative shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              <div className="group">
                <Search className="w-10 h-10 text-gray-400 mb-6 group-hover:text-ink transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-ink">Pátrání</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Pátrání po osobách a věcech, systematické hledání důkazů.
                </p>
              </div>
              <div className="group">
                <Eye className="w-10 h-10 text-gray-400 mb-6 group-hover:text-ink transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-ink">Sledování</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Detektivní dohled, monitorování osob a věcí pro klienty.
                </p>
              </div>
              <div className="group">
                <Shield className="w-10 h-10 text-gray-400 mb-6 group-hover:text-ink transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-ink">Ochrana Zájmů</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ochrana ekonomických zájmů, efektivní řešení pohledávek.
                </p>
              </div>
              <div className="group">
                <Target className="w-10 h-10 text-gray-400 mb-6 group-hover:text-ink transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-ink">Odposlechy</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Zajištění OTP prohlídky proti odposlechům (kanceláře, byty, auta).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif mb-8 leading-tight">
                Zjišťování, prověřování a analýza informací
              </h2>
              <p className="text-gray-200 text-xl mb-10 leading-relaxed">
                Aby jste měli jistotu, že firma nabízející detektivní služby má příslušná oprávnění, navštivte internetové stránky živnostenského rejstříku.
              </p>
              <div className="space-y-6 text-gray-300 text-lg">
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                  <p>Odhalování a dokumentace protiprávního jednání</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                  <p>Analyzování důkazů, nezbytné pro přijímání důležitých rozhodnutí</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 flex-shrink-0" />
                  <p>Shromažďování podkladů pro svědectví v soudním řízení</p>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-white/10">
                <Link to="/o-mne" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors uppercase tracking-widest text-sm font-bold">
                  Více o mně <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
            <div className="relative h-full">
               <div className="h-full min-h-[400px] bg-white/5 rounded-[2rem] border border-white/10 p-10 flex flex-col justify-between">
                  {/* Bílé logo v horní části */}
                  <div className="flex items-center justify-center flex-grow pb-12 pt-4">
                    <img 
                      src="https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/logostin04.png" 
                      alt="Profesionální detektiv Logo" 
                      className="w-3/4 max-w-[200px] opacity-70 drop-shadow-md"
                      style={{ filter: "brightness(0) invert(1)" }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="text-6xl font-serif mb-2">1992</div>
                      <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Rok založení praxe</div>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div>
                      <div className="text-4xl font-serif mb-2">ČKBS</div>
                      <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Člen prezídia</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
