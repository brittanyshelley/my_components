import React from 'react';
import Image from 'next/image';

const ContactForm1 = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-orange-500 to-red-600 text-base-content">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 ">
        <div className="w-full md:flex-1 bg-base-100 rounded-lg p-6 shadow-lg">
          <h2 className="text-primary text-lg font-medium title-font mb-5">Get In Touch</h2>
          <form>
            <div className="form-control mb-4">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" id="name" name="name" placeholder="Brooke" className="input input-bordered w-full" />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" id="email" name="email" placeholder="brokerbrooke@brookeshelley.ca" className="input input-bordered w-full" />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea id="message" name="message" placeholder="Your Message" className="textarea textarea-bordered h-24" rows="4"></textarea>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="w-full md:flex-1 flex items-center justify-center">
          {/* Assuming you're using Next.js Image component. Adjust the width and height for smaller screens if needed */}
          <Image
            src="/img1.jpeg"
            alt="Mortgage Broker"
            width={500}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section >
  );
};

export default ContactForm1;

