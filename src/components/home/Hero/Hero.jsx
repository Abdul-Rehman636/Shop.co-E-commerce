import React from "react";
import smallBlink from "../../../assets/images/Home/small-blink.svg";
import largeBlink from "../../../assets/images/Home/large-blink.svg";
import heroImage from "../../../assets/images/Home/Hero-Image.png";
import versace from "../../../assets/images/Home/brand-logos/versace-logo.svg";
import zara from "../../../assets/images/Home/brand-logos/zara-logo.svg";
import gucci from "../../../assets/images/Home/brand-logos/gucci-logo.svg";
import prada from "../../../assets/images/Home/brand-logos/prada-logo.svg";
import calvinKlein from "../../../assets/images/Home/brand-logos/calvin-klein-logo.svg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <>
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
          <div className="w-fit lg:pt-24 md:pt-8 sm:pt-9 pt-6 lg:pb-28 md:pb-16">
            <p className="w-fit text-[36px] min-[540px]:text-[48px] sm:text-[48px] md:text-[64px] font-bold font-integralBold text-[#000000] flex flex-col md:leading-[4.2rem] sm:leading-[3rem] min-[540px]:leading-[2.7rem] leading-[2.13rem]">
              FIND CLOTHES <span>THAT MATCHES</span> <span>YOUR STYLE</span>
            </p>
            <p className="min-[540px]:text-[16px] text-[14px] font-normal font-satoshi text-[#00000099] lg:w-[34rem] md:w-[90%] md:mt-6 sm:mt-5 min-[540px]:mt-[18px] mt-[16px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="text-[16px] font-medium font-satoshi text-white py-3 sm:py-4 sm:w-auto w-[99%] sm:px-[4.5rem] rounded-[62px] bg-black sm:mt-6 mt-[22px] hover:bg-transparent hover:text-black border-2 border-black cursor-pointer transition-all duration-500">
              Shop Now
            </button>
            <div className="sm:flex hidden md:mt-[3.2rem] sm:mt-[2.4rem] lg:justify-start justify-between lg:w-auto md:w-[85%] sm:w-[94%] lg:mx-0 mx-auto xl:gap-8 lg:gap-5">
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
            <div className="flex flex-col items-center sm:hidden min-[540px]:mt-[2.4rem] mt-[1.4rem] w-[80%] mx-auto">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col lg:border-r lg:border-r-[#0000001A] xl:pr-9 lg:pr-6">
                  <p className="sm:text-[40px] text-[24px] text-black font-satoshiBold">
                    <CountUp end={200} duration={6} />+
                  </p>
                  <p className="sm:text-[16px] text-[12px] -mt-[3px] font-normal text-[#00000099] font-satoshi">
                    International Brands
                  </p>
                </div>
                <div className="border border-[#0000001A] w-[52px] rotate-90"></div>
                <div className="flex flex-col lg:border-r lg:border-r-[#0000001A] xl:pr-9 lg:pr-6">
                  <p className="sm:text-[40px] text-[24px] text-black font-satoshiBold">
                    <CountUp end={2000} duration={6} />+
                  </p>
                  <p className="sm:text-[16px] text-[12px] -mt-[3px] font-normal text-[#00000099] font-satoshi">
                    High-Quality Products
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <p className="sm:text-[40px] text-[24px] text-black font-satoshiBold">
                  <CountUp end={30000} duration={6} />+
                </p>
                <p className="sm:text-[16px] text-[12px] -mt-[3px] font-normal text-[#00000099] font-satoshi">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col-reverse justify-center w-full">
          <div className="w-full min-[540px]:-mt-[22rem] min-[768px]:-mt-[25rem] -mt-[11rem]">
            <img
              src={heroImage}
              alt="hero-Image"
              className="w-full object-cover"
            />
          </div>
          <div className="flex justify-between min-[540px]:mt-20 mt-12 w-[90%] mx-auto">
            <div className="min-[540px]:mt-52 mt-[90px]">
              <img
                src={smallBlink}
                alt="small-Blink"
                className="min-[540px]:w-[72px] min-[540px]:h-[72px] w-[44px] h-[44px] animate-[spin_4s_linear_infinite]"
              />
            </div>
            <div>
              <img
                src={largeBlink}
                alt="large-Blink"
                className="min-[540px]:w-[132px] min-[540px]:h-[132px] w-[76px] h-[76px] animate-[spin_4s_linear_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black lg:h-[122px] h-[146px] max-[768px]:pb-4 flex items-center">
        <div className="xl:w-[84%] w-[90%] mx-auto flex justify-between items-center max-[768px]:flex-wrap">
          <div className="md:w-auto w-[30%]">
            <img
              src={versace}
              alt="versaceLogo"
              className="max-[1024px]:w-[100px]"
            />
          </div>
          <div className="md:w-auto w-[30%] max-[768px]:mt-3.5 flex justify-center">
            <img src={zara} alt="zaraLogo" className="max-[1024px]:w-[100px]" />
          </div>
          <div className="md:w-auto w-[30%] flex justify-end">
            <img
              src={gucci}
              alt="gucciLogo"
              className="max-[1024px]:w-[100px]"
            />
          </div>
          <div className="md:w-auto w-[30%] flex justify-center max-[768px]:mt-4">
            <img
              src={prada}
              alt="pradaLogo"
              className="max-[1024px]:w-[100px]"
            />
          </div>
          <div className="md:w-auto w-[30%] max-[768px]:mt-4 flex justify-center">
            <img
              src={calvinKlein}
              alt="calvinKleinLogo"
              className="max-[1024px]:w-[100px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
