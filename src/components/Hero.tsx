import heroImage from 'figma:asset/fbd473b170e07cd5460de2278a78827fdc78cc83.png';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F0F9ED]/30 to-white py-12 sm:py-16 md:py-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl leading-tight" 
              style={{ fontWeight: 600, letterSpacing: '-2px' }}
            >
              <span className="text-[#1F5721] whitespace-nowrap">Find Healthy Choices</span>
              <br />
              <span className="text-[#72C975]">Near You</span>
            </h1>
            
            <p className="text-[#000000]/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base" style={{ fontWeight: 400 }}>
              Discover your local wellness network. Earn rewards for eating well, staying active, and supporting health-focused businesses near you.
            </p>
            
            <div className="pt-4">
              <a 
                href="https://form.typeform.com/to/rvkGk9qc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 sm:px-12 py-4 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
                style={{ fontWeight: 500 }}
              >
                Join the Waitlist
              </a>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative flex items-center justify-center">
            <img 
              src={heroImage} 
              alt="HealthyHand App Screens" 
              className="relative z-10 w-full max-w-md sm:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}