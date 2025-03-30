import { Search } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-[1440px] h-[88px] flex justify-between pt-[20px] pr-[40px] pb-[20px] pl-[40px] bg-[#FFFFFF] shadow-[0px_5px_14px_0px_#080F340A]">
      <div className="w-[206px] h-[44px] text-[#004225] font-architects text-[36px] font-normal leading-[44px] text-center flex items-center justify-center">
        ReserveBite
      </div>
      <div className="w-[425px] h-[48px]  p-3 pr-4 pl-4 flex items-center justify-between gap-[10px] border border-[#C5C5C580] rounded-lg bg-white">
        <input
          className="SearchInput w-5/6 h-full focus:outline-none focus:ring-0"
          type="text"
          placeholder="Search restaurant and cuisines..."
        />

        <Search className="SearchIcon w-[16px] h-[16px]  text-[#C5C5C580]" />
      </div>
      <div className="Right w-[331px] h-[48px] flex gap-[12px] items-center  bg-amber-950">
        <div>dropdown</div>
        <div>notf</div>
        <div>profile</div>
      </div>
    </nav>
  );
};
