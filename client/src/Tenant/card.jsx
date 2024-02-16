// Card.js
import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-200"> {/* Add background color class here */}
      <img src="path/to/your/image.jpg" alt="Card Image" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">Card Description goes here.</p>
      </div>
    </div>
  );
};

export default Card;
