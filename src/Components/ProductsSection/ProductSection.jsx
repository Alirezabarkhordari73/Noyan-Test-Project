import React from "react";

import Image2 from "../../Assets/Image2.png";
import Image4 from "../../Assets/Image4.png";
import Image5 from "../../Assets/Image5.png";
import Image6 from "../../Assets/Image6.png";

const ProductSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-start p-6 lg:p-0">
      <div className="hidden lg:inline-block w-[20%] h-full object-contain">
        <img src={Image2} className="object-cover h-full" alt="" />
      </div>
      <div className="w-full flex flex-col justify-between items-start">
        <div className="h-[49%] flex justify-between items-start px-2">
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-start gap-7">
            <div className="w-full lg:w-[35%] mt-5">
              <div className="w-[120px] h-[10px] bg-myGreen rounded-md"></div>
              <h1 className="text-[2.5rem]">محصولات</h1>
              <h3 className="text-myGreen text-[1.3rem] font-bold">
                نویان نگین پارسیان
              </h3>
              <p className="text-[1rem] text-[#a3a3a3] mt-3">
                شرکت نویان نگین پارسیان با بهره گیری از تیم ماهر و آگاه بر
                نیازمندیها و الزامات آزمایشگاه ها,اقدام به فروش دستگاه ها,لوازم
                مصرفی دستگاه ها و کیت های آزمایشگاهی کرده است. تیم فروش با توجه
                به شرایط هر مشتری پیش از خریدشان مشاوره ای را برای انتخاب بهترین
                گزینه ارائه میدهد.
              </p>
              <button className="border-[1px] border-[#292929] w-[130px] h-[2.5rem] rounded-[15px] mt-3 hover:border-[#239e48] hover:text-[#239e48] transition-all duration-200">
                همه محصولات
              </button>
            </div>
            <div className="w-full lg:w-[61%] relative flex justify-center mt-10 lg:mt-0">
              <img src={Image4} className="w-[900px] object-contain" alt="1" />
            </div>
          </div>
        </div>

        <div className="w-full h-[49%] flex justify-between items-start mt-12 lg:mt-0">
          <div className="w-full h-full flex items-center justify-start gap-16">
            <div className="w-full lg:w-[57%]">
              <img src={Image5} className="object-contain" alt="" />
            </div>
            <div className="hidden w-full lg:w-[43%] h-full lg:flex flex-col justify-between relative">
              <div className="w-[90%]">
                <h1 className="text-[1.7rem] text-myGreen font-bold">
                  ظرفیت دوهزار عدد RV
                </h1>
                <p className="text-[0.8rem] text-[#a3a3a3] mt-2">
                  ما به صورت اتوماتیک و بدون دخالت کاربر RV قابلیت بارگذاری و
                  مرتب سازی
                </p>
              </div>
              <img
                src={Image6}
                className="object-contain w-[350px] absolute left-0 bottom-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
