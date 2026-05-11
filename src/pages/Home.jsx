import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import UploadSection from '../components/UploadSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col relative">
        <Hero />
        <div className="relative -mt-10 lg:-mt-16 pb-20">
          <UploadSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
