import React, { useState } from 'react';
import CopyForm from './CopyForm';
import CopyOutput from './CopyOutput';
import { CopyFormData, GeneratedCopy } from '../types';
import { generateAICopy } from '../utils/copyGenerator';

const CopyGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedCopy, setGeneratedCopy] = useState<GeneratedCopy | null>(null);

  const handleGenerateCopy = async (formData: CopyFormData) => {
    setIsGenerating(true);
    setGeneratedCopy(null);
    
    try {
      // Simulate API call delay
      setTimeout(() => {
        const results = generateAICopy(formData);
        setGeneratedCopy(results);
        setIsGenerating(false);
      }, 1500);
    } catch (error) {
      console.error('Error generating copy:', error);
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          AI-Powered Copy Generator
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate compelling, branded copy for your marketing campaigns in seconds.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        <CopyForm onSubmit={handleGenerateCopy} isGenerating={isGenerating} />
        <CopyOutput 
          generatedCopy={generatedCopy} 
          isGenerating={isGenerating} 
        />
      </div>
    </div>
  );
};

export default CopyGenerator;