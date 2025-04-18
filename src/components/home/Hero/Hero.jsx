import React from "react";
import smallBlink from "../../../assets/images/Home/small-blink.svg";
import largeBlink from "../../../assets/images/Home/large-blink.svg";
import heroImage from "../../../assets/images/Home/Hero-Image.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="w-full bg-[#F2F0F1] lg:bg-[url('/src/assets/images/Home/Hero-bg.png')] lg:bg-no-repeat max-[1280px]:bg-center lg:bg-cover flex lg:flex-row flex-col justify-center lg:items-start items-center">
      <div className="xl:w-[84%] w-[90%] flex gap-14 lg:flex-row flex-col">
        <div className="lg:block hidden absolute lg:right-14 xl:right-28 xl:pt-24 pt-6 pb-28">
          <img
            src={largeBlink}
            alt="large-Blink"
            className="w-[104px] h-[104px] animate-[spin_4s_linear_infinite]"
          />
        </div>
        <div className="lg:flex hidden absolute xl:right-[45%] xl:pt-80 pt-72 right-[36%] pb-28">
          <img
            src={smallBlink}
            alt="small-Blink"
            className="w-[56px] h-[56px] animate-[spin_4s_linear_infinite]"
          />
        </div>
        <div className="w-fit lg:pt-24 md:pt-8 pt-10 lg:pb-28 md:pb-16">
          <p className="w-fit text-[48px] md:text-[64px] font-bold font-integralBold text-[#000000] flex flex-col md:leading-[4.2rem] sm:leading-[3rem]">
            FIND CLOTHES <span>THAT MATCHES</span> <span>YOUR STYLE</span>
          </p>
          <p className="text-[16px] font-normal font-satoshi text-[#00000099] lg:w-[34rem] md:w-[90%] md:mt-6 mt-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="text-[16px] font-medium font-satoshi text-white py-4 px-[4.5rem] rounded-[62px] bg-black mt-6 hover:bg-transparent hover:text-black border-2 border-black cursor-pointer transition-all duration-500">
            Shop Now
          </button>
          <div className="flex md:mt-[3.2rem] sm:mt-[2.4rem] lg:justify-start justify-between lg:w-auto md:w-[85%] sm:w-[94%] lg:mx-0 mx-auto xl:gap-8 lg:gap-5">
            <div className="flex flex-col lg:border-r lg:border-r-[#0000001A] xl:pr-9 lg:pr-6">
              <p className="text-[40px] text-black font-satoshiBold">
                <CountUp end={200} duration={6} />+
              </p>
              <p className="text-[16px] font-normal text-[#00000099] font-satoshi">
                International Brands
              </p>
            </div>
            <div className="border border-[#0000001A] lg:hidden block"></div>
            <div className="flex flex-col lg:border-r lg:border-r-[#0000001A] xl:pr-9 lg:pr-6">
              <p className="text-[40px] text-black font-satoshiBold">
                <CountUp end={2000} duration={6} />+
              </p>
              <p className="text-[16px] font-normal text-[#00000099] font-satoshi">
                High-Quality Products
              </p>
            </div>
            <div className="border border-[#0000001A] lg:hidden block"></div>
            <div className="flex flex-col">
              <p className="text-[40px] text-black font-satoshiBold">
                <CountUp end={30000} duration={6} />+
              </p>
              <p className="text-[16px] font-normal text-[#00000099] font-satoshi">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden justify-center md:mt-0 sm:mt-2 relative w-full">
        <div className="w-full absolute">
          <img
            src={heroImage}
            alt="hero-Image"
            className="w-full object-cover"
          />
        </div>
        <div className="flex justify-between absolute mt-20 w-[90%]">
          <div className="mt-52">
            <img
              src={smallBlink}
              alt="small-Blink"
              className="w-[72px] h-[72px] animate-[spin_4s_linear_infinite]"
            />
          </div>
          <div>
            <img
              src={largeBlink}
              alt="large-Blink"
              className="w-[132px] h-[132px] animate-[spin_4s_linear_infinite]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
