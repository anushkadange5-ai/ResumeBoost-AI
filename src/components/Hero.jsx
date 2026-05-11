import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Purple radial glow background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-primary-100/60 via-primary-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6 border border-primary-200/60 shadow-sm shadow-primary-100"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Powered by Advanced AI
          </motion.span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Optimize Your Resume for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-primary-500 to-purple-400">
              Any Job
            </span>
          </h1>

          <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Beat the Applicant Tracking Systems (ATS). Upload your resume and job description to get instant, actionable feedback and increase your interview chances.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="animate-bounce p-2.5 bg-white rounded-full shadow-md shadow-primary-100 border border-primary-100 text-primary-500">
              <ArrowDown size={22} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
