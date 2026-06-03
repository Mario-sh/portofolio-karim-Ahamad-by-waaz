import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Layers, Code2, Film, CheckCircle2, Shield, Calendar, Users, X } from "lucide-react";

interface ServicesProps {
  addToast: (msg: string, type: "success" | "error" | "info") => void;
}

export default function Services({ addToast }: ServicesProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Graphic Designing");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [requirements, setRequirements] = useState("");

  const services = [
    {
      id: "graphic",
      icon: Palette,
      title: "Graphic Designing",
      description: "Logo design, branding schemes, visual layouts, posters, and professional corporate digital style guides.",
      features: ["Custom Brand Identity", "Social Media Graphics", "Stationery & Prints", "Vector Illustrations"],
      priceRange: "$150 - $600"
    },
    {
      id: "uiux",
      icon: Layers,
      title: "UI / UX Designing",
      description: "Human-centric high-fidelity wireframes, mobile app guides, responsive prototypes, and optimized desktop visual structures.",
      features: ["Figma Screen Layouts", "Wireframing & Flowcharts", "Interactive Prototypes", "Design System Setup"],
      priceRange: "$300 - $1200"
    },
    {
      id: "web",
      icon: Code2,
      title: "Web Development",
      description: "Stunning high-performance React & Tailwind websites, rapid API routing, fluid interactive custom systems.",
      features: ["React & Vite Setup", "Tailwind Stylings", "API Integration", "SEO & Performance Tuning"],
      priceRange: "$500 - $2500"
    },
    {
      id: "video",
      icon: Film,
      title: "Video Editing",
      description: "Cinematic transition flow, high-impact business promos, reels/shorts tuning, precise color rendering, and clean sound balance.",
      features: ["Corporate Promos", "Social Media Edits", "Sound Design & SFX", "Color Correction & Grading"],
      priceRange: "$200 - $1000"
    }
  ];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !requirements) {
      addToast("Please fill in all order requirements", "error");
      return;
    }

    addToast(`Request for '${selectedService}' registered! Kazim will get back to you shortly.`, "success");
    setClientName("");
    setClientEmail("");
    setRequirements("");
    setModalOpen(false);
  };

  return (
    <section id="services" className="relative py-24 bg-[#17181a] border-y border-stone-800/20 text-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f0a631]">
            Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            What Am I Providing
          </h2>
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed font-light">
            If you want any of the following service please go on the freelance section there you can find some of the freelance platforms where I am available.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#202124] hover:bg-[#25262a] p-8 rounded-2xl border border-stone-800/60 hover:border-amber-500/30 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1.5"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-full bg-stone-800/60 group-hover:bg-[#f0a631]/10 flex items-center justify-center text-stone-400 group-hover:text-amber-500 transition-colors mb-6 shadow-inner border border-stone-750">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Service Title */}
                <h3 className="font-display font-semibold text-lg text-white mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Service Description */}
                <p className="text-stone-400 text-xs font-sans leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Highlight line */}
                <div className="w-0 group-hover:w-1/2 h-[2px] bg-amber-500 mt-6 rounded-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* Central Action CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 border-2 border-stone-700 hover:border-[#f0a631] text-stone-300 hover:text-white rounded-full text-xs font-sans font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 bg-[#202124] hover:bg-[#25262a] hover:shadow-[0_0_25px_rgba(240,166,49,0.15)] cursor-pointer"
          >
            Buy Service
          </button>
        </motion.div>

      </div>

      {/* Interactive Service Purchase Wizard Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-stone-950/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#1d1e21] border border-stone-800 rounded-3xl overflow-hidden shadow-2xl z-10 p-6 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-[#f0a631] tracking-widest uppercase">Service Portal</span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">Book a Design & Code Service</h3>
                <p className="text-stone-400 text-xs font-sans mt-2">
                  Send your requirements directly to Kazim. We'll outline your project and contact you with full terms of service.
                </p>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-4">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-mono mb-2">Select Expertise</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {services.map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setSelectedService(item.title)}
                        className={`py-3 px-2 text-xs rounded-xl font-display font-medium border text-center transition-all ${
                          selectedService === item.title
                            ? "border-[#f0a631] bg-[#f0a631]/10 text-white"
                            : "border-stone-800 bg-[#25262a] text-stone-400 hover:text-stone-200 hover:border-stone-700"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimate box */}
                <div className="bg-[#242529] p-4 rounded-xl border border-stone-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-sans">
                  <div>
                    <span className="text-stone-400">Selected: </span>
                    <span className="font-semibold text-white ml-1">{selectedService}</span>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <span className="text-stone-400">Estimate Rate: </span>
                      <span className="font-mono text-amber-500 font-bold ml-1">
                        {services.find(s => s.title === selectedService)?.priceRange}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-400">Delivery: </span>
                      <span className="text-[#f0a631] font-semibold ml-1">3-7 Days</span>
                    </div>
                  </div>
                </div>

                {/* Input Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-400 uppercase tracking-widest font-mono mb-1.5">Your Name</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Isaac Newton"
                      className="w-full bg-[#242529] border border-stone-800 hover:border-stone-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-stone-400 uppercase tracking-widest font-mono mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="e.g. isaac@gravity.org"
                      className="w-full bg-[#242529] border border-stone-800 hover:border-stone-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-xs text-stone-400 uppercase tracking-widest font-mono mb-1.5">Project Requirements & Timeline</label>
                  <textarea
                    rows={3}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Provide a brief summary of what you need (colors, style guide, pages, asset items)..."
                    className="w-full bg-[#242529] border border-stone-800 hover:border-stone-700 focus:border-amber-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Action submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#f0a631] hover:bg-amber-600 text-[#17181a] font-display font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-lg hover:shadow-[0_5px_15px_rgba(240,166,49,0.3)] cursor-pointer"
                >
                  Send Work Proposal
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
