import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <div
      className="rounded-2xl shadow-md bg-white overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      {/* Image Section */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <img
          src="/assets/images/placeholder-property.jpg"
          alt="Placeholder"
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
