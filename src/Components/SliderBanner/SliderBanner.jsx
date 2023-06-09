import React from "react";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import Image3 from "../../Assets/Image3.png";

const SliderBanner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
      <div className="w-[100%] h-[550px] lg:h-[800px] lg:w-[55%] flex justify-center lg:justify-between items-center p-1 gap-9">
        <div className="w-[10%] flex flex-col justify-center items-center gap-4">
          <div class="border-[3px] border-[#292929] rounded-full w-[18px] h-[18px] cursor-pointer hover:border-[#239e48]"></div>
          <div class="border-[3px] border-[#292929] rounded-full w-[18px] h-[18px] cursor-pointer hover:border-[#239e48]"></div>
          <div class="border-[3px] border-[#292929] rounded-full w-[18px] h-[18px] cursor-pointer hover:border-[#239e48]"></div>
          <div class="border-[3px] border-[#292929] rounded-full w-[18px] h-[18px] cursor-pointer hover:border-[#239e48]"></div>
          <div class="border-[3px] border-[#292929] rounded-full w-[18px] h-[18px] cursor-pointer hover:border-[#239e48]"></div>
        </div>
        <div className="h-[800px] flex flex-col justify-center items-end p-1">
          <h1 className="TitleBanner">AutoLumo</h1>
          <h1 className="Title2Banner">A2000Plus</h1>
          <h1 className="text-[2.1rem] lg:text-[2.7rem] font-bold mt-3">
            تشخیص سریع, درمان به موقع
          </h1>
          <div className="bg-myGreen text-white px-3 py-2 mt-5 text-[0.8rem] lg:text-[1rem]">
            ظرفیت بارگذاری بیست و چهار تست متفاوت به طور همزمان از امتیازات
            دستگاه آتولومو
          </div>
          <button className="border-[1px] border-[#292929] w-[130px] h-[2.5rem] rounded-[15px] mt-6 hover:border-[#239e48] hover:text-[#ffffff] transition-all duration-200">
            درباره محصول
          </button>
        </div>
      </div>
      <div className="w-[100%] lg:w-[45%] flex justify-center items-center">
        <div className="w-[600px] h-[620px] flex items-center justify-center">
          <LazyLoadImage
            effect="blur"
            src={Image3}
            alt=""
            width={"480px"}
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        {/* <img
          src={Image3}
          className="w-[700px] h-[430px] object-contain"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default SliderBanner;
