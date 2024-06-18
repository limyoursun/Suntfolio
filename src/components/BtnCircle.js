import React, { useState } from "react";

/* css import */

function BtnCircle({category}) {
  return (
    <div className="btn_circle">
      <svg viewBox="0 0 100 100">
        <defs>
          <path
            id="circle"
            d="
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text>
          <textPath xlinkHref="#circle">This project category is..</textPath>
        </text>
      </svg>
    </div>
  );
}

export default BtnCircle;
