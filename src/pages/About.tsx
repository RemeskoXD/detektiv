import { Shield, Users, Award, Lock } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#fbfbfd] min-h-screen pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24 mt-8 sm:mt-12">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
            O mně
          </h1>
          <p className="text-[1.35rem] sm:text-[1.75rem] text-gray-500 font-medium tracking-tight max-w-2xl mx-auto leading-snug">
            Více než 30 let zkušeností v oboru komerční bezpečnosti a detektivních služeb.
          </p>
        </div>

        {/* Quote / Highlight Card */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-14 lg:p-16 mb-8 sm:mb-10">
          <p className="text-2xl sm:text-3xl font-medium text-gray-900 leading-tight tracking-tight mb-8 sm:mb-10">
            V oboru komerční bezpečnosti a detektivních služeb pracuji nepřetržitě od roku 1992.
          </p>
          <div className="space-y-6 text-[1.1rem] sm:text-[1.2rem] text-gray-600 font-normal leading-relaxed">
            <p>
              Začínal jsem nejprve jako zaměstnanec, od roku 1995 už pracuji jako OSVČ. Hlavní náplní mé činnosti je vyhledávání a monitorování osob, majetku, zjišťování informací a získávání důkazního materiálu.
            </p>
            <p>
              Získal jsem bohaté zkušenosti v oblasti ostrahy objektů se služebními psy, při poskytování služeb osobní ochrany a také převozů cenností a finanční hotovosti.
            </p>
          </div>
        </div>

        {/* Feature Cards - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-10">
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Odborné členství</h3>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              Od roku 2005 jsem členem profesního sdružení Česká komora detektivních služeb. Působím také v prezidiu Českého klubu bezpečnostních služeb jako hospodář a vedoucí sekce detektivové.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <Lock className="w-7 h-7 text-gray-900" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">Naprostá diskrétnost</h3>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              V kooperaci s prověřenými kolegy poskytujeme služby advokátním kancelářím, obchodním společnostem i fyzickým osobám s maximálním důrazem na mlčenlivost.
            </p>
          </div>
        </div>

        {/* Final Statement / Approach */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_4px_24px_rgb(0,0,0,0.02)] p-10 sm:p-16 mb-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight mb-6">Můj přístup</h3>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Profesi soukromého detektiva jsem si zvolil proto, že se v ní mohu realizovat, komunikovat s lidmi a pomáhat jim v nelehkých životních situacích. Nejvíce mě naplňuje různorodost této práce a svoboda v rozhodování, jak nejlépe dosáhnout cíle pro své klienty.
            </p>
        </div>

        {/* Contact Info Footer Area */}
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <p className="text-lg text-gray-900 font-semibold tracking-wide mb-1">
            Vladimír Lakomý
          </p>
          <p className="text-sm text-gray-500 font-medium uppercase tracking-[0.15em] mb-8">
            Profesionální Detektiv
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a href="tel:+420602776025" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-[1.05rem] hover:bg-gray-800 transition-colors shadow-sm">
              Zavolat +420 602 776 025
            </a>
            <a href="mailto:vladimir@profesionalnidetektiv.cz" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium text-[1.05rem] hover:bg-gray-50 transition-colors shadow-sm">
              Napsat e-mail
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
