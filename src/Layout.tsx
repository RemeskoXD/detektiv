import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Shield, Check } from "lucide-react";
import { useState, useEffect } from "react";

// Components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Presentation from "./pages/Presentation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Hlavní strana", path: "/" },
    { name: "O mně", path: "/o-mne" },
    { name: "Nabídka služeb", path: "/nabidka-sluzeb" },
    { name: "Ceny služeb", path: "/ceny-sluzeb" },
    { name: "Prezentace a oprávnění", path: "/prezentace-a-opravneni" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-16 w-auto"
                src="https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/logostin04.png"
                alt="Profesionální Detektiv"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center text-sm font-medium uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? "text-accent border-b-2 border-accent"
                    : "text-gray-500 hover:text-ink"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center">
            <a
              href="tel:+420602776025"
              className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              602 776 025
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Otevřít hlavní menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-gray-50 text-accent"
                    : "text-gray-700 hover:text-ink hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+420602776025"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-ink mt-4 text-center"
            >
              +420 602 776 025
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink text-white py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://profesionalnidetektiv.cz/wp-content/uploads/2022/03/logostin04.png"
              alt="Logo"
              className="h-12 bg-white p-2 rounded mb-6 grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Diskrétnost, profesionalita a efektivnost. Nabízíme detektivní služby soukromým osobám, firmám i právním kancelářím.
            </p>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Člen Českého Klubu Bezpečnostních Služeb</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">čestný člen České komory detektivních služeb</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">člen bezpečnostní sekce Hospodářské komory ČR</span>
              </div>
            </div>
          </div>
          
          <div id="kontakt">
            <h3 className="font-serif text-2xl mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Telefon</div>
                  <a href="tel:+420602776025" className="text-lg hover:text-gray-300 transition-colors">
                    +420 602 776 025
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">E-mail</div>
                  <a href="mailto:vladimir@profesionalnidetektiv.cz" className="text-lg hover:text-gray-300 transition-colors">
                    vladimir@profesionalnidetektiv.cz
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-2xl mb-6">Fakturační údaje</h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p className="text-white font-medium text-base">Vladimír Lakomý</p>
              <p>IČO: 63006791</p>
              <p>Savín 54, Litovel</p>
              <p>783 24, okres Olomouc</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Profesionální detektiv.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link to="/ochrana-udaju" className="hover:text-white transition-colors">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-mne" element={<About />} />
          <Route path="/nabidka-sluzeb" element={<Services />} />
          <Route path="/ceny-sluzeb" element={<Pricing />} />
          <Route path="/prezentace-a-opravneni" element={<Presentation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
