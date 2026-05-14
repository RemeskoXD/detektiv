import { FileText, Shield, Lock } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">Zásady</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-ink mb-6 tracking-tight">Ochrana osobních údajů</h1>
          <div className="w-24 h-1 bg-ink mx-auto mt-8"></div>
        </header>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 sm:p-12 md:p-16">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-gray-800 prose-p:leading-relaxed prose-li:text-gray-800">
            
            <p className="text-xl font-medium mb-10 leading-relaxed text-ink">
              Tyto zásady ochrany osobních údajů (dále jen „Zásady“) shrnují, jakým způsobem jsou shromažďovány, zpracovávány a chráněny osobní údaje v rámci detektivní kanceláře Vladimír Lakomý.
            </p>

            <div className="flex items-center gap-4 mb-6 mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                <FileText className="w-6 h-6 text-ink" />
              </div>
              <h2 className="text-2xl font-serif m-0">1. Základní ustanovení</h2>
            </div>
            <p>
              Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů (dále jen: „<strong>GDPR</strong>”) je:
            </p>
            <ul>
              <li><strong>Vladimír Lakomý</strong></li>
              <li>IČO: 63006791</li>
              <li>Sídlo: Savín 54, Litovel, 783 24</li>
              <li>Email: vladimir@profesionalnidetektiv.cz</li>
              <li>Telefon: +420 602 776 025</li>
            </ul>

            <div className="flex items-center gap-4 mb-6 mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                <Shield className="w-6 h-6 text-ink" />
              </div>
              <h2 className="text-2xl font-serif m-0">2. Zpracovávané údaje a zákonný důvod</h2>
            </div>
            <p>
              S ohledem na povahu činnosti detektivní kanceláře zpracováváme osobní údaje výhradně v souladu s platnými právními předpisy. Zpracování probíhá především na základě:
            </p>
            <ul>
              <li><strong>Plnění smluvní povinnosti</strong> (čl. 6 odst. 1 písm. b) GDPR) - pro účely provedení sjednané detektivní činnosti nebo konzultace.</li>
              <li><strong>Oprávněného zájmu</strong> správce nebo třetí strany (čl. 6 odst. 1 písm. f) GDPR) - např. při ochraně majetku a odhalování protiprávního jednání v souladu s platnými zákony ČR.</li>
              <li><strong>Plnění právní povinnosti</strong> (čl. 6 odst. 1 písm. c) GDPR) - pro účely účetnictví a plnění daňových povinností.</li>
            </ul>

            <div className="flex items-center gap-4 mb-6 mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                <Lock className="w-6 h-6 text-ink" />
              </div>
              <h2 className="text-2xl font-serif m-0">3. Zabezpečení a mlčenlivost</h2>
            </div>
            <p>
              Jako detektivní kancelář klademe <strong>absolutní důraz na diskrétnost a zabezpečení dat</strong>. 
            </p>
            <p>
              Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů v listinné i elektronické podobě. Přístup k údajům má výhradně správce a jím prověření spolupracovníci vázaní smluvní mlčenlivostí v rozsahu nezbytném pro plnění zakázky.
            </p>

            <h2 className="mt-12">4. Doba uchovávání údajů</h2>
            <p>
              Osobní údaje uchováváme pouze po dobu nezbytně nutnou k výkonu práv a povinností vyplývajících ze smluvního vztahu nebo po dobu, kterou vyžadují příslušné právní předpisy (např. zákon o účetnictví). Po uplynutí této doby jsou data bezpečně zlikvidována v souladu se zákonem.
            </p>

            <h2 className="mt-12">5. Vaše práva</h2>
            <p>Za podmínek stanovených v GDPR máte mimo jiné právo:</p>
            <ul>
              <li>Na přístup ke svým osobním údajům.</li>
              <li>Na opravu nepřesných osobních údajů nebo jejich výmaz, není-li to v rozporu s oprávněným zájmem nebo zákonnou lhůtou správce.</li>
              <li>Na omezení zpracování.</li>
              <li>Vznést námitku proti zpracování.</li>
            </ul>

            <p className="mt-12 text-sm text-gray-500">
              Tyto zásady nabývají účinnosti dnem 1. ledna 2024. V případě jakýchkoliv dotazů ke zpracování osobních údajů nás kontaktujte na výše uvedené e-mailové adrese nebo telefonicky.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
