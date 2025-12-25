import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is HealthyHand?',
      answer: 'HealthyHand is a platform that helps you discover and connect with local health-focused businesses like gyms, yoga studios, healthy restaurants, wellness centers, and more. Our mission is to make healthy living more accessible and rewarding for everyone.'
    },
    {
      question: 'Can I get points from any place on the app?',
      answer: 'No, you can only earn HealthyRewards points at establishments that display the HealthyRewards badge. Look for the green badge icon on business listings to know which locations participate in the rewards program.'
    },
    {
      question: 'What are the subscription options?',
      answer: 'HealthyHand offers both free and premium subscription tiers. The free version gives you full access to discover businesses and earn limited points. Premium members get to redeem their points for rewards, plus exclusive perks like bonus points and early access to special promotions.'
    },
    {
      question: 'How do I check my points balance?',
      answer: 'Your current points balance is displayed at the top of the app\'s home screen and in your profile section. You can also view your balance when checking in at locations.'
    },
    {
      question: 'Do points expire?',
      answer: 'Points remain active as long as you use the app at least once every 12 months. Inactive accounts may have points expire after 12 months of no activity.'
    },
    {
      question: 'Can I share or transfer points?',
      answer: 'Points are non-transferable between accounts. However, you can gift redeemed rewards to friends by selecting the "Gift" option when redeeming.'
    },
    {
      question: 'How do I redeem my HealthyRewards?',
      answer: 'Browse available rewards in the Rewards section of the app. Select the reward you want, confirm your redemption, and a unique code will be generated. Show this code to the participating business to claim your reward.'
    },
    {
      question: 'Is HealthyHand available in my area?',
      answer: 'HealthyHand is continuously expanding to new cities and regions. Enter your location in the app to see participating businesses near you. If we\'re not in your area yet, join our waitlist to be notified when we launch in your region.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1F5721] text-center mb-8 sm:mb-12" style={{ fontWeight: 600, letterSpacing: '-2px' }}>
          Frequently Asked Questions
        </h2>

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