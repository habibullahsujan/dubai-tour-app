import React from 'react';
import Star from './Star';


const RatingDisplay = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1;
  const totalStars = 5;
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} fillPercentage={100} />
      ))}
      {halfStar > 0 && halfStar < 1 && (
        <Star fillPercentage={halfStar * 100} />
      )}
      {[...Array(totalStars - Math.ceil(rating))].map((_, i) => (
        <Star key={i + totalStars - Math.ceil(rating)} fillPercentage={0} />
      ))}
    </div>
  );
};

export default RatingDisplay;
