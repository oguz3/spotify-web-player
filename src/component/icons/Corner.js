import * as React from "react";

function SvgCorner(props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path
          d="M1 3v9h14V3H1zm0-1h14a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1z"
          fillRule="nonzero"
        />
        <path d="M10 8h4v3h-4z" />
      </g>
    </svg>
  );
}

export default SvgCorner;
