import { MapPin, Plus, Gift, Award } from 'lucide-react';
import rewardsImage from 'figma:asset/93cee1af153e49f70acc3ce02dd799574fd329e4.png';

export function RewardsPage() {
  const steps = [
    {
      icon: MapPin,
      title: 'Check In',
      description: 'Visit participating locations and check in through the HealthyHand app'
    },
    {
      icon: Award,
      title: 'Earn Points',
      description: 'Get 1 HealthyReward per visit for healthy rewards'
    },
    {
      icon: Gift,
      title: 'Redeem',
      description: 'Exchange your HealthyRewards for perks at local businesses'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-[#F0F9ED]/30 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
                HealthyRewards - Your Reward Program
              </h1>
              <p className="text-[#000000]/70 text-base sm:text-lg" style={{ fontWeight: 400 }}>
                Earn points for making healthy choices at local businesses
              </p>
            </div>

            {/* Right Content - App Preview */}
            <div className="flex justify-center">
              <img 
                src={rewardsImage} 
                alt="HealthyRewards App Screen" 
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-white to-[#F0F9ED]/20 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] text-center mb-12 sm:mb-16" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            HealthyRewards - How It Works
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#72C975] rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
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
    </div>
  );
}