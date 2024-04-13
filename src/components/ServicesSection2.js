import React from 'react';
import Image from 'next/image';

const ServicesSection2 = () => {
  return (
    <section className="py-10 bg-base-200 text-base-content">
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-4">

        <div className="mt-16">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="relative w-full h-64 object-contain rounded-lg shadow-xl">
              <Image
                src="/img2.jpeg"
                alt="Customization"
                width={300} // Specify the width here
                height={500} // And the height here
                style={{ objectFit: 'cover', position: 'absolute', width: '100%', height: '100%' }}
                className="rounded-lg"
              />
            </div>
            <div className="justify-content-center text-center items-center">
              <h3 className="text-2xl font-extrabold mb-4 ">Customization</h3>
              <p className="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
              <button type="button"
                className="btn btn-primary mt-8">
                Read More
              </button>
            </div>
            <div className="order-first md:order-none">
              <h3 className="text-2xl font-extrabold mb-4">Performance</h3>
              <p className="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
              <button type="button"
                className="btn btn-primary mt-8">
                Read More
              </button>
            </div>
            <div className="relative w-full h-64 object-contain rounded-lg shadow-xl">
              <Image
                src="/img1.jpeg"
                alt="Customization"
                width={300} // Specify the width here
                height={500} // And the height here
                style={{ objectFit: 'cover', position: 'absolute', width: '100%', height: '100%' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection2;