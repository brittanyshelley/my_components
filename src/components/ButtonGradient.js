import React from "react";


// export default function ButtonGradient() {

//   return (
//     <div className="container mx-auto flex py-4 justify-content space-between" >
//       <a
//         className="group inline-block mb-4 rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
//         href="#"
//       >
//         <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
//           Download
//         </span>
//       </a>



//       <a
//         className="group inline-block mb-4 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
//         href="#"
//       >
//         <span
//           className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
//         >
//           Download
//         </span>
//       </a>
//       <a
//         className="group relative mb-4 inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
//         href="#"
//       >
//         <span
//           className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
//         ></span>

//         <span className="relative block border border-current bg-white px-8 py-3"> Download </span>
//       </a>

//       {/* Hover */}

//       <a
//         className="group relative mb-4 inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
//         href="#"
//       >
//         <span
//           className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
//         ></span>

//         <span className="relative block border border-current bg-white px-8 py-3"> Download </span>
//       </a>
//       <a
//         className="group relative mb-4 inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
//         href="#"
//       >
//         <span className="absolute -start-full transition-all group-hover:start-4">
//           <svg
//             className="size-5 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </span>

//         <span className="text-sm font-medium transition-all group-hover:ms-4"> Download </span>
//       </a >

//   {/* Border - Right */ }

//   < a
// className = "group relative mb-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
// href = "#"
//   >
//         <span className="absolute -start-full transition-all group-hover:start-4">
//           <svg
//             className="size-5 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </span>

//         <span className="text-sm font-medium transition-all group-hover:ms-4"> Download </span>
//       </a >

//   {/* Base - Left */ }

//   < a
// className = "group mb-4 relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
// href = "#"
//   >
//         <span className="absolute -end-full transition-all group-hover:end-4">
//           <svg
//             className="size-5 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </span>

//         <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
//       </a >

//   {/* Border - Left */ }

//   < a
// className = "group relative mb-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
// href = "#"
//   >
//         <span className="absolute -end-full transition-all group-hover:end-4">
//           <svg
//             className="size-5 rtl:rotate-180"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </span>

//         <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
//       </a >
//   <a
//     className="inline-block mb-4 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
//     href="#"
//   >
//     Download
//   </a>

// {/* Border */ }

//       <a
//         className="inline-block mb-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
//         href="#"
//       >
//         Download
//       </a>
//       <a
//         className="inline-block mb-4 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
//         href="#"
//       >
//         Download
//       </a>

// {/* Border - Right */ }

// <a
//   className="inline-block mb-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
//   href="#"
// >
//   Download
// </a>

// {/* Base - Left */ }

// <a
//   className="inline-block mb-4 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
//   href="#"
// >
//   Download
// </a>

// {/* Border - Left */ }

//       <a
//         className="inline-block mb-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
//         href="#"
//       >
//         Download
//       </a>
//       <a className="group relative mb-4 inline-block focus:outline-none focus:ring" href="#">
//         <span
//           className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
//         ></span>

//         <span
//           className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
//         >
//           Download
//         </span>
//       </a>

// {/* Hover */ }

//       <a className="group relative inline-block focus:outline-none focus:ring" href="#">
//         <span
//           className="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
//         ></span>

//         <span
//           className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
//         >
//           Download
//         </span>
//       </a>
//       <a
//         className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
//         href="#"
//       >
//         <span
//           className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
//         ></span>

//         <span
//           className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
//         >
//           Download
//         </span>
//       </a>
// {/* Right */ }

// <a
//   className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
//   href="#"
// >
//   <span
//     className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
//   ></span>

//   <span
//     className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
//   >
//     Download
//   </span>
// </a>

// {/* Bottom */ }

// <a
//   className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
//   href="#"
// >
//   <span
//     className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
//   ></span>

//   <span
//     className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
//   >
//     Download
//   </span>
// </a>

// {/* Top */ }

//       <a
//         className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
//         href="#"
//       >
//         <span
//           className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
//         ></span>

//         <span
//           className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
//         >
//           Download
//         </span>
//       </a>
//       <a
//         className="group relative mb-4 inline-block text-sm font-medium text-white focus:outline-none focus:ring"
//         href="#"
//       >
//         <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
//         <span
//           className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
//         >
//           Download
//         </span>
//       </a>

// {/* Border */ }

// <a
//   className="group relative mb-4  inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
//   href="#"
// >
//   <span className="absolute inset-0 border border-current"></span>
//   <span
//     className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
//   >
//     Download
//   </span>
// </a>
//     </div>
//   );
// }

export default function ButtonGradient() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <a href="#" className="group block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
          <span className="block rounded bg-primary px-8 py-3 text-sm font-medium group-hover:bg-transparent">Download</span>
        </a>
        <a href="#" className="group block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
          <span className="block rounded-full bg-primary px-8 py-3 text-sm font-medium group-hover:bg-transparent">Download</span>
        </a>
        <a href="#" className="group block relative text-sm font-medium text-primary-content focus:outline-none focus:ring active:text-indigo-500">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative block border border-current bg-primary px-8 py-3">Download</span>
        </a>
        <a href="#" className="group block relative text-sm font-medium text-primary-content focus:outline-none focus:ring active:text-indigo-500">
          <span className="absolute inset-0 translate-x-0 translate-y-0 bg-primary-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
          <span className="relative block border border-current bg-primary px-8 py-3">Download</span>
        </a>
        <a href="#" className="group block relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500">
          <span className="absolute -start-full transition-all group-hover:start-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <span className="text-sm font-medium transition-all group-hover:ms-4">Download</span>
        </a>


        {/* Border - Right */}

        <a
          className="group relative mb-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          <span className="absolute -start-full transition-all group-hover:start-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:ms-4"> Download </span>
        </a>

        {/* Base - Left */}

        <a
          className="group mb-4 relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
        </a>

        {/* Border - Left */}

        <a
          className="group relative mb-4 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
        </a>
        <a
          className="inline-block mb-4 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          Download
        </a>

        {/* Border */}

        <a
          className="inline-block mb-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Download
        </a>
        <a
          className="inline-block mb-4 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          Download
        </a>

        {/* Border - Right */}

        <a
          className="inline-block mb-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Download
        </a>

        {/* Base - Left */}

        <a
          className="inline-block mb-4 rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
          href="#"
        >
          Download
        </a>

        {/* Border - Left */}

        <a
          className="inline-block mb-4 rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Download
        </a>
        <a className="group relative mb-4 inline-block focus:outline-none focus:ring" href="#">
          <span
            className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
          ></span>

          <span
            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-content group-active:text-opacity-75"
          >
            Download
          </span>
        </a>

        {/* Hover */}

        <a className="group relative inline-block focus:outline-none focus:ring" href="#">
          <span
            className="absolute inset-0 translate-x-0 translate-y-0 bg-primary-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
          ></span>

          <span
            className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
          >
            Download
          </span>
        </a>
        <a
          className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span
            className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
          ></span>

          <span
            className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
          >
            Download
          </span>
        </a>
        {/* Right */}

        <a
          className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span
            className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
          ></span>

          <span
            className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
          >
            Download
          </span>
        </a>

        {/* Bottom */}

        <a
          className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span
            className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
          ></span>

          <span
            className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
          >
            Download
          </span>
        </a>

        {/* Top */}

        <a
          className="group relative mb-4 inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
          href="#"
        >
          <span
            className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
          ></span>

          <span
            className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
          >
            Download
          </span>
        </a>
        <a
          className="group relative mb-4 inline-block text-sm font-medium text-white focus:outline-none focus:ring"
          href="#"
        >
          <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
          <span
            className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            Download
          </span>
        </a>

        {/* Border */}

        <a
          className="group relative mb-4  inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
          href="#"
        >
          <span className="absolute inset-0 border border-current"></span>
          <span
            className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            Download
          </span>
        </a>
      </div>
    </div>
  );
}
