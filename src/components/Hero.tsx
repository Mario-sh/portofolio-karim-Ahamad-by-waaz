import { motion } from "motion/react";
import { ArrowRight, Instagram, Facebook, Send } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
  portraitUrl: string;
}

export default function Hero({ scrollToSection, portraitUrl }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#1b1c1e] text-white pt-24 md:pt-32 pb-16 flex items-center overflow-hidden"
    >
      {/* Decorative ambient background blur lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-stone-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Name & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 flex flex-col justify-center items-start space-y-8 text-left h-full"
        >
          <div>
            <h1 className="font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-none text-white tracking-tight">
              Kazim <br />
              <span className="relative">
                Ahmad
                <span className="text-amber-500 font-sans">.</span>
              </span>
            </h1>
            <div className="w-16 h-1.5 bg-amber-500 mt-6 rounded-full" />
          </div>

          <div className="space-y-3 font-sans text-sm text-stone-400 leading-relaxed tracking-wide">
            <div className="flex flex-wrap gap-2 items-center">
              <a
                href="https://www.instagram.com/kazimahmad_22"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center gap-1.5 group"
              >
                <Instagram className="w-4 h-4 text-stone-500 group-hover:text-amber-500 transition-colors" />
                Instagram
              </a>
              <span className="text-stone-600">|</span>
              <a
                href="https://www.facebook.com/kazimahmad.22"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center gap-1.5 group"
              >
                <Facebook className="w-4 h-4 text-stone-500 group-hover:text-amber-500 transition-colors" />
                Facebook
              </a>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="hover:text-stone-300 transition-colors flex items-center gap-1.5 cursor-help">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500 shrink-0" />
                Whatsapp
              </span>
              <span className="text-stone-600">|</span>
              <a
                href="https://t.me/kazimahmad"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-500 transition-colors flex items-center gap-1.5 group"
              >
                <Send className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-500 transition-colors" />
                Telegram.
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 border-2 border-stone-600 hover:border-amber-500 text-stone-300 hover:text-white rounded-full text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:bg-stone-800/20 cursor-pointer"
          >
            Contact me
          </button>
        </motion.div>

        {/* Center Column: Portrait Photo with concentric rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center my-8 lg:my-0 relative"
        >
          {/* Subtle glowing disk backdrop */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-stone-500/5 rounded-full blur-2xl max-w-[340px] md:max-w-[420px] mx-auto aspect-square -z-10" />

          {/* Large circular container */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#2d2e30]/80 shadow-2xl bg-[#232426]">
            <img
              src={portraitUrl}
              alt="Kazim Ahmad portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
        </motion.div>

        {/* Right Column: Introduction info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-4 flex flex-col justify-center items-start text-left space-y-6"
        >
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f0a631]">
              Introduction
            </span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-stone-100 leading-tight tracking-tight">
              Graphic Designer, <br />
              Web Developer, <br />
              Video Editor.
            </h2>
          </div>

          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed tracking-wide font-light max-w-md">
            I am a professional Graphic Designer having <span className="text-stone-100 font-medium">5+ years of experience</span>, living in Pakistan. 
            I also have highly advanced skills like Web Development, Video Editing, and UI/UX Designing.
          </p>

          <div className="pt-2 flex items-center gap-6 text-xs text-stone-400 font-mono">
            <div className="flex flex-col">
              <span className="text-stone-100 text-lg font-bold font-display">5+ YRS</span>
              <span>Experience</span>
            </div>
            <div className="h-8 w-px bg-stone-800" />
            <div className="flex flex-col">
              <span className="text-stone-100 text-lg font-bold font-display">100%</span>
              <span>Dedication</span>
            </div>
            <div className="h-8 w-px bg-stone-800" />
            <div className="flex flex-col">
              <span className="text-stone-100 text-lg font-bold font-display">Pk</span>
              <span>Location</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
