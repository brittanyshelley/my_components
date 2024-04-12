// components/Testimonials.js
// import testimonials from '../data/testimonialsData';

// export default function Testimonials() {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-center">What Our Clients Say</h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map(({ id, name, position, testimonial }) => (
//             <div key={id} className="bg-white p-6 rounded-lg shadow">
//               <p className="text-sm font-medium">{testimonial}</p>
//               <p className="mt-4 text-sm text-gray-500">{name}, {position}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Core Swiper styles
// import 'swiper/css/pagination'; // Pagination styles
// import 'swiper/css/cube-effect'; // Cube Effect styles
// import { Pagination, CubeEffect } from 'swiper';
// import testimonials from '../data/testimonialsData';



// export default function Testimonials() {
//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-center">What Our Clients Say</h2>
//         <Swiper
//           effect={'cube'} // Specify the cube effect
//           grabCursor={true} // Allows you to grab the swiper and move it
//           cubeEffect={{
//             // Cube effect settings
//             shadow: true,
//             slideShadows: true,
//             shadowOffset: 20,
//             shadowScale: 0.94,
//           }}
//           pagination={{ clickable: true }}
//           modules={[Pagination, CubeEffect]} // Use Pagination and CubeEffect modules
//           className="mt-8"
//         >
//           {testimonials.map(({ id, name, position, testimonial }) => (
//             <SwiperSlide key={id}>
//               <div className="glass-card p-5">
//                 <p className="text-sm font-medium">{testimonial}</p>
//                 <p className="mt-4 text-sm text-gray-500">{name}, {position}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Import Swiper styles
// import 'swiper/css/pagination'; // Import styles for the pagination
// import testimonials from '../data/testimonialsData';
// // import SwiperCore from 'swiper';

// import { Parallax, Navigation, Pagination } from 'swiper';

// export default function Testimonials() {
//   return (
//     <section  >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-center">What Our Clients Say</h2>
//         {/* Swiper container */}
//         <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//           '--swiper-pagination-color': '#fff',
//         }}
//         speed={600}
//         parallax={true}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Parallax, Pagination, Navigation]}
//         className="mySwiper"
//       >
//           {/* Mapping testimonials to SwiperSlides */}
//           {testimonials.map(({ id, name, position, testimonial }) => (
//             <SwiperSlide key={id} className="glass-card">
//               <p className="title" data-swiper-parallax="-300">{testimonial}</p>
//               <p className="subtitle" data-swiper-parallax="-200">{name}, {position}</p>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }



// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Import Swiper styles
// import 'swiper/css/pagination'; // Import styles for the pagination
// import testimonials from '../data/testimonialsData';
// import SwiperCore, { Pagination } from 'swiper';

// // Install the Pagination module
// SwiperCore.use([Pagination]);

// export default function Testimonials() {
//   return (
//     <section className="py-12 bg-base-200" data-theme="mytheme">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-base-content">What Our Clients Say</h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1,
//             },
//             1024: {
//               slidesPerView: 1,
//             },
//           }}
//           modules={[Pagination]}
//           className="mt-8"
//         >
//           {testimonials.map(({ id, name, position, testimonial }) => (
//             <SwiperSlide key={id}>
//               {/* Adjustments for glass effect and rounded corners */}
//               <div className="card-body backdrop-blur-md bg-opacity-20 bg-base-100 rounded-xl p-6 border border-base-300 shadow-lg">
//                 <p className="text-md">{testimonial}</p>
//                 <p className="text-sm text-base-content mt-4">{name}, {position}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// import dynamic from 'next/dynamic';
// import 'swiper/css'; // Import Swiper styles globally
// import 'swiper/css/pagination'; // Import pagination styles globally

// import testimonials from '../data/testimonialsData';

// // Dynamically import Swiper components for client-side only
// const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then((mod) => mod.SwiperSlide), { ssr: false });
// // Import Pagination module directly where needed
// const Pagination = dynamic(() => import('swiper').then((mod) => mod.Pagination), { ssr: false });

// export default function Testimonials() {
//   return (
//     <section className="py-12 bg-base-200" data-theme="mytheme">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center text-base-content">What Our Clients Say</h2>
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={30}
//           pagination={{ clickable: true }}
//           modules={[Pagination]} // Use modules prop to include Pagination
//           className="mt-8"
//         >
//           {testimonials.map(({ id, name, position, testimonial }) => (
//             <SwiperSlide key={id}>
//               <div className="card-body backdrop-blur-md bg-opacity-20 bg-base-100 rounded-xl p-6 border border-base-300 shadow-lg">
//                 <p className="text-md">{testimonial}</p>
//                 <p className="text-sm text-base-content mt-4">{name}, {position}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import styles for the pagination
import 'swiper/css/navigation';
import testimonials from '../data/testimonialsData';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Testimonials() {
  return (
    <section className="py-10 bg-base-200 text-base-content" data-theme="mytheme">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center">What Our Clients Say</h2>
        {/* Swiper container */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Mapping testimonials to SwiperSlides */}
          {testimonials.map(({ id, name, position, testimonial }) => (
            <SwiperSlide key={id} className="bg-base-100 bg-opacity/40 backdrop-blur-lg py-7 rounded-md ">
              <h1 className="text-sm font-medium text-content-base text-center py-5">{testimonial}</h1>
              <p className="mt-4 text-sm text-accent text-center">{name}, {position}</p>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}