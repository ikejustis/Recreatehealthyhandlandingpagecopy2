import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function BusinessFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is HealthyHand and how does it help my business?',
      answer: 'HealthyHand is a health & wellness discovery platform that connects high-intent, health-conscious customers with local businesses. We help drive foot traffic, repeat visits, and brand visibility through curated discovery, rewards, and events.'
    },
    {
      question: 'How does HealthyHand drive foot traffic?',
      answer: 'We use in-app map discovery, rewards for in-person visits, featured placements, event-based discovery, and post-workout and time-based recommendations. This encourages users to visit your location intentionally, not just view your listing.'
    },
    {
      question: 'How does the HealthyRewards system benefit my business?',
      answer: 'HealthyRewards incentivizes repeat visits without discounting your brand. Users earn points for checking in, engaging, or redeeming offers — which encourages loyalty, return visits, and increased frequency without relying on third-party delivery apps.'
    },
    {
      question: 'Do I have to offer discounts?',
      answer: 'No. You control your offers. Rewards can include free add-ons, limited perks, exclusive items, or event access. You decide what makes sense for your margins and brand.'
    },
    {
      question: 'What does the Admin Portal allow my business to do?',
      answer: 'Through the HealthyHand Admin Portal, businesses can create and manage offers, update menus, services, and subscriptions, add events and pop-ups, apply for featured placement, view engagement analytics, and track redemptions and visits. All in one simple dashboard.'
    },
    {
      question: 'How does featured placement work?',
      answer: 'Featured partners receive front-page visibility, priority map placement, highlighted deals and events, and increased discovery during high-traffic periods. This is ideal for launches, new offerings, or seasonal promotions.'
    },
    {
      question: 'How much does it cost to partner with HealthyHand?',
      answer: 'We offer paid partner listings designed to deliver real ROI: $2,500 quarterly or $8,000 annually. Founding Partner rates available for early collaborators. This ensures partners receive intentional exposure — not diluted listings.'
    },
    {
      question: 'Why is there a listing fee?',
      answer: 'The listing fee ensures curated quality over quantity, serious partners invested in growth, higher visibility per business, and better customer targeting. HealthyHand is designed as a growth channel, not a free directory.'
    },
    {
      question: 'Can HealthyHand support events or pop-ups?',
      answer: 'Yes. We actively promote classes, tastings, pop-ups, and wellness activations. Events are surfaced to users who are most likely to attend.'
    },
    {
      question: 'What\'s the next step to get started?',
      answer: 'Simply book a 15–20 minute intro call. We\'ll walk through the platform, discuss your goals, and explore whether HealthyHand is a fit for your business.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#F0F9ED]/20 to-white py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] text-center mb-4" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
          Business FAQ
        </h2>
        <p className="text-center text-[#000000]/70 mb-8 sm:mb-12 text-sm sm:text-base" style={{ fontWeight: 400 }}>
          Designed to Drive Buy-In
        </p>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#F5F5F5] transition-colors"
              >
                <span className="text-[#000000] text-sm sm:text-base flex-1" style={{ fontWeight: 500 }}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#72C975] transition-transform flex-shrink-0 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-[#000000]/70 leading-relaxed text-sm sm:text-base" style={{ fontWeight: 400 }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}