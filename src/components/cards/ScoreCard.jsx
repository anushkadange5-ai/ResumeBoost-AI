import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import clsx from 'clsx';

export default function ScoreCard({ score = 85 }) {
  // Determine color based on score
  const getColor = () => {
    if (score >= 80) return 'text-primary-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getBgColor = () => {
    if (score >= 80) return 'bg-primary-50 text-primary-700 border-primary-200';
    if (score >= 60) return 'bg-yellow-50 text-yellow-700 border-yellow-100';
    return 'bg-red-50 text-red-700 border-red-100';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-100/40 border border-primary-100/50 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Purple glow decoration */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-purple-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center space-x-2 mb-6 w-full justify-center">
        <Target className="text-primary-400" size={20} />
        <h2 className="text-lg font-semibold text-slate-700">ATS Match Score</h2>
      </div>

      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" className="stroke-slate-100" strokeWidth="8" fill="none" />
          <motion.circle
            initial={{ strokeDasharray: '0, 300' }}
            animate={{ strokeDasharray: `${(score / 100) * 283}, 300` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="50" cy="50" r="45"
            className={clsx("stroke-current", getColor())}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">
            {score}<span className="text-2xl text-slate-400 font-medium">%</span>
          </span>
        </div>
      </div>

      <div className={clsx("mt-6 px-4 py-2 rounded-full text-sm font-semibold border", getBgColor())}>
        {score >= 80 ? 'Excellent Match' : score >= 60 ? 'Good Match' : 'Needs Improvement'}
      </div>
    </motion.div>
  );
}
