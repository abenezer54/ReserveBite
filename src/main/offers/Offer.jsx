import { BadgeInfo } from "lucide-react";

export const Offer = ({ formattedTime, amount }) => {
  return (
    <div className="w-full font-[roboto] h-18 flex border justify-between border-[#00422580] rounded-lg p-3 items-center  text-[#004225] bg-[linear-gradient(90deg,rgba(0,133,74,0.05)_11%,rgba(1,158,89,0.05)_31%,rgba(2,172,98,0.05)_51%,rgba(0,181,101,0.05)_70%,rgba(0,201,112,0.05)_85.5%,rgba(12,210,123,0.05)_100%)]">
      <div className="flex gap-2">
        <BadgeInfo />
        <span>{formattedTime}</span>
      </div>
      <div>
        Offer availed{" "}
        <span className="text-[#0CD27B] font-[roboto] font-bold">{amount}</span>{" "}
        times
      </div>
      <button className="h-full py-4 px-3 bg-[#007E47] text-white font-[roboto] font-medium text-[14px] leading-[16px] tracking-normal text-center capitalize rounded-lg">
        Avail Offer
      </button>
    </div>
  );
};
