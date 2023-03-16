import React, { useEffect, useState } from "react";

import { SliderBanner } from "../Index";
import Logo from "../../Assets/Logo.png";

import { TbWorld } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="Banner">
      <div className={menuActive ? "menuActive" : "menuDeative"}>
        {menuActive ? (
          <AiOutlineClose
            className="text-[2rem] text-myGreen mt-3 mr-3 cursor-pointer"
            onClick={() => setMenuActive((prev) => !prev)}
          />
        ) : (
          ""
        )}
        <nav className="flex flex-col justify-start items-center mt-2 gap-6">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} className="w-[31px] h-[31px]" alt="Logo" />
          </div>
          <h1 className="text-[1rem] font-semibold text-myGreen cursor-pointer">
            صفحه اصلی
          </h1>
          <p className="activemenu-items-style">درباره ما</p>
          <p className="activemenu-items-style">محصولات</p>
          <p className="activemenu-items-style">پشتیبانی/خدمات</p>
          <p className="activemenu-items-style">رویداد ها</p>
          <p className="activemenu-items-style">اخبار</p>
          <p className="activemenu-items-style">گالری</p>
          <p className="activemenu-items-style">تماس با ما</p>
        </nav>
      </div>
      <div className="flex justify-between items-start">
        <AiOutlineMenu
          onClick={() => setMenuActive((prev) => !prev)}
          className={`${
            menuActive ? "opacity-0" : "opacity-1"
          } xl:hidden text-[2rem] text-myGreen mt-3 mr-3 cursor-pointer transition-all duration-200`}
        />
        <nav className="hidden mt-3 xl:flex justify-center items-center gap-6 mr-9">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} className="w-[31px] h-[31px]" alt="Logo" />
            <span className="text-[1rem] font-semibold">
              نویان نگین پارسیان
            </span>
          </div>
          <h1 className="text-[1rem] font-semibold text-myGreen cursor-pointer">
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
            <TbWorld className="text-[1.3rem] text-myGreen" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>ورود</p>
            <BsFillPersonFill className="text-[1.3rem] text-myGreen" />
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>جستجو</p>
            <AiOutlineSearch className="text-[1.3rem] text-myGreen" />
          </div>
        </div>
      </div>
      <SliderBanner />
    </div>
  );
};

export default Header;
