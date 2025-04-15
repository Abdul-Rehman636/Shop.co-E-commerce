import React from "react";

const ProfileDropdown = () => {
  return (
    <div className="flex flex-col border border-[#F2F0F1] bg-[#F2F0F1] py-4 pl-5 pr-16 gap-1 rounded-[6px] shadow">
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Profile
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Orders
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Cart
      </a>
      <a
        href="#"
        className="text-[16px] font-normal font-poppins hover:opacity-75"
      >
        Logout
      </a>
    </div>
  );
};

export default ProfileDropdown;
