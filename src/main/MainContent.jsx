import { HotelDetails } from "./hotel_details/HotelDetails";
import { OfferList } from "./offers/OfferList";
import { RestaurantMenuList } from "./restaurant_menu/RestaurantMenuList";
import { ImageSlide } from "./ImageSlide";

export const MainContent = () => {
  return (
    <div className="w-237.5 bg-[#F8F8FA] flex flex-col gap-5 relative">
      <ImageSlide />
      <HotelDetails />
      <OfferList />
      <RestaurantMenuList />
    </div>
  );
};
