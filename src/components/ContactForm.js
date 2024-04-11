import React from 'react';
import Image from 'next/image';

// const ContactForm = () => {
//   return (
//     <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 p-5">
//       <div className="flex-1 bg-white rounded-lg p-6 shadow-lg">
//         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Get In Touch</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
//             <input type="text" id="name" name="name" className="w-full p-2 text-gray-700 bg-white border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
//             <input type="email" id="email" name="email" className="w-full p-2 text-gray-700 bg-white border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Message</label>
//             <textarea id="message" name="message" className="w-full p-2 text-gray-700 bg-white border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="4"></textarea>
//           </div>
//           <button className="px-4 py-2 text-lg text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none">Submit</button>
//         </form>
//       </div>
//       <div className="flex-1 flex items-center justify-center">
//         <Image src="/img1.jpeg" alt="Mortgage Broker" width={500} height={300} objectFit="cover" />
//       </div>
//     </div>
//   );
// };




// const ContactForm = () => {
//   return (

//     <div className=" mx-auto flex flex-wrap md:flex-row sm:flex-col items-center justify-center gap-4 p-5 bg-gradient-to-r from-orange-500 to-red-600">
//       <div className="flex-1 bg-base-100 rounded-lg p-6 shadow-lg">
//         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Get In Touch</h2>
//         <form>
//           <div className="form-control mb-4">
//             <label htmlFor="name" className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input type="text" id="name" name="name" placeholder="Brooke" className="input input-bordered w-full" />
//           </div>
//           <div className="form-control mb-4">
//             <label htmlFor="email" className="label">
//               <span className="label-text">Email</span>
//             </label>
//             <input type="email" id="email" name="email" placeholder="brokerbrooke@brookeshelley.ca" className="input input-bordered w-full" />
//           </div>
//           <div className="form-control mb-4">
//             <label htmlFor="message" className="label">
//               <span className="label-text">Message</span>
//             </label>
//             <textarea id="message" name="message" placeholder="Your Message" className="textarea textarea-bordered h-24" rows="4"></textarea>
//           </div>
//           <button className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//       <div className="flex-1 flex items-center justify-center">
//         <Image src="/img1.jpeg" alt="Mortgage Broker" width={500} height={300} objectFit="cover" />
//       </div>
//     </div>
//   );
// };



// export default ContactForm;

const ContactForm = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 bg-gradient-to-r from-orange-500 to-red-600">
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
        <Image src="/img1.jpeg" alt="Mortgage Broker" layout="responsive" width={500} height={300} objectFit="cover" />
      </div>
    </div>
  );
};

export default ContactForm;

