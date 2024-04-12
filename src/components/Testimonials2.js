// import Image from "next/image";

// const TestimonialSection = () => {
//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
//         <div className="mx-auto max-w-2xl text-center">
//           <h1 className="font-bold text-gray-800 dark:text-white text-3xl">Client’s Say About Us</h1>
//         </div>
//         <div className="relative flex flex-col">
//           <div className="p-6 w-full mx-auto max-w-4xl md:p-10 rounded-2xl bg-white dark:bg-gray-950 border border-gray-100/10 dark:border-gray-900 shadow-2xl shadow-gray-700/40 dark:shadow-none flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
//             <Image src="/images/sidebiew.webp" width={1900} height={1300} alt="Author avatar" className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full flex" />
//             <div className="space-y-2 text-center flex-1">
//               <h2 className="text-xl font-semibold leading-none text-gray-800 dark:text-gray-200">
//                 John Doe
//               </h2>
//               <p className="text-sky-700 dark:text-sky-300">
//                 SEO Kelasi-AI SARL
//               </p>
//             </div>
//             <p className="font-medium text-gray-700 dark:text-gray-300 max-w-md">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore
//               aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus?
//               Accusantium, tempora quisquam!
//             </p>
//             <div className="mx-auto flex items-center gap-2">
//               <span className="text-yellow-600 text-2xl flex">
//                 ★
//               </span>
//               <span className="text-yellow-600 text-2xl flex">
//                 ★
//               </span>
//               <span className="text-yellow-600 text-2xl flex">
//                 ★
//               </span>
//               <span className="text-yellow-600 text-2xl flex">
//                 ★
//               </span>
//               <span className="text-yellow-600 text-2xl flex">
//                 ★
//               </span>
//             </div>
//           </div>
//           <button aria-label="Prev Button" className="outline-none absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-900 p-4 rounded-full text-gray-800 dark:text-gray-200">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
//               <path fillRule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clipRule="evenodd" />
//             </svg>
//           </button>
//           <button aria-label="Next Button" className="outline-none absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 bg-gray-100 dark:bg-gray-900 p-4 rounded-full text-gray-800 dark:text-gray-200">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
//               <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
//             </svg>
//           </button>
//           <div className="flex items-center gap-1 border-0 bg-transparent absolute left-1/2 -translate-x-1/2 -bottom-10">
//             <span className="cursor-pointer w-4 h-2 rounded-full bg-blue-600 transition" />
//             <span className="cursor-pointer w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-800 transition ease-linear" />
//             <span className="cursor-pointer w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-800 transition ease-linear" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default TestimonialSection

// import Image from 'next/image';

// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "SEO Kelasi-AI SARL",
//     comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",
//     avatar: "/images/sidebiew.webp",
//     rating: 5,
//   },
//   // Add more testimonials as needed
// ];

// export default function TestimonialSection() {
//   return (
//     <section className="py-20 bg-base-100 text-base-content">
//       <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
//         <div className="mx-auto max-w-2xl text-center">
//           <h1 className="text-3xl font-bold">Client’s Say About Us</h1>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="card card-compact lg:card-normal bg-base-100 shadow-xl">
//               <figure>
//                 <Image src={testimonial.avatar} width={1900} height={1300} alt="Author avatar" className="rounded-xl" />
//               </figure>
//               <div className="card-body items-center text-center">
//                 <h2 className="card-title">{testimonial.name}</h2>
//                 <p>{testimonial.role}</p>
//                 <p>{testimonial.comment}</p>
//                 <div className="card-actions">
//                   {/* Map over `testimonial.rating` to generate stars */}
//                   {[...Array(testimonial.rating)].map((_, index) => (
//                     <span key={index} className="text-yellow-400 text-xl">★</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "SEO Kelasi-AI SARL",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "SEO CIBC",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jen Dean",
    role: "SEO CIBC SARL",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum at ipsa pariatur culpa iste dolore aliquid officia modi quas vel inventore animi, error commodi distinctio eum accusamus? Accusantium, tempora quisquam!",
    rating: 5,
  },
  // Add more testimonials as needed
];

export default function Testimonials2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Client’s Say About Us</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{testimonials[currentIndex].name}</h2>
                  <p>{testimonials[currentIndex].role}</p>
                  <p>{testimonials[currentIndex].comment}</p>
                  <div className="card-actions justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                      <span key={index} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button onClick={prevTestimonial} className="btn btn-circle">❮</button>
                <button onClick={nextTestimonial} className="btn btn-circle">❯</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
