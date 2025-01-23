// Import necessary libraries
import React, { useState } from "react";

// ExcuseCard Component: Represents an individual excuse entity
const ExcuseCard = ({ category, excuse, likes, onLike }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 capitalize mb-2">
        {category}
      </h3>
      <p className="text-gray-600 mb-4">{excuse}</p>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={onLike}
        >
          Like
        </button>
        <span className="text-gray-500">Likes: {likes}</span>
      </div>
    </div>
  );
};

export default ExcuseCard;
