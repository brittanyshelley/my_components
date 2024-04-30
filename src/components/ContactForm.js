// import React, { useState } from 'react';
// import Image from 'next/image';
// import { supabase } from '../services/supabase/supabaseClient'; // Adjust path as necessary

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     console.log("Submitting form");
//     // Insert form data into Supabase
//     const { data, error } = await supabase.from('contacts').insert([
//       { name, email, message }
//     ]);

//     if (error) {
//       console.error('Error inserting data:', error.message);
//       alert('Failed to submit contact form: ${error.message}');
//     } else {
//       alert('Form submitted successfully!');
//       setName('');
//       setEmail('');
//       setMessage(''); // Reset form fields after submission
//     }
//   };

//   return (
//     <section className="py-10 bg-gradient-to-r from-orange-500 to-red-600 text-base-content">
//       <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 ">
//         <div className="w-full md:flex-1 bg-base-100 rounded-lg p-6 shadow-lg">
//           <h2 className="text-primary text-lg font-medium title-font mb-5">Get In Touch</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-control mb-4">
//               <label htmlFor="name" className="label">
//                 <span className="label-text">Name</span>
//               </label>
//               <input type="text" id="name" name="name" placeholder="Brooke" className="input input-bordered w-full" value={name} onChange={e => setName(e.target.value)} />
//             </div>
//             <div className="form-control mb-4">
//               <label htmlFor="email" className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input type="email" id="email" name="email" placeholder="brokerbrooke@brookeshelley.ca" className="input input-bordered w-full" value={email} onChange={e => setEmail(e.target.value)} />
//             </div>
//             <div className="form-control mb-4">
//               <label htmlFor="message" className="label">
//                 <span className="label-text">Message</span>
//               </label>
//               <textarea id="message" name="message" placeholder="Your Message" className="textarea textarea-bordered h-24" rows="4" value={message} onChange={e => setMessage(e.target.value)}></textarea>
//             </div>
//             <button className="btn btn-primary" type="submit">Submit</button>
//           </form>
//         </div>
//         <div className="w-full md:flex-1 flex items-center justify-center">
//           <Image
//             src="/img1.jpeg"
//             alt="Mortgage Broker"
//             width={500}
//             height={300}
//             style={{ objectFit: 'cover' }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


import React, { useState } from 'react';
import Image from 'next/image'; // Ensure the Image component is imported if using Next.js
import { supabase } from '../services/supabase/supabaseClient';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to handle loading state of the form

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Submitting form");

    // Basic validation to ensure no fields are empty
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('All fields are required.');
      return;
    }

    setIsLoading(true); // Start loading

    // Insert form data into Supabase
    const { data, error } = await supabase.from('contacts').insert([
      { name, email, message }
    ]);

    setIsLoading(false); // Stop loading regardless of the outcome

    if (error) {
      console.error('Error inserting data:', error.message);
      alert(`Failed to submit contact form: ${error.message}`);
    } else {
      alert('Form submitted successfully!');
      setName(''); // Reset form fields after successful submission
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className="py-10 bg-gradient-to-r from-orange-500 to-red-600 text-base-content">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-5 ">
        <div className="w-full md:flex-1 bg-base-100 rounded-lg p-6 shadow-lg">
          <h2 className="text-primary text-lg font-medium title-font mb-5">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Brooke"
                className="input input-bordered w-full"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                aria-label="Name"
              />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="brokerbrooke@brookeshelley.ca"
                className="input input-bordered w-full"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label="Email"
              />
            </div>
            <div className="form-control mb-4">
              <label htmlFor="message" className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered h-24"
                rows="4"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                aria-label="Message"
              ></textarea>
            </div>
            <button className="btn btn-primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="w-full md:flex-1 flex items-center justify-center">
          <Image
            src="/img1.jpeg"
            alt="Mortgage Broker"
            width={500}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
