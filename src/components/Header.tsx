import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/e86b313527b29bbb0c11b3330c228e5fa22a2610.png';

interface HeaderProps {
  currentPage: 'home' | 'how-it-works' | 'rewards' | 'for-businesses';
  onNavigate: (page: 'home' | 'how-it-works' | 'rewards' | 'for-businesses', scrollTo?: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page: 'home' | 'how-it-works' | 'rewards' | 'for-businesses') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="HealthyHand" className="h-8 sm:h-10" />
          </button>

          {/* Desktop Navigation - Large clickable areas per Fitts's Law */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => handleNavigation('home')}
              className={`px-5 py-2.5 transition-colors ${
                currentPage === 'home' ? 'text-[#72C975]' : 'text-[#000000] hover:text-[#72C975]'
              }`}
              style={{ fontWeight: 500 }}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('how-it-works')}
              className={`px-5 py-2.5 transition-colors ${
                currentPage === 'how-it-works' ? 'text-[#72C975]' : 'text-[#000000] hover:text-[#72C975]'
              }`}
              style={{ fontWeight: 500 }}
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavigation('rewards')}
              className={`px-5 py-2.5 transition-colors ${
                currentPage === 'rewards' ? 'text-[#72C975]' : 'text-[#000000] hover:text-[#72C975]'
              }`}
              style={{ fontWeight: 500 }}
            >
              HealthyRewards
            </button>
            <button 
              onClick={() => handleNavigation('for-businesses')}
              className={`px-5 py-2.5 transition-colors ${
                currentPage === 'for-businesses' ? 'text-[#72C975]' : 'text-[#000000] hover:text-[#72C975]'
              }`}
              style={{ fontWeight: 500 }}
            >
              For Businesses
            </button>
          </nav>

          {/* Desktop CTA Button - Prominent per Fitts's Law */}
          <button 
            onClick={() => window.open('https://form.typeform.com/to/rvkGk9qc', '_blank')}
            className="hidden md:block px-6 lg:px-7 py-2.5 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
            style={{ fontWeight: 500 }}
          >
            Join Waitlist
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1F5721]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1F5721]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col items-center gap-2">
              <button 
                onClick={() => handleNavigation('home')}
                className={`w-full text-center px-5 py-3 transition-colors rounded-lg ${
                  currentPage === 'home' ? 'text-[#72C975] bg-[#F0F9ED]' : 'text-[#000000] hover:bg-gray-100'
                }`}
                style={{ fontWeight: 500 }}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('how-it-works')}
                className={`w-full text-center px-5 py-3 transition-colors rounded-lg ${
                  currentPage === 'how-it-works' ? 'text-[#72C975] bg-[#F0F9ED]' : 'text-[#000000] hover:bg-gray-100'
                }`}
                style={{ fontWeight: 500 }}
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavigation('rewards')}
                className={`w-full text-center px-5 py-3 transition-colors rounded-lg ${
                  currentPage === 'rewards' ? 'text-[#72C975] bg-[#F0F9ED]' : 'text-[#000000] hover:bg-gray-100'
                }`}
                style={{ fontWeight: 500 }}
              >
                HealthyRewards
              </button>
              <button 
                onClick={() => handleNavigation('for-businesses')}
                className={`w-full text-center px-5 py-3 transition-colors rounded-lg ${
                  currentPage === 'for-businesses' ? 'text-[#72C975] bg-[#F0F9ED]' : 'text-[#000000] hover:bg-gray-100'
                }`}
                style={{ fontWeight: 500 }}
              >
                For Businesses
              </button>
              
              {/* Mobile CTA Button - Centered and prominent */}
              <button 
                onClick={() => window.open('https://form.typeform.com/to/rvkGk9qc', '_blank')}
                className="w-full mt-2 px-7 py-3 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
                style={{ fontWeight: 500 }}
              >
                Join Waitlist
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}