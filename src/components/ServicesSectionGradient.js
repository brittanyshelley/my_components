import React from 'react';

// const services = [
//   {
//     title: 'Web Design',
//     description: 'Create beautiful, responsive websites.',
//     icon: '🎨', // You can replace these emojis with actual icons
//   },
//   {
//     title: 'Development',
//     description: 'Develop high-quality web applications.',
//     icon: '💻',
//   },
//   {
//     title: 'SEO',
//     description: 'Improve your website\'s visibility on search engines.',
//     icon: '🔍',
//   },
// ];

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


const ServiceCard = ({ service }) => (
  <div className="card w-auto bg-opacity-25 backdrop-blur-md text-black bg-black bg-opacity-50 bg-clip-padding backdrop-filter bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
    <div className="card-body items-center text-center">
      <div className="text-3xl">{service.icon}</div>
      <h2 className="card-title">{service.title}</h2>
      <p>{service.description}</p>
    </div>
  </div>
);

const ServicesSectionGradient = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-blue-500 to-white-600 text-black">
      <div className="container mx-auto px-4">
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

export default ServicesSectionGradient;
