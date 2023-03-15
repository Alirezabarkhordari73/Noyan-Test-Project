import React from "react";

import Logo2 from "../../Assets/Logo2.png";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const ScrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="h-[280px] bg-[#1d1d1d] flex flex-col justify-between items-center">
      <nav className="w-full h-[100px] flex justify-center items-center text-[#707070]">
        <div className="FooterItems">صفحه اصلی</div>
        <div className="FooterItems">درباره ما</div>
        <div className="FooterItems">محصولات</div>
        <div className="FooterItems">پشتیبانی/خدمات</div>
        <img src={Logo2} className="w-[60px] object-cover mx-5" alt="logo" />
        <div className="FooterItems">رویدادها</div>
        <div className="FooterItems">اخبار</div>
        <div className="FooterItems">گالری</div>
        <div className="FooterItems">تماس با ما</div>
      </nav>
      <div className="w-full flex justify-end items-center ml-10">
        <div className="w-[35px] h-[35px] rounded-full cursor-pointer bg-[#239e65] flex justify-center items-center">
          <MdOutlineKeyboardArrowUp
            onClick={() => ScrollToTopHandler()}
            className="text-white text-[2rem]"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-5 mt-3">
        <div className="w-[35px] h-[35px] rounded-full cursor-pointer bg-[#239e65] flex justify-center items-center">
          <AiOutlineTwitter className="text-white text-[1.2rem]" />
        </div>
        <div className="w-[35px] h-[35px] rounded-full cursor-pointer bg-[#239e65] flex justify-center items-center">
          <FaFacebookF className="text-white text-[1.2rem]" />
        </div>
        <div className="w-[35px] h-[35px] rounded-full cursor-pointer bg-[#239e65] flex justify-center items-center">
          <AiOutlineInstagram className="text-white text-[1.2rem]" />
        </div>
      </div>
      <div className="w-[78%] text-center text-[0.9rem] border-t-[1px] border-[#949494] pt-5 text-[#949494] mt-3">
        تمامی حقوق این سایت برای شرکت نویان نوین پارسیان سهامی خاص میباشد
      </div>
    </div>
  );
};

export default Footer;
