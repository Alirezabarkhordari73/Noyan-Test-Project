import React from "react";

import { LastNews } from "../Index";
import MapImage from "../../Assets/NewsMapImage.png";

const NewsSection = () => {
  return (
    <div className="h-screen flex justify-start items-start">
      <div className="h-full w-[60%]">
        <img src={MapImage} className="object-cover h-full" alt="map" />
      </div>
      <div className="w-1/2 h-full bg-[#1d1d1d] flex justify-start items-center">
        <div className="w-[60%] p-1 mr-16">
          <div className="w-[120px] h-[10px] bg-[#239e5a] rounded-sm" />
          <h1 className="text-white text-[2.5rem] mt-4">اخبار</h1>
          <h1 className="text-[1.6rem] text-[#239e5a]">نویان نگین پارسیان</h1>
          <h2 className="text-[1.8rem] text-[#d4d4d4] border-b-[1px] border-[#fff] pb-3">
            با عشق و امید به سوی فردای بهتر
          </h2>
          <LastNews />
          <button className="border-[1px] border-[#239e5a] text-[#fff] w-[130px] h-[2.5rem] rounded-[15px] mt-6">
            همه محصولات
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
