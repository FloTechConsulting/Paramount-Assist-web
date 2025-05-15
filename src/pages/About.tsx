
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      bio: "Sarah brings over 20 years of experience in mining equipment financing and operations management.",
    },
    {
      name: "Michael Torres",
      position: "Finance Director",
      bio: "Michael has extensive experience in structuring finance solutions for the mining sector.",
    },
    {
      name: "David Chen",
      position: "Operations Manager",
      bio: "David oversees our equipment fleet and ensures seamless delivery and setup for our clients.",
    },
    {
      name: "Emma White",
      position: "Client Relations Manager",
      bio: "Emma works closely with our clients to understand their needs and provide tailored solutions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Learn about our mission to support the mining industry with flexible equipment solutions.
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, Paramount Assist emerged from a simple observation: mining companies needed more flexible and responsive equipment financing and access options. 
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small consultancy has grown into a leading provider of mining equipment finance and hire solutions across Australia. Our deep understanding of the mining industry's unique challenges allows us to create tailored solutions that help operations of all sizes thrive.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have facilitated over $250 million in equipment financing and provided hire solutions to hundreds of mining operations nationwide.
              </p>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg">
              <img src="/placeholder.svg" alt="Paramount Assist team" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              At the core of everything we do are these fundamental principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">Industry Expertise</h3>
              <p className="text-gray-600 text-center">
                We understand mining operations and provide solutions that address the unique challenges of the industry.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">Client Partnership</h3>
              <p className="text-gray-600 text-center">
                We view our relationship with clients as a partnership, working together to achieve success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary text-center mb-4">Flexible Solutions</h3>
              <p className="text-gray-600 text-center">
                We create customized financing and hire options that adapt to the changing needs of mining operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Meet the experts behind Paramount Assist's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default About;
