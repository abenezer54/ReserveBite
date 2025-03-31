import { Offer } from "./Offer";

export const OfferList = () => {
  const offers = [
    { formattedTime: "Sun, 06:00 PM - 09:30 PM", amount: 100 },
    { formattedTime: "Mon, 12:00 PM - 03:00 PM", amount: 150 },
    { formattedTime: "Fri, 07:00 PM - 10:00 PM", amount: 200 },
    { formattedTime: "Sat, 05:00 PM - 08:00 PM", amount: 250 }, // Extra offer
  ];

  return (
    <section className="w-full h-91 p-4 bg-white rounded-3xl flex flex-col gap-5">
      <h1 className="text-[#004225] font-[roboto] text-xl">Available Offers</h1>
      <div className="flex flex-col gap-4">
        {offers.slice(0, 3).map((offer, index) => (
          <Offer
            key={index}
            formattedTime={offer.formattedTime}
            amount={offer.amount}
          />
        ))}
      </div>
      {offers.length > 3 && (
        <span className="flex justify-center text-[#3595FF] font-[roboto] font-medium text-[14px] leading-[16px] tracking-[0.5px] text-center underline underline-offset-0 decoration-solid decoration-[0%]">
          See all offers {"(+" + (offers.length - 3) + ") more"}
        </span>
      )}
    </section>
  );
};
