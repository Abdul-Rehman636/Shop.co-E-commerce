import React from "react";

const ShopDropdown = () => {
  return (
    <div className="flex flex-col border border-[#F2F0F1] bg-white py-4 pb-5 pl-5 pr-8 gap-2 rounded-[6px] shadow">
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Men's Fashion
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Women's Fashion
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Kids & Babies
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Active & Athletic Wear
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Seasonal Collections
      </a>
    </div>
  );
};

export default ShopDropdown;
