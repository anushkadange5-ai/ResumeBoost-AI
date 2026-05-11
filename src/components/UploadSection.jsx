import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, File, X, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
  };

  const handleAnalyze = () => {
    if (!file || !jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    
    // Mock analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate('/results');
    }, 3000);
  };

  const isFormValid = file && jobDescription.trim().length > 10;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl shadow-primary-100/40 p-6 md:p-10 border border-primary-100/60"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              1. Upload Resume (PDF)
            </label>
            <div
              {...getRootProps()}
              className={clsx(
                "relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl transition-all cursor-pointer h-[240px]",
                isDragActive
                  ? "border-primary-500 bg-primary-50/60 scale-[1.01]"
                  : "border-slate-200 hover:border-primary-400 hover:bg-primary-50/30",
                file && "border-primary-300 bg-primary-50/40"
              )}
            >
              <input {...getInputProps()} />

              <AnimatePresence mode="wait">
                {!file ? (
                  <motion.div
                    key="upload"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center"
                  >
                    <div className="mx-auto w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center text-primary-500 shadow-sm">
                      <UploadCloud size={30} />
                    </div>
                    <p className="text-base font-semibold text-slate-700 mb-1">
                      Drag & drop your PDF here
                    </p>
                    <p className="text-sm text-slate-400">
                      or click to browse files
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="file"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <div className="w-16 h-16 mb-4 rounded-2xl bg-white shadow-md shadow-primary-100 border border-primary-100 flex items-center justify-center text-primary-500 relative group">
                      <File size={30} />
                      <button
                        onClick={removeFile}
                        className="absolute -top-2 -right-2 p-1 bg-red-100 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-slate-900 truncate max-w-full px-4">
                      {file.name}
                    </p>
                    <p className="text-xs text-primary-500 mt-1 flex items-center font-medium">
                      <CheckCircle2 size={12} className="mr-1" />
                      Ready to analyze
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Job Description */}
          <div className="flex flex-col">
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              2. Paste Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the target job description here to see how well your resume matches..."
              className="flex-1 w-full p-4 text-sm text-slate-900 bg-white border-2 border-slate-200 rounded-2xl focus:ring-0 focus:border-primary-400 transition-colors resize-none placeholder:text-slate-400 min-h-[240px] outline-none"
            />
          </div>

        </div>

        {/* Action Area */}
        <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center">
          <motion.button
            whileHover={isFormValid && !isAnalyzing ? { scale: 1.02 } : {}}
            whileTap={isFormValid && !isAnalyzing ? { scale: 0.98 } : {}}
            onClick={handleAnalyze}
            disabled={!isFormValid || isAnalyzing}
            className={clsx(
              "relative overflow-hidden group flex items-center justify-center px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 w-full md:w-auto min-w-[280px]",
              isFormValid && !isAnalyzing
                ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            )}
          >
            {isFormValid && !isAnalyzing && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center space-x-2 relative z-10"
                >
                  <Loader2 size={20} className="animate-spin" />
                  <span>Analyzing Match...</span>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center space-x-2 relative z-10"
                >
                  <Sparkles size={20} className={clsx(isFormValid ? "text-primary-200" : "text-slate-400")} />
                  <span>Analyze Resume</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
