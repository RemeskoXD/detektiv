import { Check } from "lucide-react";
import { useData } from "../DataContext";

export default function Services() {
  const { data, loading } = useData();

  if (loading || !data || !data.services) return <div className="p-20 text-center">Načítání...</div>;

  const { services } = data;

  return (
    <div className="pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 block">{services.subtitle}</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-ink mb-6 tracking-tight">{services.title}</h1>
          <div className="w-24 h-1 bg-ink mx-auto mt-8"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-serif mb-10 text-ink">{services.listTitle}</h2>
            <ul className="space-y-8 bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-sm">
              {services.items.map((service: any, idx: number) => (
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
              {services.footerText}
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-ink text-white p-8 sm:p-10 rounded-[2rem] shadow-lg">
              <h3 className="text-2xl font-serif mb-6 text-white">{services.sidebarTitle}</h3>
              <div className="prose prose-sm text-gray-300 leading-relaxed prose-p:text-gray-300">
                <p>
                  {services.sidebarText1}
                </p>
                <p>
                  {services.sidebarText2}
                </p>
                <p className="font-semibold text-white mt-8 text-base">
                  {services.sidebarHighlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
