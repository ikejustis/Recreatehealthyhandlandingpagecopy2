import { Search, MapPin, Gift } from 'lucide-react';

interface HowItWorksProps {
  onNavigate?: (page: 'how-it-works') => void;
}

export function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Discover',
      description: 'Find the best healthy restaurants, fitness studios, and farmers markets near you with our curated map.'
    },
    {
      number: '2',
      icon: MapPin,
      title: 'Visit',
      description: 'Check in at locations to unlock special offers and earn HealthyPoints for every visit.'
    },
    {
      number: '3',
      icon: Gift,
      title: 'Redeem',
      description: 'Exchange your HealthyRewards for discounts, freebies, and exclusive experiences at partner locations.'
    }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            How HealthyHand Works
          </h2>
          <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
            Connecting you to your local wellness community in just 3 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-white to-[#F0F9ED]/30 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:from-white hover:to-[#72C975]/10 transition-all border border-gray-200 h-full">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-[#72C975] to-[#5db861] text-white rounded-full flex items-center justify-center shadow-md" style={{ fontWeight: 600 }}>
                  <span>{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#F0F9ED] rounded-full flex items-center justify-center mb-4 sm:mb-5 mx-auto">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#72C975]" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl text-[#1F5721] mb-3 text-center" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-[#000000]/70 leading-relaxed text-center text-sm sm:text-base" style={{ fontWeight: 400 }}>
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#72C975]/30 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-10 sm:mt-14">
          <button 
            onClick={() => onNavigate?.('how-it-works')}
            className="px-8 sm:px-10 py-3 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
            style={{ fontWeight: 500 }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}