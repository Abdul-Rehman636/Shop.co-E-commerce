import React from "react";
import smallBlink from "../../../assets/images/Home/small-blink.svg";
import largeBlink from "../../../assets/images/Home/large-blink.svg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="w-full bg-[#F2F0F1] lg:bg-[url('/src/assets/images/Home/Hero-bg.png')] lg:bg-no-repeat max-[1280px]:bg-center lg:bg-cover flex justify-center">
      <div className="xl:w-[84%] w-[90%] flex gap-14 lg:flex-row flex-col">
        <div className="lg:block hidden absolute lg:right-14 xl:right-28 xl:pt-24 pt-6 pb-28">
          <img
            src={largeBlink}
            alt="large-Blink"
            className="w-[104px] h-[104px] animate-[spin_4s_linear_infinite]"
          />
        </div>
        <div className="w-fit lg:pt-24 pt-10 pb-28">
          <p className="w-fit md:text-[64px] font-bold font-integralBold text-[#000000] flex flex-col leading-[4.2rem]">
            FIND CLOTHES <span>THAT MATCHES</span> <span>YOUR STYLE</span>
          </p>
          <p className="text-[16px] font-normal font-satoshi text-[#00000099] lg:w-[34rem] md:w-[90%] mt-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="text-[16px] font-medium font-satoshi text-white py-4 px-[4.5rem] rounded-[62px] bg-black mt-6 hover:bg-transparent hover:text-black border-2 border-black cursor-pointer transition-all duration-500">
            Shop Now
          </button>
          <div className="flex mt-[3.2rem] lg:justify-start justify-between lg:w-auto w-[85%] lg:mx-0 mx-auto xl:gap-8 lg:gap-5">
            <div className="flex flex-col lg:border-r lg:border-r-[#0000001A] xl:pr-9 lg:pr-6">
              <p className="text-[40px] text-black font-satoshiBold">
                <CountUp end={200} duration={9} />+
              </p>
              <p className="text-[16px] font-normal text-[#00000099] font-satoshi">
                International Brands
              </p>
            </div>
            <div className="border border-[#0000001A] lg:hidden block"></div>
            <div className="flex flex-col lg:border-r lg:border-r-[#0000001A] xl:pr-9 lg:pr-6">
              <p className="text-[40px] text-black font-satoshiBold">
                <CountUp end={2000} duration={9} />+
              </p>
              <p className="text-[16px] font-normal text-[#00000099] font-satoshi">
                High-Quality Products
              </p>
            </div>
            <div className="border border-[#0000001A] lg:hidden block"></div>
            <div className="flex flex-col">
              <p className="text-[40px] text-black font-satoshiBold">
                <CountUp end={30000} duration={9} />+
              </p>
              <p className="text-[16px] font-normal text-[#00000099] font-satoshi">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-24 pb-28">
          <div className="flex xl:items-center items-start xl:mt-0 mt-16">
            <img
              src={smallBlink}
              alt="small-Blink"
              className="w-[56px] h-[56px] animate-[spin_4s_linear_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
