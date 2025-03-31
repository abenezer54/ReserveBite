import Restaurant from "../assets/restaurant.png";
import { HotelDetails } from "./hotel_details/HotelDetails";
import { OfferList } from "./offers/OfferList";

export const MainContent = () => {
  return (
    <section className="w-237.5 bg-[#F8F8FA] flex flex-col gap-5">
      <img src={Restaurant} alt="Restaurant" className="w-full" />
      <HotelDetails />
      <OfferList />
    </section>
  );
};
