
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-light text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mining Equipment <span className="text-secondary">Finance & Hire</span> Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Paramount Assist streamlines the process of securing financing and equipment hire for your mining operations. Save time, reduce costs, and get back to what matters most.
            </p>
          </div>
          <div className="hidden md:block animate-slide-in">
            <img 
              src="https://plantindex.co.za/wp-content/uploads/2022/05/cat-320-700x700.png" 
              alt="Mining Equipment" 
              className="w-full h-auto rounded-lg shadow-xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;