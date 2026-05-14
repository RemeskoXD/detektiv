export default function About() {
  return (
    <div className="pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink mb-6 tracking-tight">O mně</h1>
          <div className="w-24 h-1 bg-ink"></div>
        </header>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 sm:p-12 md:p-16">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-gray-800 prose-p:leading-relaxed">
            <p className="text-2xl text-ink font-medium mb-12 leading-relaxed">
              V oboru komerční bezpečnosti a detektivních služeb pracuji od roku 1992. Začínal jsem nejprve jako zaměstnanec, od roku 1995 už pracuji jako osvč. Hlavní náplní mé činností je vyhledávání a monitorování osob, majetku, zjišťování informací a získávání důkazního materiálu.
            </p>
            
            <p>
              V oboru komerční bezpečnosti, jsem získal bohaté zkušenosti v oblasti ostrahy objektů se služebními psy, při poskytování služeb osobní ochrany, a také převozů cenností a finanční hotovosti.
            </p>

            <p>
              V roce 2005 jsem se stal členem profesního sdružení Česká komora detektivních služeb. V současné době jsem také členem Českého klubu bezpečnostních služeb, kde pracuji v prezidiu, jako hospodář a vedoucí sekce detektivové. Působím zároveň v Hospodářské komoře ČR, jako člen bezpečnostní sekce a vedoucí pracovní skupiny detektivové.
            </p>

            <p>
              V kooperaci s kolegy prověřenými dlouholetou spoluprací, poskytujeme detektivní a bezpečnostní služby advokátním kancelářím, obchodním společnostem, fyzickým osobám i jednotlivcům a jsme schopni v rámci spolupráce s vybranými kolegy uspokojit téměř jakoukoliv poptávku, a to jak v České republice, tak i v zahraničí. Při provádění úkonů postupujeme v rámci zákona a s maximální snahou o diskrétnost.
            </p>

            <p>
              Profesi soukromého detektiva jsem si zvolil, kromě jiného, proto, že se v ní mohu realizovat, jako osoba mající možnost komunikovat s lidmi, a pomáhat jim řešit složité situace. Na mé práci mne nejvíce baví její různorodost, a také možnost se nezávisle rozhodovat co, kdy, kde, jak, čím, proč a především pro koho, budu pracovat.
            </p>

            <p>
              Mezi mé koníčky patří cestování, sport (stolní tenis, volejbal, bojové sporty) a kynologie.
            </p>
            
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-serif mb-4 text-ink">Vladimír Lakomý</h2>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">
                člen prezídia Českého Klubu Bezpečnostních Služeb z.s.
              </p>
              <div className="space-y-2 text-gray-800">
                <p>Telefon: <a href="tel:+420602776025" className="text-ink hover:underline font-medium">+420 602 776 025</a></p>
                <p>Email: <a href="mailto:vladimir@profesionalnidetektiv.cz" className="text-ink hover:underline font-medium">vladimir@profesionalnidetektiv.cz</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
