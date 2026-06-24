import { Shield, Users, Award, Lock } from "lucide-react";
import { useData } from "../DataContext";

export default function About() {
  const { data, loading } = useData();

  if (loading || !data || !data.about) return <div className="p-20 text-center">Načítání...</div>;

  const { about } = data;

  return (
    <div className="bg-[#fbfbfd] min-h-screen pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24 mt-8 sm:mt-12">
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-[#1A1A1A] mb-6">
            {about.title}
          </h1>
          <p className="text-[1.35rem] sm:text-[1.75rem] text-gray-500 font-medium tracking-tight max-w-2xl mx-auto leading-snug">
            {about.subtitle}
          </p>
        </div>

        {/* Quote / Highlight Card */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-14 lg:p-16 mb-8 sm:mb-10">
          <p className="text-2xl sm:text-3xl font-medium text-[#1A1A1A] leading-tight tracking-tight mb-8 sm:mb-10">
            {about.quote}
          </p>
          <div className="space-y-6 text-[1.1rem] sm:text-[1.2rem] text-gray-600 font-normal leading-relaxed">
            <p>{about.text1}</p>
            <p>{about.text2}</p>
          </div>
        </div>

        {/* Feature Cards - Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-10">
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-[#1A1A1A]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">{about.card1Title}</h3>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              {about.card1Text}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 flex flex-col items-start">
            <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6">
              <Lock className="w-7 h-7 text-[#1A1A1A]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] mb-4 tracking-tight">{about.card2Title}</h3>
            <p className="text-gray-600 leading-relaxed text-[1.05rem]">
              {about.card2Text}
            </p>
          </div>
        </div>

        {/* Final Statement / Approach */}
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-[0_4px_24px_rgb(0,0,0,0.02)] p-10 sm:p-16 mb-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] tracking-tight mb-6">{about.approachTitle}</h3>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {about.approachText}
            </p>
        </div>

        {/* Contact Info Footer Area */}
        <div className="flex flex-col items-center justify-center text-center mt-12">
          <p className="text-lg text-[#1A1A1A] font-semibold tracking-wide mb-1">
            {"Vladimír " + "Lakomý"}
          </p>
          <p className="text-sm text-gray-500 font-medium uppercase tracking-[0.15em] mb-8">
            Profesionální Detektiv
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a href={`tel:${data.contact?.phone?.replace(/\s/g, '')}`} className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-medium text-[1.05rem] hover:bg-gray-800 transition-colors shadow-sm">
              Zavolat {data.contact?.phone}
            </a>
            <a href={`mailto:${data.contact?.email}`} className="w-full sm:w-auto px-8 py-4 bg-white text-[#1A1A1A] border border-gray-200 rounded-full font-medium text-[1.05rem] hover:bg-gray-50 transition-colors shadow-sm">
              Napsat e-mail
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
