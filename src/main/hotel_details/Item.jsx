const Item = ({ children }) => {
  return (
    <div className="w-full h-[24px] p-4 flex justify-start gap-4 items-center rounded-xl">
      {children}
    </div>
  );
};

export default Item;
