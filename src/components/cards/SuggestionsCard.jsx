import { motion } from 'framer-motion';
import { Lightbulb, ChevronRight } from 'lucide-react';

export default function SuggestionsCard({
  suggestions = [
    "Quantify your achievements in the 'Experience' section (e.g., 'Increased sales by 20%').",
    "Move 'Education' below 'Experience' since you have more than 3 years of professional experience.",
    "Use stronger action verbs (e.g., 'Spearheaded', 'Orchestrated') instead of 'Responsible for'.",
    "Add a brief professional summary at the top highlighting your core expertise in React and Node.js."
  ]
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-100/30 border border-primary-100/40"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-amber-50 text-amber-500 rounded-xl border border-amber-100">
          <Lightbulb size={20} className="fill-amber-100" />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Actionable Suggestions</h2>
      </div>

      <motion.ul variants={container} initial="hidden" animate="show" className="space-y-3">
        {suggestions.map((suggestion, idx) => (
          <motion.li
            key={idx}
            variants={item}
            className="flex items-start group p-4 rounded-2xl hover:bg-primary-50/40 transition-colors border border-transparent hover:border-primary-100/60"
          >
            <ChevronRight className="text-primary-400 mt-0.5 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={18} />
            <span className="text-slate-600 leading-relaxed text-sm md:text-base">
              {suggestion}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
