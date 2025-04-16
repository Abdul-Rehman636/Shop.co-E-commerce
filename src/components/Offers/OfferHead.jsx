import React, { useState } from "react";
import Cross from "../../assets/images/Offer-Head/Cross.svg";

const OfferHead = () => {
  const [showOffer, setShowOffer] = useState(true);

  return (
    <div>
      {showOffer && (
        <>
          <div className="relative md:h-[38px] h-[34px] bg-[#000000] text-white flex justify-center items-center">
            <div className="flex-1 flex justify-center">
              <p className="md:text-sm text-xs font-normal font-poppins">
                Sign up and get 20% off to your first order.{" "}
                <a
                  href="#"
                  className="md:text-sm text-xs font-medium border-b hover:opacity-80"
                >
                  Sign Up Now
                </a>
              </p>
            </div>
            <button
              className="lg:flex hidden justify-end absolute xl:w-[84%] w-[90%] mx-auto top-1/2 transform -translate-y-1/2 hover:opacity-80 cursor-pointer"
              onClick={() => setShowOffer(false)}
            >
              <img src={Cross} alt="close-offer" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default OfferHead;
