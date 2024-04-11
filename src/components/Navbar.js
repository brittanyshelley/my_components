import Link from 'next/link';
import { useState } from 'react';



// export default function Navbar() {
//   const [isMortgageDropdownOpen, setIsMortgageDropdownOpen] = useState(false);
//   const [isCalculatorDropdownOpen, setIsCalculatorDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Broker Name / Logo */}
//         <div>
//           <Link href="/" className="text-xl font-bold">Veronica
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-4">
//           {/* Mortgage Types Dropdown */}
//           <div className="relative">
//             <button onClick={() => setIsMortgageDropdownOpen(!isMortgageDropdownOpen)} className="px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
//               Mortgage Types
//             </button>
//             {isMortgageDropdownOpen && (
//               <div className="absolute right-0 mt-2 py-2 w-48 bg-white text-black rounded-lg shadow-xl">
//                 <Link href="/mortgages/new" className="block px-4 py-2 hover:bg-gray-100">New Mortgages
//                 </Link>
//                 <Link href="/mortgages/refinance" className="block px-4 py-2 hover:bg-gray-100">Refinance
//                 </Link>
//                 {/* Add more mortgage types as needed */}
//               </div>
//             )}
//           </div>

//           {/* Calculators Dropdown */}
//           <div className="relative">
//             <button onClick={() => setIsCalculatorDropdownOpen(!isCalculatorDropdownOpen)} className="px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
//               Calculators
//             </button>
//             {isCalculatorDropdownOpen && (
//               <div className="absolute right-0 mt-2 py-2 w-48 bg-white text-black rounded-lg shadow-xl">
//                 <Link href="/calculators/payment" className="block px-4 py-2 hover:bg-gray-100">Payment Calculator
//                 </Link>
//                 <Link href="/calculators/affordability" className="block px-4 py-2 hover:bg-gray-100">Affordability Calculator
//                 </Link>
//                 {/* Add more calculator links as needed */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


export default function Navbar() {
  const [isMortgageDropdownOpen, setIsMortgageDropdownOpen] = useState(false);
  const [isCalculatorDropdownOpen, setIsCalculatorDropdownOpen] = useState(false);

  return (
    <nav className="navbar bg-base-100" data-theme="mytheme" >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>About</a></li>
            <li>
              <a>Mortgage Type</a>
              <ul className="p-2">
                <li><a>New Home Buyer</a></li>
                <li><a>Refinancing</a></li>
                <li><a>Transfer</a></li>
                <li><a>Refinancing</a></li>
              </ul>
            </li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BROKER BROOKE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>About</a></li>
          <li>
            <details>
              <summary>Mortgage Type</summary>
              <ul className="p-2">
                <li><a>New Home Buyer</a></li>
                <li><a>Refinancing</a></li>
                <li><a>Transfer</a></li>
                <li><a>Refinancing</a></li>
              </ul>
            </details>
          </li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost">Contact Now</a>
      </div>
    </nav>
  );
}