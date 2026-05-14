export default function Pricing() {
  return (
    <div className="pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink mb-6 tracking-tight">Ceny služeb</h1>
          <div className="w-24 h-1 bg-ink"></div>
        </header>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 sm:p-12 md:p-16">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-gray-800 prose-p:leading-relaxed">
            <p className="text-2xl text-ink font-medium mb-12">
              Ceny detektivních služeb se skládají z hodinové odměny a nákladů, souvisejících s plněním Vašeho zadání (cestovní náhrady, správní a jiné obdobné poplatky, ostatní náklady, atp.). Za určitých okolností lze odměnu kombinovat s paušálem, případně i provizí.
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-12 mb-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-serif mb-2 mt-0">Hodinová sazba</h2>
                  <p className="text-gray-600 m-0">je odstupňována dle náročnosti poskytovaných služeb.</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-500 block mb-1">Cena začíná zpravidla na</span>
                  <span className="text-5xl font-serif text-ink flex items-baseline gap-2">
                    500 <span className="text-2xl text-gray-500">Kč</span>
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 my-8"></div>
              <p className="m-0 text-gray-700 text-base leading-relaxed">
                Vždy však záleží na dohodě s Vámi, přičemž je třeba vzít v úvahu, že výši odměny, vedle jiných specifických okolností, ovlivňuje především míra rizika podstupovaného při plnění Vašeho zadání.
              </p>
            </div>

            <h2 className="text-3xl mb-6">Transparentnost a kontrola nákladů</h2>
            <p>
              Vzhledem k tomu, že většinou nelze dopředu stanovit konečnou výši ceny detektivní služby, osvědčil se postup spočívající ve stanovení <strong>„stropu“ na tzv. prvotní šetření</strong>, abyste měli cenu za služby detektiva pod kontrolou.
            </p>
            
            <p>
              Jedná se o částku, předem dohodnutou s Vámi, jež pokryje náklady na provedení prvotních úkonů, včetně přiměřené odměny detektiva. Po jejich uskutečnění, do výše dohodnutého „stropu“, je případ vyhodnocen a případně naplánovány další úkony včetně stanovení jejich předběžné ceny.
            </p>
            
            <p>
              Pokud se například ukáže, že Vaše podezření se nepotvrdilo, nebo že již bylo dosaženo požadovaného účelu atp., je případ ukončen a vyhotoveno vyúčtování s příslušnou fakturou. Vy tak platíte pouze za skutečně vynaložený čas a prostředky s garancí nepřekročení sjednaného limitu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
