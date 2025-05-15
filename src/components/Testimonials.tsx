
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Paramount Assist streamlined our equipment financing process, saving us valuable time and resources. Their team's expertise in the mining industry made all the difference.",
      author: "Sarah Johnson",
      position: "Operations Manager, GoldPeak Mining",
    },
    {
      quote: "When we needed to quickly scale our operations, Paramount's equipment hire service provided the perfect solution without the capital expenditure. Exceptional service from start to finish.",
      author: "Michael Torres",
      position: "CEO, Torres Exploration",
    },
    {
      quote: "The team at Paramount Assist understands the unique challenges of mining operations. Their tailored finance solutions helped us expand our fleet during a critical growth period.",
      author: "David Chen",
      position: "Financial Director, Eastern Resources",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Don't just take our word for it. Here's what mining companies across Australia have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md relative card-hover">
              <div className="text-5xl text-secondary absolute top-4 left-4 opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="border-t pt-4 border-gray-200">
                <p className="font-bold text-primary">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
