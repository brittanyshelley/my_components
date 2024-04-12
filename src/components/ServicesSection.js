import React from 'react';

const services = [
  {
    title: 'Web Design',
    description: 'Create beautiful, responsive websites.',
    icon: '🎨', // You can replace these emojis with actual icons
  },
  {
    title: 'Development',
    description: 'Develop high-quality web applications.',
    icon: '💻',
  },
  {
    title: 'SEO',
    description: 'Improve your website\'s visibility on search engines.',
    icon: '🔍',
  },
];

const ServiceCard = ({ service }) => (
  <div className="card w-auto bg-base-100 text-base-content shadow-xl">
    <div className="card-body items-center text-center">
      <div className="text-3xl">{service.icon}</div>
      <h2 className="card-title">{service.title}</h2>
      <p>{service.description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-10 bg-base-200 text-base-content">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">My Services</h1>
          <p className="text-xl">What I can offer you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {services.map(service => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto font-sans my-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Exclusive Features</h2>
          <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
