import missionImage from 'figma:asset/835641af96e591779c7559427451142220aba962.png';
import businessImage from 'figma:asset/dcd8f15aa8ce24552825edd87a9ca1d63ae45e84.png';
import { Search, MapPin, Award, Check, TrendingUp, Users, Heart } from 'lucide-react';

export function HowItWorksPage() {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Explore',
      description: 'Find health-focused restaurants, cafes, farmers markets, and wellness spots nearby.'
    },
    {
      number: '2',
      icon: MapPin,
      title: 'Visit & Support',
      description: 'Choose local businesses over big chains and make every visit meaningful.'
    },
    {
      number: '3',
      icon: Award,
      title: 'Earn Points',
      description: 'Redeem HealthyRewards when you check in and support participating businesses.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-[#F0F9ED]/30 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            Discover How HealthyHand Connects People to Healthier Living
          </h1>
          <p className="text-[#000000]/70 text-base sm:text-lg max-w-3xl mx-auto pt-2 pb-8" style={{ fontWeight: 400 }}>
            Empowering your community by bringing together local food, wellness, and rewards all in one app.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-gradient-to-b from-white to-[#F0F9ED]/20 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-[#F0F9ED]/30 border border-[#E5E5E5] rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#72C975] to-[#5db861] rounded-full flex items-center justify-center mx-auto shadow-md mb-4">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
                Our Mission
              </h2>
              <h3 className="text-lg sm:text-xl text-[#1F5721]" style={{ fontWeight: 500 }}>
                Making Healthy Living Local, Accessible, and Rewarding
              </h3>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                HealthyHand was created to help health-conscious people easily discover nutritious food spots, wellness studios, and markets in their area—while giving community-focused businesses the visibility they deserve. We believe in creating meaningful connections that benefit both consumers and local establishments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] text-center mb-12 sm:mb-16" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            How It Works
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-[#F0F9ED]/40 border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:to-[#72C975]/10 transition-all group"
              >
                {/* Number Badge */}
                <div className="bg-gradient-to-br from-[#1F5721] to-[#2a7530] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-md" style={{ fontWeight: 600 }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#72C975] to-[#5db861] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl text-[#1F5721] mb-3" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Local Businesses Section */}
      <section className="bg-gradient-to-b from-white via-[#F0F9ED]/20 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-white to-[#F0F9ED]/50 border border-[#E5E5E5] rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#72C975] to-[#5db861] rounded-full flex items-center justify-center mx-auto shadow-md mb-4">
                <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
                For Businesses
              </h2>
              <h3 className="text-lg sm:text-xl text-[#1F5721]" style={{ fontWeight: 500 }}>
                Shine a Light on Your Business
              </h3>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                HealthyHand isn't just for users, it's for the community. We help local establishments reach new audiences, increase foot traffic, and grow their visibility through our curated platform and promotional features.
              </p>

              {/* Checkmark List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6 max-w-3xl mx-auto">
                <div className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 bg-[#72C975]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#72C975]" strokeWidth={3} />
                  </div>
                  <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
                    Spotlight your menu, products, or services
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 bg-[#72C975]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#72C975]" strokeWidth={3} />
                  </div>
                  <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
                    Get featured on curated guides and seasonal lists
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left sm:col-span-2 sm:justify-center">
                  <div className="w-6 h-6 bg-[#72C975]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#72C975]" strokeWidth={3} />
                  </div>
                  <p className="text-[#000000] text-sm sm:text-base" style={{ fontWeight: 400 }}>
                    Join for free with no upfront costs
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="px-8 sm:px-10 py-3 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" style={{ fontWeight: 500 }}>
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="bg-gradient-to-b from-white via-[#F0F9ED]/10 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#72C975] to-[#5db861] rounded-full flex items-center justify-center mx-auto shadow-md mb-4">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
              Why It Matters
            </h2>
            <h3 className="text-lg sm:text-xl text-[#1F5721]" style={{ fontWeight: 500 }}>
              Healthy Communities Start Local
            </h3>
            <p className="text-[#000000]/70 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
              When people choose local health-conscious businesses, it creates a ripple effect: supporting small businesses, promoting better eating habits, and building a vibrant, connected city.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white to-[#F0F9ED]/40 border border-[#E5E5E5] p-8 sm:p-10 rounded-2xl text-center shadow-lg hover:shadow-xl hover:to-[#72C975]/10 transition-all">
              <div className="text-5xl sm:text-6xl text-[#1F5721] mb-4" style={{ fontWeight: 600 }}>
                40%
              </div>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                of visitors say they want healthier local food options but struggle to find them
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-[#F0F9ED]/40 border border-[#E5E5E5] p-8 sm:p-10 rounded-2xl text-center shadow-lg hover:shadow-xl hover:to-[#72C975]/10 transition-all">
              <div className="text-5xl sm:text-6xl text-[#1F5721] mb-4" style={{ fontWeight: 600 }}>
                25%
              </div>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                increase in visits for local restaurants when featured in discovery apps
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}