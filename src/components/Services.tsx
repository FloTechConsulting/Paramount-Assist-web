
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Equipment Financing',
      description: 'Secure competitive financing for your mining equipment purchases with flexible repayment options tailored to your business needs.',
     
      
    },
    {
      title: 'Equipment Hire',
      description: 'Access our extensive fleet of mining equipment for short or long-term hire without the capital investment.',
      
     
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We provide comprehensive solutions to help mining companies access the equipment they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md card-hover border border-gray-200">
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button asChild className="btn-secondary">
                <Link to={service.link}>{service.buttonText}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
