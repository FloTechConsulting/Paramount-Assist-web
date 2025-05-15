
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Paramount<span className="text-secondary">Assist</span></h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in mining equipment finance and hire solutions.
            </p>
            <p className="text-gray-300">
              © {new Date().getFullYear()} Paramount Assist. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors duration-300">Home</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-secondary transition-colors duration-300">How It Works</Link></li>
              <li><Link to="/finance" className="text-gray-300 hover:text-secondary transition-colors duration-300">Finance</Link></li>
              <li><Link to="/hire" className="text-gray-300 hover:text-secondary transition-colors duration-300">Equipment Hire</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-secondary transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-secondary transition-colors duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Mining Road</li>
              <li className="text-gray-300">Perth, WA 6000</li>
              <li className="text-gray-300">info@paramountassist.com</li>
              <li className="text-gray-300">(08) 1234 5678</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
