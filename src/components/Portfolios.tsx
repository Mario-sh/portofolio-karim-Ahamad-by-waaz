import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Heart, HeartOff, ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";

interface PortfoliosProps {
  addToast: (msg: string, type: "success" | "error" | "info") => void;
  portfolioImages: {
    urTalents: string;
    stationery: string;
    webUI: string;
    pizza: string;
    wLogo: string;
    responsiveWeb: string;
  };
}

export default function Portfolios({ addToast, portfolioImages }: PortfoliosProps) {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  
  // Custom interactive likes states
  const [likes, setLikes] = useState<Record<number, number>>({
    0: 42,
    1: 29,
    2: 56,
    3: 88,
    4: 37,
    5: 75,
  });
  const [userLikes, setUserLikes] = useState<Record<number, boolean>>({});

  const portfolioItems = [
    {
      id: 0,
      title: "UR Talents Luxury Branding",
      category: "Graphic Designing",
      image: portfolioImages.urTalents,
      description: "An elegant matte black corporate business card with gold foil embossing for a luxury consulting agency. Includes specialized typography styles.",
    },
    {
      id: 1,
      title: "Corporate Visual Systems",
      category: "Graphic Designing",
      image: portfolioImages.stationery,
      description: "A bright minimalist red and white branding stationery pattern. Built with repetitive grid lines and clean typography standards.",
    },
    {
      id: 2,
      title: "Creative Portfolio UI",
      category: "UI / UX Designing",
      image: portfolioImages.webUI,
      description: "A gorgeous dark-mode user interaction style layout. Includes rich grid displays, clean statistics visual boxes, and minimal layout cards.",
    },
    {
      id: 3,
      title: "Pizza Hot Deal Promotional Flyer",
      category: "Graphic Designing",
      image: portfolioImages.pizza,
      description: "An incredibly vibrant, mouth-watering pepperoni pizza visual social media layout with high contrast dark chalk elements and glowing colors.",
    },
    {
      id: 4,
      title: "Geometric Letter 'W' Identity",
      category: "UI / UX Designing",
      image: portfolioImages.wLogo,
      description: "A modernist custom geometric symbol designed strictly around minimalist axes with clean orange energy accents.",
    },
    {
      id: 5,
      title: "Responsive Agency Blueprint",
      category: "Web Development",
      image: portfolioImages.responsiveWeb,
      description: "A stellar representation of a website scaled perfectly across desktop, laptop, table, and mobile sizes to demonstrate complete responsive capabilities.",
    },
  ];

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = userLikes[id];
    if (isLiked) {
      setLikes((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setUserLikes((prev) => ({ ...prev, [id]: false }));
      addToast("Removed like from portfolio item", "info");
    } else {
      setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setUserLikes((prev) => ({ ...prev, [id]: true }));
      addToast("Co-designed with love! Thank you for liking Kazim's work.", "success");
    }
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex + 1) % portfolioItems.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex === null) return;
    setActiveItemIndex((activeItemIndex - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section id="portfolios" className="relative py-24 bg-[#1b1c1e] text-stone-100 overflow-hidden">
      
      {/* Absolute graphic lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f0a631]">
            Portfolios
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
            My Portfolios Collection
          </h2>
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed font-light">
            These are some of my own portfolios I made recently. Have a look at them and let me know, if you like them.
          </p>
          <div className="pt-4 flex justify-center">
            <div className="w-24 h-[1px] bg-stone-850" />
          </div>
        </div>

        {/* 3x2 Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const hasLiked = !!userLikes[item.id];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveItemIndex(item.id)}
                className="group relative bg-[#202124] rounded-2xl overflow-hidden shadow-lg border border-stone-800/40 cursor-zoom-in group hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Glassmorphic Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent">
                    <span className="text-[#f0a631] text-[10px] uppercase tracking-widest font-mono font-bold mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-white font-display font-semibold text-base mb-1 tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-stone-400 text-[11px] font-sans line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-800/60">
                      <div className="flex items-center gap-1 text-[11px] text-stone-300">
                        <Eye className="w-3.5 h-3.5 text-amber-500/80" />
                        <span>Interactive view</span>
                      </div>
                      <button
                        onClick={(e) => handleLike(item.id, e)}
                        className="flex items-center gap-1.5 text-xs text-stone-300 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        <Heart className={`w-4 h-4 transition-all duration-300 ${hasLiked ? "fill-red-500 text-red-500 scale-125" : ""}`} />
                        <span>{likes[item.id]}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Slider Gallery modal */}
      <AnimatePresence>
        {activeItemIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItemIndex(null)}
              className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"
            />

            {/* Slider Wrap */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-[#1d1e21] rounded-3xl border border-stone-805 overflow-hidden shadow-2xl z-10 grid grid-cols-1 lg:grid-cols-12 flex-row"
            >
              {/* Image Side */}
              <div className="lg:col-span-8 bg-stone-950/60 relative flex items-center justify-center aspect-[4/3] lg:aspect-auto min-h-[300px] md:min-h-[450px]">
                <img
                  src={portfolioItems[activeItemIndex].image}
                  alt={portfolioItems[activeItemIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[70vh] p-4"
                />

                {/* Arrow navigators inside image */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-[#f0a631] text-white hover:text-[#17181a] border border-stone-800/50 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 w-10 h-10 rounded-full bg-stone-900/80 hover:bg-[#f0a631] text-white hover:text-[#17181a] border border-stone-800/50 flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Info Details Specs Side */}
              <div className="lg:col-span-4 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800/80 bg-[#1d1e21] min-h-[300px]">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-widest font-mono text-[#f0a631] font-bold">
                      {portfolioItems[activeItemIndex].category}
                    </span>
                    <button
                      onClick={() => setActiveItemIndex(null)}
                      className="text-stone-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mt-3 leading-tight">
                    {portfolioItems[activeItemIndex].title}
                  </h3>

                  <div className="h-[1px] bg-stone-800 my-4" />

                  <p className="text-stone-300 text-sm font-sans leading-relaxed tracking-wide">
                    {portfolioItems[activeItemIndex].description}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center text-xs text-stone-400 py-1.5 border-b border-stone-850">
                      <span>Designed By:</span>
                      <span className="text-stone-200 font-semibold">Kazim Ahmad</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-stone-400 py-1.5 border-b border-stone-850">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full text-[10px] uppercase">Original Client Deliverable</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-stone-400 py-1.5 border-b border-stone-850">
                      <span>Software Specs:</span>
                      <span className="text-stone-200">Figma, Adobe Suite, React</span>
                    </div>
                  </div>
                </div>

                {/* Likes engagement footer */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-stone-850">
                  <button
                    onClick={(e) => handleLike(portfolioItems[activeItemIndex].id, e)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-display font-bold uppercase tracking-wider border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      userLikes[portfolioItems[activeItemIndex].id]
                        ? "bg-red-500/10 border-red-500/40 text-red-400"
                        : "bg-stone-800/30 hover:bg-stone-800/60 border-stone-800 text-stone-300 hover:text-white"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${userLikes[portfolioItems[activeItemIndex].id] ? "fill-red-400" : ""}`} />
                    <span>
                      {userLikes[portfolioItems[activeItemIndex].id] ? "Liked!" : "Like Project"} ({likes[portfolioItems[activeItemIndex].id]})
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
