import { Instagram, Linkedin } from 'lucide-react';
import logo from 'figma:asset/e86b313527b29bbb0c11b3330c228e5fa22a2610.png';

interface FooterProps {
  onNavigate?: (page: 'home' | 'how-it-works' | 'rewards' | 'for-businesses') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F0F9ED]/30">
      {/* Waitlist CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            Be the First to Discover a Healthier Way to Live
          </h2>
          <p className="text-[#000000] max-w-3xl mx-auto text-sm sm:text-base" style={{ fontWeight: 400 }}>
            Get early access and be among the first to experience a healthier way to live.
          </p>

          {/* Join Waitlist Button */}
          <div className="flex justify-center pt-2">
            <a 
              href="https://form.typeform.com/to/rvkGk9qc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-12 py-4 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
              style={{ fontWeight: 500 }}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Brand Column */}
            <div className="space-y-4 text-center sm:text-left">
              <img src={logo} alt="HealthyHand" className="h-8 sm:h-10 mx-auto sm:mx-0" />
              <p className="text-[#000000]/70 text-sm sm:text-base" style={{ fontWeight: 400 }}>
                Your guide to locally sourced healthy living.
              </p>
            </div>

            {/* Explore Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-[#1F5721] mb-4" style={{ fontWeight: 600 }}>Explore</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => onNavigate?.('home')}
                    className="text-[#000000]/70 hover:text-[#72C975] transition-colors text-left text-sm sm:text-base" 
                    style={{ fontWeight: 400 }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('how-it-works')}
                    className="text-[#000000]/70 hover:text-[#72C975] transition-colors text-left text-sm sm:text-base" 
                    style={{ fontWeight: 400 }}
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('rewards')}
                    className="text-[#000000]/70 hover:text-[#72C975] transition-colors text-left text-sm sm:text-base" 
                    style={{ fontWeight: 400 }}
                  >
                    HealthyRewards
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate?.('for-businesses')}
                    className="text-[#000000]/70 hover:text-[#72C975] transition-colors text-left text-sm sm:text-base" 
                    style={{ fontWeight: 400 }}
                  >
                    For Businesses
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="text-center sm:text-left">
              <h4 className="text-[#1F5721] mb-4" style={{ fontWeight: 600 }}>Connect</h4>
              <div className="flex gap-3 mb-4 justify-center sm:justify-start">
                <a 
                  href="#instagram" 
                  className="w-10 h-10 bg-[#F0F9ED] rounded-full flex items-center justify-center hover:bg-[#72C975]/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-[#72C975]" />
                </a>
                <a 
                  href="#linkedin" 
                  className="w-10 h-10 bg-[#F0F9ED] rounded-full flex items-center justify-center hover:bg-[#72C975]/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-[#72C975]" />
                </a>
              </div>
              <a href="mailto:hello@healthyhand.com" className="text-[#000000]/70 hover:text-[#72C975] transition-colors text-sm sm:text-base" style={{ fontWeight: 400 }}>
                hello@healthyhand.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[#000000]/70 text-xs sm:text-sm">
            <p style={{ fontWeight: 400 }}>© 2025 HealthyHand. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#privacy" className="hover:text-[#72C975] transition-colors" style={{ fontWeight: 400 }}>
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-[#72C975] transition-colors" style={{ fontWeight: 400 }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}