import React from "react";

import { SliderBanner } from "../Index";
import Logo from "../../Assets/Logo.png";

import { TbWorld } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="Banner">
      <div className="flex justify-between items-start">
        <nav className="mt-3 flex justify-center items-center gap-6 mr-9">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} className="w-[31px] h-[31px]" alt="Logo" />
            <span className="text-[1rem] font-semibold">
              نویان نگین پارسیان
            </span>
          </div>
          <h1 className="text-[1rem] font-semibold text-[#239e48] cursor-pointer">
            صفحه اصلی
          </h1>
          <p className="menu-items-style">درباره ما</p>
          <p className="menu-items-style">محصولات</p>
          <p className="menu-items-style">پشتیبانی/خدمات</p>
          <p className="menu-items-style">رویداد ها</p>
          <p className="menu-items-style">اخبار</p>
          <p className="menu-items-style">گالری</p>
          <p className="menu-items-style">تماس با ما</p>
        </nav>
        <div className="mt-3 flex justify-center items-center gap-6 ml-5">
          <div className="flex justify-center items-center gap-1">
            <p>فارسی</p>
            <TbWorld className="text-[1.3rem] text-[#239e48]" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>ورود</p>
            <BsFillPersonFill className="text-[1.3rem] text-[#239e48]" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>جستجو</p>
            <AiOutlineSearch className="text-[1.3rem] text-[#239e48]" />
          </div>
        </div>
      </div>
      <SliderBanner />
    </div>
  );
};

export default Header;
