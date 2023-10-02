import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
        <div className="container mt-20 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      <Footer />
    </main>
  );
}
