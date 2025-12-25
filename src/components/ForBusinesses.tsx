import { MapPin, TrendingUp, BarChart3 } from 'lucide-react';

interface ForBusinessesProps {
  onNavigate?: (page: 'for-businesses', scrollTo?: string) => void;
}

export function ForBusinesses({ onNavigate }: ForBusinessesProps) {
  const benefits = [
    {
      icon: MapPin,
      title: 'Exposure & High-Intent Customer Acquisition',
      description: 'Priority placement on the HealthyHand map, spotlight features in curated guides, and in-app visibility during major events',
      highlighted: false
    },
    {
      icon: TrendingUp,
      title: 'Increase Visits',
      description: 'Full business profile with photography, social media spotlights, seasonal campaigns, and promotion through run clubs and community activations',
      highlighted: true
    },
    {
      icon: BarChart3,
      title: 'Customer Insights + Loyalty Growth',
      description: 'Monthly insights report, incentive-driven loyalty through HealthyRewards, and analytics that track customer behavior and preferences',
      highlighted: false
    }
  ];

  const handlePartnerClick = () => {
    if (onNavigate) {
      onNavigate('for-businesses', 'partner-form');
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#F0F9ED]/20 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            For Businesses
          </h2>
          <p className="text-[#000000] max-w-3xl mx-auto text-sm sm:text-base" style={{ fontWeight: 400 }}>
            Join your local wellness network and connect with health-conscious customers
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl transition-all cursor-pointer ${
                benefit.highlighted
                  ? 'bg-gradient-to-br from-white to-[#72C975]/10 shadow-lg hover:shadow-xl hover:to-[#72C975]/20'
                  : 'bg-gradient-to-br from-white to-[#F0F9ED]/40 border border-gray-200 shadow-md hover:shadow-lg hover:to-[#72C975]/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#72C975] to-[#5db861] rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-md">
                  <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl text-[#1F5721] mb-3" style={{ fontWeight: 600 }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={handlePartnerClick}
            className="px-8 sm:px-10 py-3 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
            style={{ fontWeight: 500 }}
          >
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}