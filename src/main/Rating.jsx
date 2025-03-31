import { Star } from "lucide-react";

const Rating = ({ rating, reviews }) => {
  return (
    <div className="flex items-center gap-1 text-gray-700">
      <Star className="w-5 h-5 text-[#202020] " />
      <span>{rating} Stars | </span>
      <span className="text-[#007E47] underline">{reviews} Reviews</span>
    </div>
  );
};

export default Rating;
