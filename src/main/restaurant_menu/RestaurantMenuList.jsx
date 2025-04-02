import { MenuCard } from "./MenuCard";

const menuData = [
  { text: "Breakfast Menu", page: 3 },
  { text: "Lunch Menu", page: 5 },
  { text: "Dinner Menu", page: 4 },
  { text: "Desserts", page: 2 },
  { text: "Drinks", page: 3 },
  { text: "Special Offers", page: 6 },
  { text: "Kids Menu", page: 2 },
];

export const RestaurantMenuList = () => {
  return (
    <section className="bg-[#FFFFFF] w-full p-4 rounded-3xl">
      <div className="Top w-full pb-4 flex items-center justify-between border-b border-[#C5C5C580]">
        <h1 className="font-[roboto] font-medium text-[#004225] text-2xl leading-[28px] tracking-normal align-middle">
          Restaurant Menus
        </h1>
      </div>
      {/* Horizontal Scrollable Section */}
      <div className="Bottom w-full mt-4 mx-auto overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="inline-flex gap-4">
          {menuData.map((menu, index) => (
            <MenuCard key={index} text={menu.text} page={menu.page} />
          ))}
        </div>
      </div>
    </section>
  );
};
