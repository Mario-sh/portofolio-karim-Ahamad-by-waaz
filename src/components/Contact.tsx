import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Facebook, Instagram, Send, Copy, Check, Sparkles } from "lucide-react";

interface ContactProps {
  addToast: (msg: string, type: "success" | "error" | "info") => void;
}

export default function Contact({ addToast }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<any | null>(null);

  // Copy click state indicators
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const contactDetails = [
    {
      id: "phone",
      icon: Phone,
      value: "+92 333 6729529, +92 3166729318",
      link: "tel:+923336729529",
      label: "Phone",
    },
    {
      id: "email",
      icon: Mail,
      value: "kazimahmad.business@gmail.com",
      link: "mailto:kazimahmad.business@gmail.com",
      label: "Business Email",
    },
    {
      id: "facebook",
      icon: Facebook,
      value: "www.facebook.com/kazimahmad.22",
      link: "https://www.facebook.com/kazimahmad.22",
      label: "Facebook Profile",
    },
    {
      id: "instagram",
      icon: Instagram,
      value: "www.instagram.com/kazimahmad_22",
      link: "https://www.instagram.com/kazimahmad_22",
      label: "Instagram Profile",
    },
    {
      id: "telegram",
      icon: Send,
      value: "https://t.me/kazimahmad",
      link: "https://t.me/kazimahmad",
      label: "Telegram Account",
    },
  ];

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(value);
    addToast("Copied to clipboard!", "info");
    setTimeout(() => setCopiedValue(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      addToast("Please complete the whole contact form.", "error");
      return;
    }

    setSending(true);

    // Simulate sending progress
    setTimeout(() => {
      setSubmittedMessage({ name, email, subject, message });
      setSending(false);
      addToast(`Mail sent! Thank you ${name}. Your message is registered.`, "success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#1b1c1e] text-stone-100 overflow-hidden">
      
      {/* Absolute top separator border lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Hand Details Side (Grid spans 5 out of 12) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Header Texts */}
          <div className="space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f0a631] block">
              Contact Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              How To Contact Us
            </h2>
            <p className="text-stone-400 font-sans text-sm leading-relaxed font-light">
              You can contact us by completing given form. This form will directly send us a mail.
            </p>
          </div>

          {/* Contact coordinates links (capsules styled matching mockup image perfectly) */}
          <div className="space-y-4 pt-4">
            {contactDetails.map((detail) => {
              const IconComp = detail.icon;
              const isCopied = copiedValue === detail.value;

              return (
                <div
                  key={detail.id}
                  className="group relative flex items-center justify-between gap-4 p-4 rounded-full bg-[#202124] border border-stone-800/60 hover:border-amber-500/35 transition-all duration-300 w-full hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] group"
                >
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center gap-4 text-left select-all cursor-pointer min-w-0"
                  >
                    {/* Circle icon representation */}
                    <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center shrink-0 text-[#f0a631] group-hover:bg-[#f0a631]/10 group-hover:text-amber-500 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    {/* Value */}
                    <span className="text-stone-300 group-hover:text-white text-xs md:text-sm font-sans truncate tracking-wide">
                      {detail.value}
                    </span>
                  </a>

                  {/* Copy button */}
                  <button
                    onClick={() => handleCopy(detail.value)}
                    className="w-8 h-8 rounded-full bg-stone-850 hover:bg-[#e49420]/15 hover:text-[#f0a631] text-stone-500 flex items-center justify-center transition-all cursor-pointer mr-1 relative group/btn"
                    title={`Copy ${detail.label}`}
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 shrink-0 group-hover/btn:scale-105 transition-transform" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Hand Mail Form Side (Grid spans 7 out of 12) */}
        <div className="lg:col-span-7 bg-[#202124] rounded-3xl border border-stone-800/60 p-6 md:p-10 shadow-xl relative overflow-hidden">
          
          {/* Subtle decoration inside form */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Send Kazim Ahmad a Message
          </h3>

          <AnimatePresence mode="wait">
            {!submittedMessage ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSendMessage}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono uppercase text-stone-400 tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Marie Curie"
                      className="w-full bg-[#1b1c1e] border border-stone-800 hover:border-stone-750 focus:border-amber-500 rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono uppercase text-stone-400 tracking-wider">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. marie@physics.org"
                      className="w-full bg-[#1b1c1e] border border-stone-800 hover:border-stone-750 focus:border-amber-500 rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono uppercase text-stone-400 tracking-wider">Subject Title</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Design Proposal Consultation"
                    className="w-full bg-[#1b1c1e] border border-stone-800 hover:border-stone-750 focus:border-amber-500 rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-mono uppercase text-stone-400 tracking-wider">Message Content</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your brief project descriptions here so we can prepare suggestions..."
                    className="w-full bg-[#1b1c1e] border border-stone-800 hover:border-stone-750 focus:border-amber-500 rounded-2xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-[#f0a631] hover:bg-amber-600 text-[#17181a] font-display font-black uppercase text-xs tracking-widest rounded-2xl transition-all shadow-md hover:shadow-[0_4px_12px_rgba(240,166,49,0.3)] disabled:opacity-50 disabled:cursor-wait flex items-center justify-center gap-2 cursor-pointer"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#17181a] border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Email...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4' h-4" />
                      <span>Send Direct Mail</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-receipt"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-8 text-center space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-inner">
                  <Check className="w-8 h-8 animate-pulse" />
                </div>
                
                <h4 className="font-display font-bold text-lg text-white">
                  Message Transmitted Successfully!
                </h4>

                <div className="max-w-md bg-[#1b1c1e] border border-stone-800 rounded-2xl p-4 text-left font-sans text-xs space-y-1.5 text-stone-300">
                  <div>
                    <span className="text-stone-500">From:</span> {submittedMessage.name} ({submittedMessage.email})
                  </div>
                  <div>
                    <span className="text-stone-500">Subject:</span> {submittedMessage.subject}
                  </div>
                  <div className="border-t border-stone-850 mt-2 pt-2 line-clamp-3 italic text-stone-400">
                    "{submittedMessage.message}"
                  </div>
                </div>

                <button
                  onClick={() => setSubmittedMessage(null)}
                  className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-xs hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
