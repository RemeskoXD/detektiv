import { Check } from "lucide-react";

export default function Services() {
  const servicesList = [
    { text: "Pátrání po osobách a věcech", highlight: false },
    { text: "Zjišťování, prověřování a analýza informací, včetně jejich zobrazení v grafické analýze vztahů a vazeb, provedení syntézy dat s jejich následným popisem v souhrnné zprávě – nezbytné k přijímání důležitých rozhodnutí, prevenci a ochraně proti podvodům, vzniku nedobytných pohledávek a jiných nestandardních a nežádoucích situací, včetně fatálních škod", highlight: true },
    { text: "Odhalování a dokumentace protiprávního jednání", highlight: false },
    { text: "Ochrana ekonomických zájmů fyzických a právnických osob (prověřování potenciálních obchodních partnerů, úkony související s řešením pohledávek po splatnosti, zjištění bonity dlužníka a stanovení efektivního způsobu vymáhání pohledávek, odhalování a dokumentace nekalosoutěžního jednání, atp.)", highlight: false },
    { text: "Detektivní dohled, monitorování osob a věcí, k nimž má klient právní vztah", highlight: false },
    { text: "Systematické hledání důkazů", highlight: false },
    { text: "Analýza důkazů a jejich organizace", highlight: false },
    { text: "Shromažďování podkladů (informace, důkazní materiál) pro svědectví v soudním řízení", highlight: false },
    { text: "Zajištění OTP prohlídky proti odposlechům (kanceláře, byty, auta, atp.)", highlight: false }
  ];

  return (
    <div className="pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">Co pro vás mohu udělat</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink mb-6 tracking-tight">Nabídka služeb</h1>
          <div className="w-24 h-1 bg-ink mx-auto mt-8"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif mb-10 text-ink">Výběr z nabídky služeb:</h2>
            <ul className="space-y-8 bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-sm">
              {servicesList.map((service, idx) => (
                <li key={idx} className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className={`leading-relaxed text-lg transition-all ${service.highlight ? 'font-bold text-ink bg-accent/5 p-4 rounded-xl border border-accent/20 -mt-2' : 'text-gray-800'}`}>
                    {service.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-xl font-serif italic text-gray-600 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              Specifikaci dalších služeb Vám poskytnu osobně.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-ink text-white p-8 sm:p-10 rounded-[2rem] shadow-lg">
              <h3 className="text-2xl font-serif mb-6 text-white">Příprava na konzultaci</h3>
              <div className="prose prose-sm text-gray-300 leading-relaxed prose-p:text-gray-300">
                <p>
                  Jakmile se rozhodnete mne kontaktovat s konkrétní poptávkou na detektivní služby, vezměte prosím v úvahu fakt, že v zájmu zvýšení efektivity práce soukromého detektiva na zakázce, je nutno dbát na provedení pečlivé přípravy.
                </p>
                <p>
                  Její první a nejdůležitější fází je pohovor s Vámi, při němž byste měli poskytnout maximální součinnost při předávání vstupních (prvotních) informací a neměli byste zamlčet ani zdánlivě nepodstatné informace.
                </p>
                <p>
                  Druhou fází je provedení analýzy a zpracování prvotních informací s naplánováním konkrétních úkonů. Dojde tak k úspoře času (není třeba zjišťovat již známé skutečnosti) a především peněz klienta.
                </p>
                <p className="font-semibold text-white mt-8 text-base">
                  Proto si prosím k případu připravte všechny dostupné podklady a informace. Předem děkuji a těším se na spolupráci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
