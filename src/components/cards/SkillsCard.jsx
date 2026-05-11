import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function SkillsCard({ 
  matching = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL'], 
  missing = ['AWS', 'Docker', 'CI/CD', 'PostgreSQL'] 
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
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-100/30 border border-primary-100/40 h-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Matching Skills */}
        <div>
          <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center mr-3">
              <Check className="text-primary-600" size={15} />
            </span>
            Matching Skills
          </h3>
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-2">
            {matching.map((skill, idx) => (
              <motion.span
                key={idx}
                variants={item}
                className="px-3 py-1.5 bg-primary-50/60 border border-primary-100 text-primary-700 rounded-lg text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Missing Skills */}
        <div>
          <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center">
            <span className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mr-3">
              <X className="text-red-500" size={15} />
            </span>
            Missing Skills
          </h3>
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-2">
            {missing.map((skill, idx) => (
              <motion.span
                key={idx}
                variants={item}
                className="px-3 py-1.5 bg-red-50/60 border border-red-100 text-red-700 rounded-lg text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          <p className="mt-4 text-xs text-slate-400 leading-relaxed">
            * Consider adding these keywords to your resume if you have experience with them, to improve your ATS score.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
