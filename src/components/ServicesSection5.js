// export default function ServicesSection5() {
//   return (
//     <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-10 text-black flex justify-center items-center">
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
//         <div className="bg-white/40 backdrop-blur-lg p-6 shadow-xl hover:scale-105 transition-transform">
//           <h2 className="text-lg mb-2">Home Loans</h2>
//           <p className="mb-4">We offer competitive rates for home purchasing and refinancing.</p>
//           <button className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-4 rounded">Learn More</button>
//         </div>
//         <div className="bg-white/30 backdrop-blur-lg p-6 rounded-lg hover:scale-105 transition-transform">
//           <h2 className="text-lg mb-2">Investment Loans</h2>
//           <p className="mb-4">Maximize your investment returns with tailored loan solutions.</p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded">Button</button>
//         </div>
//         <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg hover:scale-105 transition-transform">
//           <h2 className="text-lg mb-2">Card Title</h2>
//           <p className="mb-4">Card content goes here...</p>
//           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded">Button</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// const services = [
//   {
//     title: 'Home Purchase Loans',
//     description: 'Assist you in securing financing for buying a new home, offering competitive rates and guidance through the loan process.',
//     icon: '🏠', // Replace with an icon that represents home buying
//   },
//   {
//     title: 'Refinancing',
//     description: 'Help you refinance your existing mortgage to take advantage of lower interest rates, reduce monthly payments, or access home equity.',
//     icon: '🔄', // Replace with an icon that represents refinancing
//   },
//   {
//     title: 'Mortgage Renewals',
//     description: 'Manage the renewal of your mortgage at terms that benefit your financial goals, ensuring the best possible rate and terms.',
//     icon: '📆', // Replace with an icon that represents renewals
//   },
//   {
//     title: 'Commercial Mortgages',
//     description: 'Provide financing options for purchasing, refinancing, or expanding commercial properties.',
//     icon: '🏢', // Replace with an icon that represents commercial buildings
//   },
//   {
//     title: 'Debt Consolidation',
//     description: 'Consolidate multiple debt payments into a single mortgage payment at a lower interest rate, simplifying your finances and saving money.',
//     icon: '💸', // Replace with an icon that represents saving money or consolidation
//   },
// ];


// const ServiceCard = ({ service }) => (
//   <div className="card w-auto bg-base-100 text-base-content shadow-xl">
//     <div className="card-body items-center text-center">
//       <div className="text-3xl">{service.icon}</div>
//       <h2 className="card-title">{service.title}</h2>
//       <p>{service.description}</p>
//     </div>
//   </div>
// );

// const ServicesSection = () => {
//   return (
//     <section className="py-10 bg-base-200 text-base-content">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-bold">My Services</h1>
//           <p className="text-xl">What I can offer you</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
//           {services.map(service => (
//             <ServiceCard key={service.title} service={service} />
//           ))}
//         </div>
//       </div>
//       <div className="max-w-5xl mx-auto font-sans my-4">
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-3xl font-extrabold text-center mb-4">Our Exclusive Features</h2>
//           <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// import React from 'react';

// const services = [
//   {
//     title: 'Home Purchase Loans',
//     description: 'Assist you in securing financing for buying a new home, offering competitive rates and guidance through the loan process.',
//     icon: '🏠', // Replace with an icon that represents home buying
//   },
//   {
//     title: 'Refinancing',
//     description: 'Help you refinance your existing mortgage to take advantage of lower interest rates, reduce monthly payments, or access home equity.',
//     icon: '🔄', // Replace with an icon that represents refinancing
//   },
//   {
//     title: 'Mortgage Renewals',
//     description: 'Manage the renewal of your mortgage at terms that benefit your financial goals, ensuring the best possible rate and terms.',
//     icon: '📆', // Replace with an icon that represents renewals
//   },
//   {
//     title: 'Commercial Mortgages',
//     description: 'Provide financing options for purchasing, refinancing, or expanding commercial properties.',
//     icon: '🏢', // Replace with an icon that represents commercial buildings
//   },
//   {
//     title: 'Debt Consolidation',
//     description: 'Consolidate multiple debt payments into a single mortgage payment at a lower interest rate, simplifying your finances and saving money.',
//     icon: '💸', // Replace with an icon that represents saving money or consolidation
//   },
// ];

// const ServiceCard = ({ service }) => (
//   <div className="bg-white/40 backdrop-blur-lg p-6 shadow-xl hover:scale-105 transition-transform rounded-lg">
//     <div className="text-3xl mb-2">{service.icon}</div> {/* Icon added here */}
//     <div className="text-lg mb-2">{service.title}</div>
//     <div className="mb-4">{service.description}</div>
//     <button className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-4 rounded">Learn More</button>
//   </div>
// );

// export default function ServicesSection5() {
//   return (
//     <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-10 text-black flex justify-center items-center">
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
//         {services.map((service, index) => (
//           <ServiceCard key={index} service={service} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react';

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
    title: 'Line of Credit',
    description: 'Consolidate multiple debt payments into a single mortgage payment at a lower interest rate, simplifying your finances and saving money.',
    icon: '💸', // Replace with an icon that represents saving money or consolidation
  },
  {
    title: 'Small Business Loans',
    description: 'Consolidate multiple debt payments into a single mortgage payment at a lower interest rate, simplifying your finances and saving money.',
    icon: '💸', // Replace with an icon that represents saving money or consolidation
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white/40 backdrop-blur-lg p-6 shadow-xl hover:scale-105 transition-transform rounded-lg text-center">
    <div className="text-3xl mb-2">{service.icon}</div> {/* Icon added here */}
    <div className="text-lg mb-2">{service.title}</div>
    <div className="mb-4">{service.description}</div>
    <button className="bg-gradient-to-r from-blue-400 to-blue-800 text-white py-2 px-4 rounded">Learn More</button>
  </div>
);

export default function ServicesSection5() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-800 p-10 text-black flex justify-center items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}
