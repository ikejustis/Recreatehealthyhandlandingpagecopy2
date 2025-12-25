import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Rewards } from './components/Rewards';
import { ForBusinesses } from './components/ForBusinesses';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { HowItWorksPage } from './components/HowItWorksPage';
import { RewardsPage } from './components/RewardsPage';
import { ForBusinessesPage } from './components/ForBusinessesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'how-it-works' | 'rewards' | 'for-businesses'>('home');

  const handleNavigate = (page: 'home' | 'how-it-works' | 'rewards' | 'for-businesses', scrollTo?: string) => {
    setCurrentPage(page);
    
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // If there's a specific section to scroll to, do it after a delay
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
          <HowItWorks onNavigate={handleNavigate} />
          <Rewards onNavigate={handleNavigate} />
          <ForBusinesses onNavigate={handleNavigate} />
          <FAQ />
          <Footer onNavigate={handleNavigate} />
        </>
      )}
      
      {currentPage === 'how-it-works' && (
        <>
          <HowItWorksPage />
          <Footer onNavigate={handleNavigate} />
        </>
      )}
      
      {currentPage === 'rewards' && (
        <>
          <RewardsPage />
          <Footer onNavigate={handleNavigate} />
        </>
      )}
      
      {currentPage === 'for-businesses' && (
        <>
          <ForBusinessesPage />
          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </div>
  );
}