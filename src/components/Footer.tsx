import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-poppins font-light text-sm mb-4 md:mb-0">
            © 2024 Alex Morgan. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-400 font-poppins font-light text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;