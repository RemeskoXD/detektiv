import { useData } from "../DataContext";

export default function Pricing() {
  const { data, loading } = useData();

  if (loading || !data || !data.pricing) return <div className="p-20 text-center">Načítání...</div>;

  const { pricing } = data;

  return (
    <div className="pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink mb-6 tracking-tight">{pricing.title}</h1>
          <div className="w-24 h-1 bg-ink"></div>
        </header>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 sm:p-12 md:p-16">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-gray-800 prose-p:leading-relaxed">
            <p className="text-2xl text-ink font-medium mb-12">
              {pricing.intro}
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 sm:p-12 mb-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-serif mb-2 mt-0">{pricing.hourlyTitle}</h2>
                  <p className="text-gray-600 m-0">{pricing.hourlyDesc}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-500 block mb-1">{pricing.hourlyPriceStartText}</span>
                  <span className="text-5xl font-serif text-ink flex items-baseline gap-2">
                    {pricing.hourlyPrice} <span className="text-2xl text-gray-500">{pricing.hourlyCurrency}</span>
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 my-8"></div>
              <p className="m-0 text-gray-700 text-base leading-relaxed">
                {pricing.hourlyNote}
              </p>
            </div>

            <h2 className="text-3xl mb-6">{pricing.transpTitle}</h2>
            <p>
              {pricing.transpText1}
            </p>
            
            <p>
              {pricing.transpText2}
            </p>
            
            <p>
              {pricing.transpText3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
