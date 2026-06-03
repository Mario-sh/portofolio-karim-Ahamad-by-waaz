import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolios from "./components/Portfolios";
import Freelance from "./components/Freelance";
import Contact from "./components/Contact";
import Notification from "./components/Notification";
import SiteLoader from "./components/SiteLoader";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [siteLoading, setSiteLoading] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Generated Asset File Paths
  const portfolioImages = {
    urTalents: "/src/assets/images/ur_talents_brand_1780447860112.png",
    stationery: "/src/assets/images/stationery_brand_1780447875152.png",
    webUI: "/src/assets/images/web_interface_ui_1780447892077.png",
    pizza: "/src/assets/images/pizza_flyer_poster_1780447907749.png",
    wLogo: "/src/assets/images/letter_w_logo_1780447923346.png",
    responsiveWeb: "/src/assets/images/responsive_web_mockup_1780447939389.png",
  };

  const portraitUrl = "/src/assets/images/kazim_portrait_1780447843170.png";

  const addToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Prevent scroll during loading
  useEffect(() => {
    if (siteLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [siteLoading]);

  // Section visibility spy observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolios", "freelance", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-[#1b1c1e] text-stone-100 min-h-screen relative font-sans antialiased selection:bg-[#f0a631]/30 selection:text-white">
      {/* Site preloader with smooth transition exits */}
      <AnimatePresence mode="wait">
        {siteLoading && (
          <SiteLoader onComplete={() => setSiteLoading(false)} key="site-loader" />
        )}
      </AnimatePresence>

      {/* Dynamic Nav Header */}
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Sections flow */}
      <main>
        {/* Hero Area */}
        <Hero scrollToSection={scrollToSection} portraitUrl={portraitUrl} />

        {/* Services Showcase */}
        <Services addToast={addToast} />

        {/* Portfolios Gallery */}
        <Portfolios addToast={addToast} portfolioImages={portfolioImages} />

        {/* Freelance Contracting Grid */}
        <Freelance addToast={addToast} />

        {/* Contact Coordinates form */}
        <Contact addToast={addToast} />
      </main>

      {/* Elegant minimalist footer */}
      <footer className="bg-stone-950 py-12 border-t border-stone-900 text-center text-xs text-stone-500 font-sans tracking-widest relative">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Kazim Ahmad. All Rights Reserved.</p>
          <p className="hover:text-amber-500 transition-colors cursor-help">
            Pakistan Freelance Syndicate Verified Partner.
          </p>
        </div>
      </footer>

      {/* Core Notification Toasts Handler */}
      <Notification toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
