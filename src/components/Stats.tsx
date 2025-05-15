
import React from 'react';

const Stats = () => {
  const stats = [
    { value: '$250M+', label: 'in Equipment Financed' },
    { value: '15+', label: 'Years of Experience' },
    { value: '500+', label: 'Mining Clients' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
