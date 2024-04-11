// components/FloatingSVG.js
const FloatingSVG = ({ style }) => {
  return (
    <div style={style} className="floating-svg">
      {/* SVG code here, ensure XML declarations are removed or adapted for JSX */}
      <svg height="100%" strokeMiterlimit="10" style={{fillRule: "nonzero", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round"}} viewBox="0 0 74.4 74.4" width="100%" xmlns="http://www.w3.org/2000/svg">
        {/* Ensure the rest of your SVG elements are correctly formatted for JSX */}
        <path d="M61.1201 32.8402L56.4543 28.911...54.4127 56.3292Z" fill="#fd8726" />
      </svg>
    </div>
  );
};

export default FloatingSVG;

