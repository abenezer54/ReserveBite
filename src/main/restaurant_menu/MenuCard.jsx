import Menu from "../../assets/menu.png";

export const MenuCard = ({ text = "Food Menu", page = 1 }) => {
  return (
    <div className="w-40 h-48 bg-gray-900 rounded-2xl shadow-lg  flex items-center justify-center relative overflow-hidden">
      <img
        src={Menu}
        alt="Sample Menu"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/5 bg-[#3F3F3FFA] bg-opacity-50 flex items-center justify-center">
        <p className="text-white text-sm font-semibold">
          {text} {"(" + page + " pages)"}
        </p>
      </div>
    </div>
  );
};
