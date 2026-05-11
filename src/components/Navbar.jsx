import { Link } from 'react-router-dom';
import { FileText, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-purple-100/60 shadow-sm shadow-purple-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2.5 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 text-white p-1.5 rounded-xl shadow-md shadow-primary-500/30"
            >
              <FileText size={22} />
            </motion.div>
            <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary-600 transition-colors">
              Resume<span className="text-primary-600">AI</span>
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-primary-600 transition-colors"
            >
              <GitBranch size={20} />
            </a>
            <Link
              to="/"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-md shadow-primary-500/30 hover:shadow-lg hover:shadow-primary-500/40 hover:from-primary-700 hover:to-primary-600 transition-all duration-200"
            >
              Try for Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
