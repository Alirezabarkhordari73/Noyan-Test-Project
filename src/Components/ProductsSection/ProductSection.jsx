import React from "react";

import Image2 from "../../Assets/Image2.png";
import Image4 from "../../Assets/Image4.png";
import Image5 from "../../Assets/Image5.png";
import Image6 from "../../Assets/Image6.png";

const ProductSection = () => {
  return (
    <div className="flex h-screen justify-start">
      <div className="w-[20%] h-full object-contain">
        <img src={Image2} className="object-cover h-full" />
      </div>
      <div className="w-full flex flex-col justify-between items-start">
        <div className="h-[49%] flex justify-between items-start px-2">
          <div className="w-full h-full flex items-center justify-start gap-7">
            <div className="w-[35%]">
              <div className="w-[120px] h-[10px] bg-[#239e5a] rounded-md"></div>
              <h1 className="text-[2.5rem]">محصولات</h1>
              <h3 className="text-[#239e5a] text-[1.3rem] font-bold">
                نویان نگین پارسیان
              </h3>
              <p className="text-[1rem] text-[#a3a3a3] mt-3">
                شرکت نویان نگین پارسیان با بهره گیری از تیم ماهر و آگاه بر
                نیازمندیها و الزامات آزمایشگاه ها,اقدام به فروش دستگاه ها,لوازم
                مصرفی دستگاه ها و کیت های آزمایشگاهی کرده است. تیم فروش با توجه
                به شرایط هر مشتری پیش از خریدشان مشاوره ای را برای انتخاب بهترین
                گزینه ارائه میدهد.
              </p>
              <button className="border-[1px] border-[#292929] w-[130px] h-[2.5rem] rounded-[15px] mt-2 hover:border-[#239e48] hover:text-[#239e48] transition-all duration-200">
                همه محصولات
              </button>
            </div>
            <div className="w-[61%] relative flex justify-center">
              <img src={Image4} className="w-[900px] object-contain" alt="1" />
            </div>
          </div>
        </div>

        <div className="w-full h-[49%] flex justify-between items-start">
          <div className="w-full h-full flex items-center justify-start gap-16">
            <div className="w-[57%]">
              <img src={Image5} className="object-contain" />
            </div>
            <div className="w-[43%] h-full flex flex-col justify-between relative">
              <div className="w-[90%]">
                <h1 className="text-[1.7rem] text-[#239e5a] font-bold">
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
