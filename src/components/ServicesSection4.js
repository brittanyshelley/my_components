export default function ServicesSection4() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 text-black flex justify-center items-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="bg-white/40 backdrop-blur-lg p-6 shadow-xl hover:scale-105 transition-transform">
          <h2 className="text-lg mb-2">Home Loans</h2>
          <p className="mb-4">We offer competitive rates for home purchasing and refinancing.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded">Button</button>
        </div>
        <div className="bg-white/30 backdrop-blur-lg p-6 rounded-lg hover:scale-105 transition-transform">
          <h2 className="text-lg mb-2">Investment Loans</h2>
          <p className="mb-4">Maximize your investment returns with tailored loan solutions.</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded">Button</button>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg hover:scale-105 transition-transform">
          <h2 className="text-lg mb-2">Card Title</h2>
          <p className="mb-4">Card content goes here...</p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded">Button</button>
        </div>
      </div>
    </div>
  );
}

