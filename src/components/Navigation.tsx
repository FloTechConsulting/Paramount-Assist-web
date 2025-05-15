import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  const navLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Finance', href: '/finance' },
    { name: 'Equipment Hire', href: '/hire' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const getDashboardLink = () => {
    if (userRole === 'admin') return '/admin/dashboard';
    if (userRole === 'applicant') return '/applicant/dashboard';
    return '/login';
  };

  const getActionButton = () => {
    if (!userRole) {
      return (
        <Button asChild className="btn-secondary ml-4">
          <Link to="/login">Login</Link>
        </Button>
      );
    }

    return (
      <div className="flex items-center gap-4">
        <Button asChild className="btn-primary">
          <Link to={getDashboardLink()}>Dashboard</Link>
        </Button>
        <Button onClick={handleLogout} variant="outline">
          Logout
        </Button>
      </div>
    );
  };

  return (
    <nav className="bg-primary py-4 sticky top-0 z-50 shadow-md">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl text-white">
            Paramount<span className="text-secondary">Assist</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          {getActionButton()}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-light absolute w-full z-50 shadow-lg animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-secondary transition-colors duration-300 py-2 border-b border-gray-700"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              {getActionButton()}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;