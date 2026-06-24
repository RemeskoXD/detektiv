import { Shield, Target, Search, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";

export default function Home() {
  const { data, loading } = useData();

  if (loading || !data) return <div className="p-20 text-center">Načítání...</div>;

  const heroTitleLines = data.heroTitle.split('\n');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform origin-top-right -z-10 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm sm:text-base font-semibold uppercase tracking-widest mb-6 sm:mb-8">
              <Shield className="w-5 h-5" />
              Detektivní Agentura
            </span>
            
            <div className="flex flex-col items-center justify-center mb-8">
              {/* Strom života jako špička pyramidy (symbol důvěry a ochrany) */}
              <svg 
                className="w-[clamp(8rem,16vw,12.5rem)] h-auto mb-3 md:mb-5" 
                viewBox="0 0 400 320" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path id="leaf" d="M 0 -24 C 18 -8, 18 16, 0 24 C -18 16, -18 -8, 0 -24 Z" />
                </defs>
            
                <path 
                  d="M 200 320 
                     C 192 290 190 280 190 260 
                     C 188 240 170 240 150 236 
                     C 130 232 108 238 95 245 
                     C 95 245 105 230 125 225 
                     C 150 220 175 230 185 240 
                     C 192 247 195 255 200 265 
                     C 205 255 208 247 215 240 
                     C 225 230 250 220 275 225 
                     C 295 230 305 245 305 245 
                     C 292 238 270 232 250 236 
                     C 230 240 212 240 210 260 
                     C 210 280 208 290 200 320 Z" 
                  fill="#005639" 
                />
                <path d="M 130 315 C 160 305 240 305 270 315 C 240 310 160 310 130 315 Z" fill="#005639" />
            
                <g>
                   <use href="#leaf" x="200" y="30" fill="#aed581" />
                   
                   <use href="#leaf" x="165" y="65" fill="#8bc34a" transform="rotate(-30 165 65)" />
                   <use href="#leaf" x="200" y="75" fill="#cddc39" />
                   <use href="#leaf" x="235" y="65" fill="#8bc34a" transform="rotate(30 235 65)" />
            
                   <use href="#leaf" x="130" y="105" fill="#7cb342" transform="rotate(-45 130 105)" />
                   <use href="#leaf" x="165" y="115" fill="#aed581" transform="rotate(-15 165 115)" />
                   <use href="#leaf" x="235" y="115" fill="#aed581" transform="rotate(15 235 115)" />
                   <use href="#leaf" x="270" y="105" fill="#7cb342" transform="rotate(45 270 105)" />
            
                   <use href="#leaf" x="100" y="145" fill="#689f38" transform="rotate(-60 100 145)" />
                   <use href="#leaf" x="140" y="155" fill="#9ccc65" transform="rotate(-30 140 155)" />
                   <use href="#leaf" x="180" y="125" fill="#8bc34a" />
                   <use href="#leaf" x="220" y="125" fill="#8bc34a" />
                   <use href="#leaf" x="260" y="155" fill="#9ccc65" transform="rotate(30 260 155)" />
                   <use href="#leaf" x="300" y="145" fill="#689f38" transform="rotate(60 300 145)" />
            
                   <use href="#leaf" x="75" y="185" fill="#558b2f" transform="rotate(-75 75 185)" />
                   <use href="#leaf" x="120" y="195" fill="#7cb342" transform="rotate(-45 120 195)" />
                   <use href="#leaf" x="160" y="175" fill="#aed581" transform="rotate(-15 160 175)" />
                   <use href="#leaf" x="200" y="160" fill="#cddc39" />
                   <use href="#leaf" x="240" y="175" fill="#aed581" transform="rotate(15 240 175)" />
                   <use href="#leaf" x="280" y="195" fill="#7cb342" transform="rotate(45 280 195)" />
                   <use href="#leaf" x="325" y="185" fill="#558b2f" transform="rotate(75 325 185)" />
            
                   <use href="#leaf" x="175" y="210" fill="#8bc34a" transform="rotate(-30 175 210)" />
                   <use href="#leaf" x="225" y="210" fill="#8bc34a" transform="rotate(30 225 210)" />
                   <use href="#leaf" x="200" y="195" fill="#689f38" />
                </g>
              </svg>
              
              <h1 className="flex flex-col items-center font-serif text-ink tracking-tight w-full mt-2">
                {heroTitleLines[0] && (
                  <>
                    <span className="block text-[clamp(2.2rem,4.8vw,4rem)] mb-1.5 md:mb-2 text-gray-700 leading-none">{heroTitleLines[0]}</span>
                    <div className="w-[clamp(10rem,24vw,19rem)] h-[2px] bg-gray-300 mb-2 md:mb-4"></div>
                  </>
                )}
                
                {heroTitleLines[1] && (
                  <>
                    <span className="block text-[clamp(2.8rem,6vw,5rem)] mb-1.5 md:mb-2 text-gray-800 leading-none">{heroTitleLines[1]}</span>
                    <div className="w-[clamp(14rem,33vw,26rem)] h-[2px] bg-gray-300 mb-2 md:mb-4"></div>
                  </>
                )}
                
                {heroTitleLines[2] && (
                  <>
                    <span className="block text-[clamp(2rem,4.5vw,3.6rem)] font-black text-accent uppercase tracking-wide leading-none mb-2 md:mb-4">{heroTitleLines[2]}</span>
                    <div className="w-[clamp(16rem,42vw,33rem)] h-2 md:h-[0.6rem] mb-2 min-w-16 rounded-full" style={{ backgroundColor: '#005639' }}></div>
                  </>
                )}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-2xl leading-relaxed whitespace-pre-wrap">
              {data.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
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
                Konzultace v případě navázání<br className="hidden sm:block"/> spolupráce zdarma
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
              <h2 className="text-4xl sm:text-5xl font-serif mb-10 leading-tight">
                Zjišťování, prověřování<br/>a analýza informací
              </h2>
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
                      src="https://web2.itnahodinu.cz/detektiv/logostin04.png" 
                      alt="Profesionální detektiv Logo" 
                      className="w-3/4 max-w-[200px] opacity-70 drop-shadow-md"
                      style={{ filter: "brightness(0) invert(1)" }}
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="text-6xl font-serif mb-2">1995</div>
                      <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Rok založení praxe</div>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-4xl font-serif mb-2">ČKBS</div>
                        <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Člen prezídia</div>
                      </div>
                      <div>
                        <div className="text-4xl font-serif mb-2">ČKDS</div>
                        <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">Čestný člen</div>
                      </div>
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
