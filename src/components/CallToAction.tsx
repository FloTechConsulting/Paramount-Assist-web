
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Mining Operations?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Whether you're looking to finance new equipment or hire for a specific project, 
            our team is ready to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md transition-all duration-300 font-semibold">
              <Link to="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
