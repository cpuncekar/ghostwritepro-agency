import React, { useState } from 'react';
import { GeneratedCopy } from '../types';
import { Copy, Check } from 'lucide-react';

interface CopyOutputProps {
  generatedCopy: GeneratedCopy | null;
  isGenerating: boolean;
}

const CopyOutput: React.FC<CopyOutputProps> = ({ generatedCopy, isGenerating }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (isGenerating) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 min-h-[250px] flex items-center justify-center transition-all">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-pulse rounded-full bg-blue-100 mb-4">
            <span className="inline-flex items-center justify-center h-full w-full">
              <Wand2 className="h-6 w-6 text-blue-600" />
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Generating your copy</h3>
          <p className="text-gray-500">Our AI is crafting the perfect words...</p>
        </div>
      </div>
    );
  }

  if (!generatedCopy) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8 min-h-[250px] flex items-center justify-center transition-all">
        <div className="text-center text-gray-500">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No copy generated yet
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Fill out the form and click "Generate Copy" to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 transition-all duration-200 hover:shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Your generated copy
        </h3>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          3 options
        </span>
      </div>

      <div className="space-y-4">
        {generatedCopy.results.map((copy, index) => (
          <div 
            key={index}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 transition-all hover:bg-blue-50"
          >
            <div className="flex justify-between mb-2">
              <span className="text-xs font-medium text-gray-500">Option {index + 1}</span>
              <button
                onClick={() => copyToClipboard(copy, index)}
                className="text-gray-500 hover:text-blue-600 transition-colors"
                title="Copy to clipboard"
              >
                {copiedIndex === index ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
            <p className="text-gray-800">{copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="h-4 w-4 rounded-full bg-green-400 mr-2"></span>
            <span className="text-sm text-gray-600">Generated using AI</span>
          </div>
          <span className="text-xs text-gray-500">
            {new Date().toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

// Add missing Wand2 icon
const Wand2 = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
    <path d="m14 7 3 3" />
    <path d="M5 6v4" />
    <path d="M19 14v4" />
    <path d="M10 2v2" />
    <path d="M7 8H3" />
    <path d="M21 16h-4" />
    <path d="M11 3H9" />
  </svg>
);

export default CopyOutput;