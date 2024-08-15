import React from 'react';

const Star = ({ fillPercentage }:{fillPercentage:number}) => {
  return (
    <div className="relative w-4 h-4">
      <svg
        className="absolute inset-0 w-full h-full text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.5l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-0.51L12 2.5z" />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
      >
        <path d="M12 2.5l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14 2 9.27l6.91-0.51L12 2.5z" />
      </svg>
    </div>
  );
};

export default Star;
