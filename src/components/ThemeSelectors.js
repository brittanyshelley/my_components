

// export default function ThemeSelector() {
//   const handleThemeChange = (themeName) => {
//     // Function to change the theme
//     document.documentElement.setAttribute('data-theme', themeName);
//   };

//   return (
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn m-1">
//         Theme
//         <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
//       </div>
//       <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
//         {themes.map((theme) => (
//           <li key={theme}>
//             <input
//               type="radio"
//               name="theme-dropdown"
//               className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
//               aria-label={theme}
//               value={theme}
//               id={`theme-${theme}`} // unique ID for the label's "for" attribute to reference
//               onChange={() => handleThemeChange(theme)}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  "mytheme", // Specify the custom theme name here
  // Add other DaisyUI themes as needed
];

export default function ThemeSelector() {
  const { changeTheme } = useTheme();

  return (
    <div className="dropdown">
      <div tabIndex={0} className="btn m-1">Theme</div>
      <ul className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {themes.map((theme) => (
          <li key={theme}>
            <button
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              onClick={() => changeTheme(theme)}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
