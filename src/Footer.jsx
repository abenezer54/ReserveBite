import Logowhite from "./assets/logowhite.svg";
import Footertext from "./assets/footer_text.svg";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full h-80 bg-[#004225] flex flex-col justify-center items-center gap-4">
      <img src={Logowhite} alt="ReserveBite Logo" className="w-70 " />
      <img src={Footertext} alt="ReserveBite Logo" className="w-120" />
      <div className="h-12 flex text-[#FFFFFF] gap-10">
        <Twitter className="h-full w-10" />
        <Instagram className="h-full w-10" />
        <Linkedin className="h-full w-10" />
      </div>
    </div>
  );
};
