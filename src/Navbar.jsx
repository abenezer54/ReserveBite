import { Search, Bell, User, MapPin, ChevronDown } from "lucide-react";
import Logo from "./assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="w-full h-[88px] flex justify-between pt-[20px] pr-[40px] pb-[20px] pl-[40px] shadow-[0px_5px_14px_0px_#080F340A]">
      <img
        src={Logo}
        alt="ReserveBite Logo"
        className="h-full object-contain"
      />
      <div className="w-[425px] h-[48px]  p-3 pr-4 pl-4 flex items-center justify-between gap-[10px] border border-[#C5C5C580] rounded-lg bg-white">
        <input
          className="SearchInput w-5/6 h-full focus:outline-none font-[roboto] focus:ring-0"
          type="text"
          placeholder="Search restaurant and cuisines..."
        />

        <Search className="SearchIcon w-[16px] h-[16px]  text-[#C5C5C580]" />
      </div>
      <div className="Right w-[331px] h-[48px] flex gap-[12px] items-center">
        <div className="w-3/5 border-[#C5C5C580] h-full flex items-center justify-between px-2 border-1 rounded-lg ">
          <div className="flex flex-row gap-2 items-center">
            <MapPin className="text-[#3F3F3F]" />
            <div className="flex flex-col justify-center">
              <div className="text-xs font-light font-[roboto] text-[#3F3F3F]">
                Your Location
              </div>
              <div className="text-sm font-[roboto] text-[#3F3F3F]">
                Addis Ababa
              </div>
            </div>
          </div>
          <ChevronDown className="text-[#3F3F3F]" />
        </div>

        <div className="h-full w-12 bg-[#004225] text-[#FFFFFF] flex justify-center items-center rounded-lg">
          <Bell />
        </div>
        <div className="h-full w-12 bg-[#004225] text-[#FFFFFF] flex justify-center items-center rounded-lg">
          <User />
        </div>
      </div>
    </nav>
  );
};
