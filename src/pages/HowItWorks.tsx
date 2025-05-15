
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const financeSteps = [
    {
      number: 1,
      title: "Complete Application",
      description: "Fill out our simple online application form providing details about your business and equipment needs."
    },
    {
      number: 2,
      title: "Document Upload",
      description: "Upload required documents to help us assess your application quickly and efficiently."
    },
    {
      number: 3,
      title: "Application Review",
      description: "Our team will review your application and provide a fast decision, usually within 24-48 hours."
    },
    {
      number: 4,
      title: "Receive Approval",
      description: "Upon approval, we'll present competitive finance options tailored to your business needs."
    },
    {
      number: 5,
      title: "Equipment Purchase",
      description: "Once you've selected your preferred option, we'll process the finance and arrange equipment purchase."
    }
  ];

  const hireSteps = [
    {
      number: 1,
      title: "Submit Inquiry",
      description: "Complete our equipment hire inquiry form with details of your project and requirements."
    },
    {
      number: 2,
      title: "Consultation",
      description: "Our team will contact you to discuss your specific needs and recommend suitable equipment."
    },
    {
      number: 3,
      title: "Receive Quote",
      description: "We'll provide a comprehensive quote detailing equipment specifications and hire terms."
    },
    {
      number: 4,
      title: "Agreement",
      description: "Review and sign the hire agreement to secure your equipment reservation."
    },
    {
      number: 5,
      title: "Equipment Delivery",
      description: "We'll arrange delivery and setup of your equipment at your mining site."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-gray-200">
            Simple, streamlined processes to get you the equipment you need.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Equipment Financing Process</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Our straightforward finance application process is designed to get you quick approval with minimal hassle.
            </p>
          </div>

          <div className="space-y-12 mb-12">
            {financeSteps.map((step) => (
              <div key={step.number} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-gray-50 rounded-lg shadow-sm card-hover">
                <div className="bg-primary text-white text-3xl font-bold h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild className="btn-secondary">
              <Link to="/finance">Apply for Finance</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Equipment Hire Process</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Need equipment without the long-term commitment? Our hire process is designed for flexibility.
            </p>
          </div>

          <div className="space-y-12 mb-12">
            {hireSteps.map((step) => (
              <div key={step.number} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-lg shadow-sm card-hover">
                <div className="bg-secondary text-primary text-3xl font-bold h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild className="btn-primary">
              <Link to="/hire">Inquire About Equipment Hire</Link>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default HowItWorks;
