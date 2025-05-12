import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GhostWritePro. All rights reserved.</p>
          <p className="mt-1">
            Designed for professional marketers and content creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;