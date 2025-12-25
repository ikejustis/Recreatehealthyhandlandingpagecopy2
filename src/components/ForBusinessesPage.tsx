import { MapPin, TrendingUp, BarChart3, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { BusinessFAQ } from './BusinessFAQ';

export function ForBusinessesPage() {
  const [formData, setFormData] = useState({
    yourName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    description: ''
  });

  const benefits = [
    {
      icon: MapPin,
      title: 'Exposure & High-Intent Customer Acquisition',
      description: 'Priority placement on the HealthyHand map (top results in their category), spotlight features in curated guides and weekly recommendations, placement in Premium+ personalized recommendation journeys, and in-app visibility during major events (conferences, festivals, pop-ups). You\'re delivering high-intent customers who are actively looking for healthy food, wellness services, or local experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Increase Visits',
      description: 'The listing fee covers ongoing promotion, including a full business profile page with photography, menu/services, and CTAs, social media spotlights on HealthyHand\'s channels, inclusion in seasonal campaigns (e.g., "Healthy Summer Picks," "Top Local Gyms"), promotion through run clubs, fitness groups, and community activations, and optional partnership in cross brand events and reward based campaigns. You\'re getting a consistent marketing engine working for you, not just a one time ad.'
    },
    {
      icon: BarChart3,
      title: 'Customer Insights + Loyalty Growth',
      description: 'Gain access to monthly insights report (traffic, views, clicks, user preferences), incentive driven loyalty through HealthyRewards, ability to run exclusive reward campaigns (e.g., 20% off smoothies = more repeat visits), and analytics that track who is visiting, what users search for, and what items/services attract attention. You get actionable data that most small businesses never receive, plus a built in loyalty and retention system.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-[#F0F9ED]/30 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1F5721]" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
            Grow Your Business with HealthyHand
          </h1>
          <p className="text-[#000000]/70 text-base sm:text-lg max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Connect with health-conscious customers and increase foot traffic to your business
          </p>
          <div className="pt-4">
            <button 
              onClick={() => document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 sm:px-12 py-4 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg" 
              style={{ fontWeight: 500 }}
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="bg-gradient-to-b from-white to-[#F0F9ED]/20 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] mb-4" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
              Why Partner With Us
            </h2>
            <p className="text-[#000000]/70 text-base sm:text-lg" style={{ fontWeight: 400 }}>
              Gain access to thousands of health-conscious customers in your area
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-[#F0F9ED]/40 border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:to-[#72C975]/10 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#72C975] to-[#5db861] rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-md">
                    <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl text-[#1F5721] mb-3" style={{ fontWeight: 600 }}>
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business FAQ Section */}
      <BusinessFAQ />

      {/* Partner Form Section */}
      <section id="partner-form" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] mb-3 sm:mb-4" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
              Partner With Us
            </h2>
            <p className="text-[#000000]/70 text-sm sm:text-base" style={{ fontWeight: 400 }}>
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name and Business Name Row */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="yourName" className="block text-[#1F5721] mb-2 text-sm sm:text-base" style={{ fontWeight: 500 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72C975] focus:outline-none text-sm sm:text-base"
                  style={{ fontWeight: 400 }}
                  required
                />
              </div>
              <div>
                <label htmlFor="businessName" className="block text-[#1F5721] mb-2 text-sm sm:text-base" style={{ fontWeight: 500 }}>
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72C975] focus:outline-none text-sm sm:text-base"
                  style={{ fontWeight: 400 }}
                  required
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="email" className="block text-[#1F5721] mb-2 text-sm sm:text-base" style={{ fontWeight: 500 }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72C975] focus:outline-none text-sm sm:text-base"
                  style={{ fontWeight: 400 }}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[#1F5721] mb-2 text-sm sm:text-base" style={{ fontWeight: 500 }}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72C975] focus:outline-none text-sm sm:text-base"
                  style={{ fontWeight: 400 }}
                  required
                />
              </div>
            </div>

            {/* Business Type Dropdown */}
            <div>
              <label htmlFor="businessType" className="block text-[#1F5721] mb-2 text-sm sm:text-base" style={{ fontWeight: 500 }}>
                Business Type
              </label>
              <div className="relative">
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-[#72C975] focus:outline-none text-sm sm:text-base appearance-none bg-white cursor-pointer"
                  style={{ fontWeight: 400 }}
                  required
                >
                  <option value="">Select your business type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                  <option value="juice-bar">Juice Bar</option>
                  <option value="farmers-market">Farmers Market</option>
                  <option value="wellness-studio">Wellness Studio</option>
                  <option value="gym">Gym/Fitness Center</option>
                  <option value="health-food-store">Health Food Store</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#72C975] pointer-events-none" />
              </div>
            </div>

            {/* Tell us about your business */}
            <div>
              <label htmlFor="description" className="block text-[#1F5721] mb-2 text-sm sm:text-base" style={{ fontWeight: 500 }}>
                Tell us about your business
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#72C975] focus:outline-none resize-none text-sm sm:text-base"
                style={{ fontWeight: 400 }}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-8 sm:px-10 py-3 bg-gradient-to-r from-[#1F5721] to-[#2a7530] text-white rounded-full border-2 border-[#1F5721] hover:from-white hover:to-white hover:text-[#1F5721] hover:border-[#72C975] transition-all shadow-md hover:shadow-lg"
                style={{ fontWeight: 500 }}
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}