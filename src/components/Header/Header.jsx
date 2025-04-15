import React, { useState, useEffect } from "react";
import OfferHead from "../Offers/OfferHead";
import Logo from "../../assets/Header/SHOP-CO.svg";
import Dropdown from "../../assets/Header/Dropdown.svg";
import ProfileImage from "../../assets/Header/Profile.svg";
import CartImage from "../../assets/Header/Cart.svg";

const Header = () => {
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputToggler = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <div>
      <OfferHead />
      <div className="lg:my-9 md:my-6 my-4 w-full flex justify-center">
        <div className="flex justify-between items-center xl:w-[84%] w-[90%]">
          <div className="flex items-center md:gap-8 sm:gap-7 gap-4">
            <div className="lg:hidden block">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox" class="toggle">
                <div class="bars" id="bar1"></div>
                <div class="bars" id="bar2"></div>
                <div class="bars" id="bar3"></div>
              </label>
            </div>
            <div>
              <img src={Logo} alt="Logo" className="sm:w-auto w-[126px]" />
            </div>
          </div>
          <div className="lg:flex hidden gap-6 max-[1129px]:w-[38%] min-[1130px]:w-[34%] xl:w-auto min-[1400px]:w-[30%] min-[1600px]:w-[28%]">
            <a
              href="#"
              className="text-[16px] font-normal font-poppins text-[#000000] flex gap-1.5 items-center"
            >
              Shop{" "}
              <img
                src={Dropdown}
                alt="Dropdown-Image"
                className="w-[11.5px] h-[6.5px]"
              />
            </a>
            <a
              href="#"
              className="text-[16px] font-normal font-poppins text-[#000000]"
            >
              On Sale
            </a>
            <a
              href="#"
              className="text-[16px] font-normal font-poppins text-[#000000]"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-[16px] font-normal font-poppins text-[#000000]"
            >
              Brands
            </a>
          </div>
          <div className="lg:flex hidden gap-2.5 py-3 px-4 bg-[#F0F0F0] rounded-[62px] max-[1129px]::w-[30%] min-[1130px]:w-[36%] xl:w-[44%] w-[30%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
                fill="black"
                fill-opacity="0.4"
              />
            </svg>
            <input
              type="search"
              placeholder="Search for products..."
              className="text-[16px] font-normal font-poppins text-[#00000066] focus:outline-none w-full"
            />
          </div>
          <div
            className={`flex items-center transition-all duration-500 ${
              showInput
                ? "max-[520px]:w-[50%] justify-end max-[768px]:w-[60%]"
                : "max-[520px]:w-auto justify-between"
            }`}
          >
            <div
              className={`lg:hidden flex transition-all duration-500 ${
                showInput
                  ? "bg-[#F0F0F0] max-[520px]:py-2 py-3 px-4 gap-3 rounded-[62px] min-[620px]:w-[74%] max-[619px]:w-full max-[520px]:w-[90%] md:mr-5"
                  : ""
              } xl:w-[84%] lg:w-[80%]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height={`${showInput ? "24" : "40"}`}
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-all duration-300 ${
                  showInput ? "" : "mr-3"
                }`}
                onClick={inputToggler}
              >
                <path
                  d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
                  fill="black"
                  fillOpacity={showInput ? "0.4" : "1"}
                  className="transition-all duration-300"
                />
              </svg>
              {showInput && (
                <input
                  type="search"
                  placeholder="Search for products..."
                  className={`text-[16px] font-normal font-poppins text-[#00000066] focus:outline-none w-full max-[520px]:-ml-0.5 transition-all duration-300 ${
                    showInput ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
            <div
              className={`min-[769px]:flex transition-all duration-500 ${
                showInput
                  ? "max-[768px]:hidden max-[768px]:opacity-0"
                  : "max-[768px]:flex opacity-100"
              } gap-4`}
            >
              <img src={CartImage} alt="" className="w-[24px] h-[24px]" />
              <img src={ProfileImage} alt="" className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
