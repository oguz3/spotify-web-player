import * as React from "react";

function SvgMix(props) {
  return (
    <svg 
      height="1em" 
      width="1em" 
      viewBox="0 0 32 32" 
      {...props}
    >
      <path 
        fill="currentColor"
        d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"></path>
    </svg>
  );
}

export default SvgMix;
