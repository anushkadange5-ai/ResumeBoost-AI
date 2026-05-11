export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex justify-center md:justify-start">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              ResumeAI
            </span>
          </div>
          <div className="mt-8 md:mt-0 flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-100 pt-8 flex justify-center md:justify-between items-center flex-col md:flex-row">
          <p className="text-base text-slate-400">
            &copy; {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-4 md:mt-0 flex items-center">
            Built for professional success
          </p>
        </div>
      </div>
    </footer>
  );
}
