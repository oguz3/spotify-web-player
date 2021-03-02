import * as React from "react";

function SvgLibrary(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M291.301 81.778L457.65 455.365 438.349 464 272 90.413zM64 463.746v-384h21.334v384H64zm128 0v-384h21.334v384H192z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLibrary;
