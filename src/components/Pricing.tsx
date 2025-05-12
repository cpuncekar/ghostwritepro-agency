import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: '20 generations/month',
      features: [
        'Basic copy generation',
        'Standard response time',
        'Email support'
      ],
      buttonText: 'Start Free',
      buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'Pro',
      price: '19',
      description: 'Unlimited generations',
      features: [
        'Advanced copy generation',
        'Priority response time',
        'Priority support',
        'Custom templates'
      ],
      buttonText: 'Go Pro',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Includes team access',
      features: [
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800'
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                plan.popular ? 'border-2 border-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">
                 {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                </span>
                {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;