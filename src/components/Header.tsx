import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolios", id: "portfolios" },
    { name: "Freelance", id: "freelance" },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 transition-all duration-500 py-4 px-4 sm:px-6 md:px-8">
      <div
        className={`max-w-7xl mx-auto px-6 md:px-10 py-3 rounded-full transition-all duration-500 flex justify-between items-center ${
          scrolled
            ? "bg-[#1b1c1e]/70 backdrop-blur-xl border border-white/10 shadow-[0_12px_45px_-8px_rgba(0,0,0,0.5)]"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand Logo with ambient reflection */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-display font-extrabold text-2xl tracking-tighter text-white flex items-center gap-0.5 cursor-pointer hover:opacity-90 active:scale-95 transition-all"
        >
          KA<span className="text-[#f0a631] font-sans">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-stone-900/40 p-1.5 rounded-full border border-stone-800/40 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-[11px] uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 cursor-pointer relative ${
                  isActive
                    ? "text-white bg-[#f0a631] font-bold shadow-[0_4px_12px_rgba(240,166,49,0.3)]"
                    : "text-stone-300 hover:text-white hover:bg-stone-800/40"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Button - Let's talk or Hire button inside glass header */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-1.5 px-4.5 py-2 bg-stone-800/60 hover:bg-white text-stone-200 hover:text-stone-950 font-sans font-bold uppercase tracking-widest text-[10px] rounded-full border border-stone-700/50 hover:border-transparent transition-all duration-300 shadow-sm cursor-pointer"
          >
            <span>Express Hire</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#f0a631] group-hover:text-stone-900 transition-colors" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-stone-300 hover:text-white bg-stone-900/50 hover:bg-stone-800 p-2 rounded-full border border-stone-800/80 transition-all focus:outline-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel - Elevated sleek visual wrapper */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#1d1e21]/95 border border-stone-800/80 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden animate-fade-in-down">
          <div className="flex flex-col py-4 px-6 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-display font-medium text-base tracking-wide py-2.5 px-4 rounded-xl transition-all ${
                    isActive 
                      ? "text-white bg-[#f0a631]/10 border-l-2 border-[#f0a631]" 
                      : "text-stone-300 hover:bg-stone-800/40"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
