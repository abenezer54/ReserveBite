import Rating from "./Rating.jsx";
import Item from "./Item.jsx";
import { BadgeDollarSign, Flag, MapPin, Info, Clock } from "lucide-react";

export const HotelDetails = () => {
  return (
    <section className="bg-[#FFFFFF] w-full h-50 pl-6 pr-6 pt-8 pb-8 rounded-3xl">
      <div className="Top w-full h-2/8 pb-4 flex items-center justify-between border-b border-[#C5C5C580]">
        <h1 className="font-[roboto] font-medium text-[#004225] text-4xl leading-[28px] tracking-normal align-middle">
          Hotel Ultra Max
        </h1>
        <Rating rating={4.5} reviews={450} />
      </div>
      <div className="Bottom w-full h-17 mt-4 mx-auto grid grid-cols-2 gap-[16px]">
        <Item>
          <BadgeDollarSign className="text-[#202020]" />
          <span className="text-[#202020] font-[roboto]">
            ₹ 2,000 for 2 | North Indian
          </span>
        </Item>
        <Item>
          <MapPin className="text-[#202020]" />
          <span className="text-[#202020] font-[roboto]">
            Connaught Place, Central Delhi
          </span>
        </Item>
        <Item>
          <Flag className="text-[#202020]" />
          <span>
            <span className="text-[#007E47] font-[roboto]">{0.7 + " km "}</span>
            <span className="text-[#202020] font-[roboto]">
              from Banaras Ghats
            </span>
          </span>
        </Item>
        <Item>
          <Clock className="text-[#202020]" />
          <span>
            <span className="text-[#007E47] font-[roboto]">{"Open from "}</span>
            <span className="text-[#202020] font-[roboto]">
              10:00 AM - 11:00 PM
            </span>
          </span>
          <Info className="text-[#202020]" />
        </Item>
      </div>
    </section>
  );
};
