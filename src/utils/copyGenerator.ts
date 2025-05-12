import { CopyFormData, GeneratedCopy } from '../types';

// This is a mock function that simulates generating AI copy
// In a real implementation, this would make an API call to a GPT service
export const generateAICopy = (formData: CopyFormData): GeneratedCopy => {
  const { description, copyType, tone, platform, audience } = formData;
  
  // Simple implementation to generate realistic-looking copy based on inputs
  const results = [
    generateCopyOption(description, copyType, tone, platform, audience, 1),
    generateCopyOption(description, copyType, tone, platform, audience, 2),
    generateCopyOption(description, copyType, tone, platform, audience, 3)
  ];
  
  return {
    results,
    metadata: {
      timestamp: new Date().toISOString(),
      promptTokens: Math.floor(Math.random() * 100) + 50,
      completionTokens: Math.floor(Math.random() * 200) + 100
    }
  };
};

// Helper function to generate a single copy option
const generateCopyOption = (
  description: string,
  copyType: string,
  tone: string,
  platform: string,
  audience: string,
  variant: number
): string => {
  // Extract keywords from description
  const keywords = extractKeywords(description);
  const keyword = keywords[variant % keywords.length] || 'product';

  // Generate copy based on the type
  switch (copyType) {
    case 'Product Description':
      return generateProductDescription(keyword, tone, audience);
    case 'Email Subject':
      return generateEmailSubject(keyword, tone, audience);
    case 'Hero Headline':
      return generateHeroHeadline(keyword, tone, audience);
    case 'UX Microcopy':
      return generateUXMicrocopy(keyword, platform, tone);
    case 'CTA Button':
      return generateCTAButton(tone, audience);
    default:
      return 'Generated copy would appear here.';
  }
};

// Helper to extract keywords from description
const extractKeywords = (description: string): string[] => {
  const words = description
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .split(' ')
    .filter(word => word.length > 3);
  
  return words.length > 0 ? words : ['product'];
};

// Generator functions for different copy types
const generateProductDescription = (keyword: string, tone: string, audience: string): string => {
  const toneAdjectives: Record<string, string[]> = {
    'Bold': ['revolutionary', 'game-changing', 'unmatched', 'extraordinary'],
    'Professional': ['premium', 'efficient', 'reliable', 'industry-leading'],
    'Friendly': ['helpful', 'easy-to-use', 'intuitive', 'delightful'],
    'Playful': ['fun', 'exciting', 'lively', 'entertaining'],
    'Luxury': ['exclusive', 'exquisite', 'refined', 'prestigious'],
    'Fan-First': ['authentic', 'community-driven', 'fan-favorite', 'beloved']
  };

  const audienceVerbs: Record<string, string[]> = {
    'Teens': ['discover', 'express', 'connect', 'share'],
    'Designers': ['create', 'visualize', 'transform', 'craft'],
    'Shoppers': ['find', 'explore', 'enjoy', 'indulge'],
    'Gamers': ['conquer', 'compete', 'level-up', 'master'],
    'Golfers': ['perfect', 'improve', 'elevate', 'dominate'],
    'General Public': ['experience', 'benefit from', 'appreciate', 'value']
  };

  const adj = toneAdjectives[tone][Math.floor(Math.random() * toneAdjectives[tone].length)];
  const verb = audienceVerbs[audience][Math.floor(Math.random() * audienceVerbs[audience].length)];

  return `Our ${adj} ${keyword} solution helps you ${verb} your goals with unparalleled quality and precision. Designed specifically for ${audience.toLowerCase()}.`;
};

const generateEmailSubject = (keyword: string, tone: string, audience: string): string => {
  const templates = [
    `${capitalize(keyword)}: Unlock new possibilities for ${audience}`,
    `Introducing our latest ${keyword} innovation for ${audience}`,
    `${capitalize(audience)}: See what our ${keyword} can do for you`,
    `Transform your ${keyword} experience - made for ${audience}`,
    `The ${keyword} solution that ${audience} have been waiting for`
  ];

  return templates[Math.floor(Math.random() * templates.length)];
};

const generateHeroHeadline = (keyword: string, tone: string, audience: string): string => {
  const toneTemplates: Record<string, string[]> = {
    'Bold': [
      `REVOLUTIONIZE YOUR ${keyword.toUpperCase()}`,
      `BREAK THE ${keyword.toUpperCase()} BARRIER`,
      `${keyword.toUpperCase()} LIKE NEVER BEFORE`
    ],
    'Professional': [
      `Optimize Your ${capitalize(keyword)} Strategy`,
      `The Professional's Choice for ${capitalize(keyword)}`,
      `Elevate Your ${capitalize(keyword)} Performance`
    ],
    'Friendly': [
      `Let's make ${keyword} simple together`,
      `Your ${keyword} journey just got easier`,
      `${capitalize(keyword)} made friendly for everyone`
    ],
    'Playful': [
      `${capitalize(keyword)} that makes you go wow!`,
      `Who knew ${keyword} could be this fun?`,
      `${capitalize(keyword)}? Yes please!`
    ],
    'Luxury': [
      `Exceptional ${capitalize(keyword)} for Discerning ${capitalize(audience)}`,
      `The Art of ${capitalize(keyword)}, Redefined`,
      `${capitalize(keyword)} Excellence, Exclusively Crafted`
    ],
    'Fan-First': [
      `${capitalize(keyword)} by fans, for fans`,
      `Join the ${capitalize(keyword)} community`,
      `${capitalize(audience)} love our ${keyword}. You will too.`
    ]
  };

  const templates = toneTemplates[tone] || toneTemplates['Professional'];
  return templates[Math.floor(Math.random() * templates.length)];
};

const generateUXMicrocopy = (keyword: string, platform: string, tone: string): string => {
  const platformSpecific: Record<string, string[]> = {
    'Web': [
      `Discover more ${keyword} options`,
      `Browse our ${keyword} collection`,
      `See how ${keyword} works for you`,
      `${capitalize(keyword)} details at a glance`
    ],
    'Mobile': [
      `Swipe to see ${keyword} options`,
      `Tap to explore ${keyword}`,
      `${capitalize(keyword)} on the go`,
      `Your ${keyword}, anywhere`
    ],
    'Email': [
      `Check your ${keyword} status`,
      `${capitalize(keyword)} update available`,
      `Your ${keyword} is waiting`,
      `${capitalize(keyword)} insights delivered`
    ],
    'Ad': [
      `${capitalize(keyword)} spotlight`,
      `Featured: ${capitalize(keyword)}`,
      `${capitalize(keyword)} - Limited time offer`,
      `${capitalize(keyword)} that stands out`
    ],
    'App': [
      `${capitalize(keyword)} insights at your fingertips`,
      `Track your ${keyword} progress`,
      `Personalize your ${keyword} experience`,
      `${capitalize(keyword)} notifications enabled`
    ]
  };

  const options = platformSpecific[platform] || platformSpecific['Web'];
  return options[Math.floor(Math.random() * options.length)];
};

const generateCTAButton = (tone: string, audience: string): string => {
  const toneSpecific: Record<string, string[]> = {
    'Bold': ['Get Started Now', 'Join the Revolution', 'Transform Today', 'Make It Happen'],
    'Professional': ['Request Demo', 'Learn More', 'Contact Sales', 'Start Free Trial'],
    'Friendly': ['Let\'s Go', 'Show Me How', 'Count Me In', 'Yes, Please!'],
    'Playful': ['Let\'s Play', 'Jump Right In', 'Grab Yours', 'Woohoo, Let\'s Go!'],
    'Luxury': ['Experience Now', 'Discover Excellence', 'Elevate Your Experience', 'Access Premium'],
    'Fan-First': ['Join the Community', 'Count Me In', 'I\'m a Fan', 'Sign Me Up']
  };

  const options = toneSpecific[tone] || toneSpecific['Professional'];
  return options[Math.floor(Math.random() * options.length)];
};

// Helper function to capitalize first letter
const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};