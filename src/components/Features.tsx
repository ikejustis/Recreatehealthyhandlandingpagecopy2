import { Coffee, Activity, ShoppingBag, Award } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: 'Healthy Dining',
      description: 'Discover local health-forward restaurants and juice bars',
      color: 'bg-green-100',
      iconColor: 'text-green-700'
    },
    {
      icon: Activity,
      title: 'Fitness & Yoga',
      description: 'Find nearby fitness and yoga studios',
      color: 'bg-green-100',
      iconColor: 'text-green-700'
    },
    {
      icon: ShoppingBag,
      title: 'Wellness Shops',
      description: 'Explore wellness shops and services',
      color: 'bg-green-100',
      iconColor: 'text-green-700'
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Earn HealthyRewards with each visit and redeem for healthy rewards',
      color: 'bg-green-100',
      iconColor: 'text-green-700'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#F0F9ED]/20 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            Your Local Wellness Companion
          </h2>
          <p className="text-[#000000] max-w-3xl mx-auto leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
            HealthyHand connects you with nearby wellness spots from cafes and smoothie bars to gyms, yoga studios, and holistic shops in your community. Whether you're looking for a quick post workout smoothie or a new place to unwind, HealthyHand helps you find it fast.
          </p>
        </div>

        {/* Feature Cards - Large clickable areas with visual appeal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white to-[#F0F9ED]/40 border border-gray-200 hover:shadow-lg hover:from-white hover:to-[#72C975]/10 transition-all cursor-pointer"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-[#F0F9ED] to-[#72C975]/20 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-5 group-hover:from-[#72C975]/10 group-hover:to-[#72C975]/20 transition-colors">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#72C975]" strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="text-[#1F5721] mb-2" style={{ fontWeight: 600 }}>
                {feature.title}
              </h3>
              <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}