import React from "react";


const services = [
  {
    title: 'Home Purchase Loans',
    description: 'Assist you in securing financing for buying a new home, offering competitive rates and guidance through the loan process.',
    icon: '🏠', // Replace with an icon that represents home buying
  },
  {
    title: 'Refinancing',
    description: 'Help you refinance your existing mortgage to take advantage of lower interest rates, reduce monthly payments, or access home equity.',
    icon: '🔄', // Replace with an icon that represents refinancing
  },
  {
    title: 'Mortgage Renewals',
    description: 'Manage the renewal of your mortgage at terms that benefit your financial goals, ensuring the best possible rate and terms.',
    icon: '📆', // Replace with an icon that represents renewals
  },
  {
    title: 'Commercial Mortgages',
    description: 'Provide financing options for purchasing, refinancing, or expanding commercial properties.',
    icon: '🏢', // Replace with an icon that represents commercial buildings
  },
  {
    title: 'Debt Consolidation',
    description: 'Consolidate multiple debt payments into a single mortgage payment at a lower interest rate, simplifying your finances and saving money.',
    icon: '💸', // Replace with an icon that represents saving money or consolidation
  },
];

const ServiceItem = ({ service }) => (
  <div className="py-4 px-6 bg-base-200 hover:bg-gray-100 rounded-lg text-center">
    <div className="text-3xl mb-2">{service.icon}</div> {/* Icon displayed on top */}
    <h2 className="text-xl font-bold">{service.title}</h2>
    <p>{service.description}</p>
  </div>
);

const ServicesSection6 = () => {
  return (
    <section className="py-10 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">My Services</h1>
          <p className="text-xl">What I can offer you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map(service => (
            <ServiceItem key={service.title} service={service} />
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


export default ServicesSection6;
