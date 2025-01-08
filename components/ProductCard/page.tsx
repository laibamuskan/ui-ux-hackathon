import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md  hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={title}
        className="h-48 w-full object-cover  mb-4"
        width={250} 
        height={220}
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="flex items-center space-x-1 text-yellow-500 mb-1">
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <span key={i}>★</span>
        ))}
        {rating % 1 !== 0 && <span>☆</span>}
        <span className="text-sm text-gray-500 ml-1">{rating}/5</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-black">${price}</span>
        {originalPrice && (
          <span className="text-sm text-gray-500 line-through">
            ${originalPrice}
          </span>
        )}
        {discount && (
          <span className="text-sm text-red-500 bg-red-100 px-2 py-1 rounded-md">
            {discount}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;


