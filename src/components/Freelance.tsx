import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Star, ShieldCheck, Award, MessageSquare, Briefcase, Zap, X } from "lucide-react";

interface FreelanceProps {
  addToast: (msg: string, type: "success" | "error" | "info") => void;
}

export default function Freelance({ addToast }: FreelanceProps) {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const [contractSubject, setContractSubject] = useState("");
  const [contractBudget, setContractBudget] = useState("500");
  const [contractDetails, setContractDetails] = useState("");

  const platforms = [
    {
      id: "fiverr",
      name: "Fiverr",
      logoLetter: "Fi",
      color: "text-emerald-500",
      borderColor: "hover:border-emerald-500/40",
      accentBg: "bg-emerald-500/10",
      headline: "Pro verified, Top Rated Designer",
      rating: "5.0",
      reviewsCount: "250+",
      desc: "Order streamlined gigs directly for standard visual design items, video edits, and single-page landing UI screens. Rapid delivery structures.",
      badge: "Level 2 Seller",
      pricing: "Starting from $50"
    },
    {
      id: "upwork",
      name: "Upwork",
      logoLetter: "Up",
      color: "text-green-600",
      borderColor: "hover:border-green-600/40",
      accentBg: "bg-green-600/10",
      headline: "Top Rated Plus Web Developer",
      rating: "4.9",
      reviewsCount: "130+",
      desc: "For complex medium-to-large business applications, design systems setup, custom database architectures, and continuous contract support.",
      badge: "Top Rated Plus",
      pricing: "Hourly Rate: $45 / hr"
    },
    {
      id: "guru",
      name: "Guru",
      logoLetter: "Gu",
      color: "text-[#f0a631]",
      borderColor: "hover:border-amber-500/40",
      accentBg: "bg-amber-550/10",
      headline: "Verified Multi-Task Specialist",
      rating: "5.0",
      reviewsCount: "80+",
      desc: "Flexible milestone billing schemes for large corporate promo movie compilations, branding packs, and structural portfolio overhauls.",
      badge: "Veteran Creator",
      pricing: "Starting from $200"
    }
  ];

  const handleCreateContract = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contractSubject || !contractDetails) {
      addToast("Please input contract subject and task descriptions.", "error");
      return;
    }

    addToast(`Contract proposal of $${contractBudget} USD submitted for Kazim Ahmad on ${activePlatform?.toUpperCase()}!`, "success");
    setContractSubject("");
    setContractDetails("");
    setActivePlatform(null);
  };

  return (
    <section id="freelance" className="relative py-24 bg-[#17181a] text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f0a631]">
            Freelance
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            Hire Me As A Freelancer
          </h2>
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed font-light">
            I am available on different freelancing platform. You can Hire Me on given platforms.
          </p>
        </div>

        {/* 3 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group bg-[#202124] rounded-2xl p-8 border border-stone-800/60 ${platform.borderColor} transition-all duration-300 flex flex-col justify-between items-center text-center shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.35)]`}
            >
              <div className="flex flex-col items-center">
                {/* Simulated Monogram Logo */}
                <span className={`font-display text-4xl block font-black uppercase tracking-tight ${platform.color} mb-4`}>
                  {platform.name === "Upwork" ? (
                    <span className="text-[#a0e82c]">UPWORK</span>
                  ) : platform.name === "Fiverr" ? (
                    <span className="text-[#1dbf73]">FIVERR</span>
                  ) : (
                    <span className="text-[#1479fb] font-sans">guru</span>
                  )}
                </span>
                
                {/* Rating line */}
                <div className="flex items-center gap-1 mb-6 text-xs text-stone-400">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-white font-semibold font-mono ml-1">{platform.rating}</span>
                  <span>({platform.reviewsCount} reviews)</span>
                </div>

                <p className="text-[#f0a631] text-[11px] font-mono tracking-widest uppercase font-bold mb-2">
                  {platform.badge}
                </p>

                <p className="text-stone-400 text-xs font-sans leading-relaxed mb-6">
                  {platform.desc}
                </p>
              </div>

              {/* Action hire buttons matching mockup visual */}
              <button
                onClick={() => setActivePlatform(platform.name)}
                className="w-full py-3.5 border border-stone-600 hover:border-amber-500 text-stone-300 hover:text-[#17181a] hover:bg-white rounded-full text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer"
              >
                Hire Me
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Interactive Platform Custom Contract Proposal Dialog */}
      <AnimatePresence>
        {activePlatform !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePlatform(null)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
            />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl bg-[#1d1e21] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePlatform(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-amber-500 tracking-widest uppercase flex items-center gap-1.5 justify-center sm:justify-start">
                  <Briefcase className="w-3.5 h-3.5" />
                  Direct Freelance Contract
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                  Hire on <span className="text-[#f0a631]">{activePlatform}</span>
                </h3>
                <p className="text-stone-400 text-xs font-sans mt-2">
                  Draft an express gig requirement directly into Kazim Ahmad's inbox. This generates a simulated contract proposal workspace.
                </p>
              </div>

              <div className="bg-[#242529] p-4 rounded-xl border border-stone-800 space-y-2 text-xs text-stone-300 mb-6">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Award className="w-4 h-4 text-[#f0a631]" />
                  <span>Verified Top Provider Seal</span>
                </div>
                <p className="text-stone-400 leading-relaxed font-light">
                  You are bidding standard premium hourly services with fully secured escrow milestone guarantees. No deposit is released until work is delivered.
                </p>
              </div>

              <form onSubmit={handleCreateContract} className="space-y-4">
                
                {/* Contract Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-1.5">Project Scope / Headline</label>
                  <input
                    type="text"
                    required
                    value={contractSubject}
                    onChange={(e) => setContractSubject(e.target.value)}
                    placeholder="e.g. Modern Full-Scale Landing UI Design Package"
                    className="w-full bg-[#242529] border border-stone-805 hover:border-stone-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                  />
                </div>

                {/* Contract Escrow Budget selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-1.5">Proposed Milestones Budget (USD)</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="50"
                      value={contractBudget}
                      onChange={(e) => setContractBudget(e.target.value)}
                      className="flex-1 accent-amber-500 h-1 bg-stone-800 rounded-lg cursor-pointer"
                    />
                    <span className="font-mono text-base font-bold text-amber-500 bg-[#242529] px-4 py-1.5 rounded-xl border border-stone-805 min-w-[100px] text-center">
                      ${contractBudget}
                    </span>
                  </div>
                </div>

                {/* Contract description brief */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-1.5">Escrow Instructions / Task Spec Sheet</label>
                  <textarea
                    rows={3}
                    required
                    value={contractDetails}
                    onChange={(e) => setContractDetails(e.target.value)}
                    placeholder="Explain assets needed, formats (PNG, SVG, MP4, Source Code, etc.) and dates..."
                    className="w-full bg-[#242529] border border-stone-805 hover:border-stone-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Confirm Bid Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#f0a631] hover:bg-amber-600 text-[#17181a] font-display font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-lg hover:shadow-[0_5px_15px_rgba(240,166,49,0.3)] cursor-pointer"
                >
                  Submit Milestone Proposal
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
