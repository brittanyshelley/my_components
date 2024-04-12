// components/ServicesSection.js
import Image from 'next/image';

const services = [
  {
    title: 'Home Loans',
    description: 'We offer competitive rates for home purchasing and refinancing.',
    imageUrl: '/img2.jpeg', // Replace with your image path
  },
  {
    title: 'Investment Loans',
    description: 'Maximize your investment returns with tailored loan solutions.',
    imageUrl: '/img4.jpeg', // Replace with your image path
  },
  {
    title: 'Commercial Loans',
    description: 'Flexible financing options for your business needs.',
    imageUrl: "/img1.jpeg", // Replace with your image path
  },
];

const ServicesSection3 = () => {
  return (
    <div className="py-12 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <Image src={service.imageUrl} alt={service.title} width={400} height={250} layout="responsive" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection3;
