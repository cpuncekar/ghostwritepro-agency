import React, { useState } from 'react';
import { Wand2, AlertCircle } from 'lucide-react';
import { CopyFormData } from '../types';
import Select from './Select';

interface CopyFormProps {
  onSubmit: (data: CopyFormData) => void;
  isGenerating: boolean;
}

const CopyForm: React.FC<CopyFormProps> = ({ onSubmit, isGenerating }) => {
  const [formData, setFormData] = useState<CopyFormData>({
    description: '',
    copyType: 'Product Description',
    tone: 'Professional',
    platform: 'Web',
    audience: 'General Public'
  });

  const [error, setError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'description' && value.trim()) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.description.trim()) {
      setError('Please describe your product or campaign');
      return;
    }
    
    onSubmit(formData);
  };

  const copyTypeOptions = [
    'Product Description',
    'Email Subject',
    'Hero Headline',
    'UX Microcopy',
    'CTA Button'
  ];

  const toneOptions = [
    'Bold',
    'Professional',
    'Friendly',
    'Playful',
    'Luxury',
    'Fan-First'
  ];

  const platformOptions = ['Web', 'Mobile', 'Email', 'Ad', 'App'];

  const audienceOptions = [
    'Teens',
    'Designers',
    'Shoppers',
    'Gamers',
    'Golfers',
    'General Public'
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition-all duration-200 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Fill in the details
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Describe the product or campaign
          </label>
          <div className="relative">
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`w-full p-3 border ${
                error ? 'border-red-300' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
              placeholder="Enter details about your product or marketing campaign..."
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-500">
              {formData.description.length}/500
            </div>
          </div>
          {error && (
            <div className="flex items-center mt-1 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {error}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Copy Type"
            name="copyType"
            value={formData.copyType}
            onChange={handleChange}
            options={copyTypeOptions}
          />
          
          <Select
            label="Tone"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            options={toneOptions}
          />
          
          <Select
            label="Platform"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            options={platformOptions}
          />
          
          <Select
            label="Audience"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            options={audienceOptions}
          />
        </div>

        <button
          type="submit"
          disabled={isGenerating}
          className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-sm transition-all ${
            isGenerating 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'hover:bg-blue-700 hover:shadow'
          }`}
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" />
              Generate Copy
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default CopyForm;