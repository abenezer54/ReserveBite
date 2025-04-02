import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = import.meta.glob("../assets/restaurants/*.{png,jpg,jpeg,svg}");

export const ImageSlide = () => {
  const [restaurantImages, setRestaurantImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Dynamically load the images
    const imagePaths = Object.keys(images).map(async (key) => {
      const module = await images[key]();
      return module.default;
    });

    // Set the state with loaded images
    Promise.all(imagePaths).then(setRestaurantImages);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % restaurantImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + restaurantImages.length) % restaurantImages.length
    );
  };

  return (
    <section className="relative w-full">
      {restaurantImages.length > 0 && (
        <img
          src={restaurantImages[currentImageIndex]}
          alt="Restaurant"
          className="w-full h-[425px]  object-cover"
        />
      )}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-lg text-[#004225] shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-lg text-[#004225] shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};
