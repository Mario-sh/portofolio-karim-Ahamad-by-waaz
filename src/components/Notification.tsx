import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface NotificationProps {
  toasts: Toast[];
  removeToast: (id: string) => void;
}

export default function Notification({ toasts, removeToast }: NotificationProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`p-4 rounded-xl shadow-2xl flex items-start gap-3 backdrop-blur-md border ${
              toast.type === "success"
                ? "bg-stone-900/90 border-amber-500/30 text-stone-100"
                : toast.type === "error"
                  ? "bg-red-950/90 border-red-500/30 text-red-200"
                  : "bg-stone-900/90 border-stone-700/50 text-stone-200"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            )}
            
            <div className="flex-1 text-sm font-sans tracking-wide">
              {toast.message}
            </div>

            <button
              onClick={() => removeToast(toast.id)}
              className="text-stone-400 hover:text-stone-100 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
