import React, { useState } from "react";
import Dropdown from "../../../assets/images/Header/Dropdown.svg";

const Sidebar = () => {
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  const ShopDrop = () => {
    setShowShopDropdown((prev) => !prev);
  };

  return (
    <div className="flex lg:hidden justify-center h-[84.9vh] w-full bg-[#F2F0F1] py-4 rounded-[4px]">
      <div className="w-[90%] flex flex-col md:gap-2 gap-1.5">
        <a
          href="#"
          className="md:text-[48px] text-[42px] font-normal font-poppins hover:opacity-75 text-[#000000] flex justify-between items-center"
          onClick={ShopDrop}
        >
          Shop{" "}
          <img
            src={Dropdown}
            alt="Dropdown-Image"
            className={`md:w-[32px] w-[28] md:h-[16px] h-[14px]  ${
              showShopDropdown
                ? "rotate-180 transition-all duration-500"
                : "transition-all duration-500"
            }`}
          />
        </a>
        <div
          className={`transition-all duration-300 ease-in-out ${
            showShopDropdown
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-10px] pointer-events-none"
          }`}
        >
          {showShopDropdown ? (
            <div className="bg-white md:py-4 py-3 px-6 md:px-7 rounded-[8px] flex flex-col md:gap-3 gap-2">
              <a
                href="#"
                className="md:text-[32px] text-[20px] font-normal font-inter hover:opacity-75 text-[#000000]"
              >
                Men's Fashion
              </a>
              <a
                href="#"
                className="md:text-[32px] text-[20px] font-normal font-inter hover:opacity-75 text-[#000000]"
              >
                Women's Fashion
              </a>
              <a
                href="#"
                className="md:text-[32px] text-[20px] font-normal font-inter hover:opacity-75 text-[#000000]"
              >
                Kids & Babies
              </a>
              <a
                href="#"
                className="md:text-[32px] text-[20px] font-normal font-inter hover:opacity-75 text-[#000000]"
              >
                Active & Athletic Wear
              </a>
              <a
                href="#"
                className="md:text-[32px] text-[20px] font-normal font-inter hover:opacity-75 text-[#000000]"
              >
                Seasonal Collections
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <a
          href="#"
          className="md:text-[48px] text-[42px] font-normal font-poppins hover:opacity-75 text-[#000000]"
        >
          On Sale
        </a>
        <a
          href="#"
          className="md:text-[48px] text-[42px] font-normal font-poppins hover:opacity-75 text-[#000000]"
        >
          New Arrivals
        </a>
        <a
          href="#"
          className="md:text-[48px] text-[42px] font-normal font-poppins hover:opacity-75 text-[#000000]"
        >
          Brands
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
