import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Workflow from '../components/Workflow';
import Footer from '../components/Footer';

export default function LandingLayout() {
  return (
    <div className="page-shell">
      <header className="hero">
        <Navbar />
        <Hero />
      </header>

      <main>
        <Features />
        <Workflow />
        <Footer />
      </main>
    </div>
  );
}
