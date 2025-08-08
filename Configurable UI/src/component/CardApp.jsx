import React from 'react';
import { cardInfo } from '../config/config.js';

function Card({ title, description, image })  { 
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out w-80 overflow-hidden transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CardApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 text-center font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">My Configurable Card Application</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {cardInfo.map(card => (
          <Card
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardApp;
