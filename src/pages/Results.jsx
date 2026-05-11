import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScoreCard from '../components/cards/ScoreCard';
import SkillsCard from '../components/cards/SkillsCard';
import SuggestionsCard from '../components/cards/SuggestionsCard';

export default function Results() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-slate-50 via-primary-50/20 to-slate-50">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-primary-600 transition-colors mb-4"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Upload
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Analysis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Results
            </span>
          </h1>
          <p className="text-slate-500 mt-2">
            Here's how well your resume matches the job description.
          </p>
        </motion.div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Score */}
          <div className="lg:col-span-1">
            <ScoreCard score={72} />
          </div>

          {/* Right Column: Skills */}
          <div className="lg:col-span-2">
            <SkillsCard />
          </div>

          {/* Full Width: Suggestions */}
          <div className="lg:col-span-3">
            <SuggestionsCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
