import React from 'react';
import { BookOpen, FileText, Play } from 'lucide-react';

const Resources: React.FC = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'How AI is Reshaping UX Writing',
      type: 'Blog Post',
      description: 'Explore how artificial intelligence is transforming the way we approach UX writing and content design.',
      link: '#'
    },
    {
      icon: FileText,
      title: '5 Prompts for Faster Campaigns',
      type: 'Guide',
      description: 'Learn the best practices for crafting prompts that generate high-converting marketing copy.',
      link: '#'
    },
    {
      icon: Play,
      title: 'Using GhostWritePro with Figma',
      type: 'Video Tutorial',
      description: 'Watch how to seamlessly integrate GhostWritePro into your Figma workflow.',
      link: '#'
    }
  ];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Resources for Content Designers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-600 mb-2 block">
                {resource.type}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-600">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;