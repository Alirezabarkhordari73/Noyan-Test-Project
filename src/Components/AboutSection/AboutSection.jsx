import React from "react";

import NoyanImage from "../../Assets/NoyanBuilding.png";

const AboutSection = () => {
  return (
    <div className="flex h-[690px] justify-start items-start">
      <div className="w-[55%] lg:w-[65%] h-full">
        <img src={NoyanImage} className="w-full h-full bg-contain" alt="map" />
      </div>
      <div className="w-[40%] lg:w-[45%] h-full flex justify-start items-center">
        <div className="w-full lg:w-[70%] p-1 mr-8 lg:mr-16">
          <div className="w-[120px] h-[10px] bg-[#239e5a] rounded-sm" />
          <h1 className="text-black text-[2rem] lg:text-[2.5rem] mt-4">
            درباره
          </h1>
          <h1 className="text-[1rem] lg:text-[1.6rem] text-[#239e5a]">
            نویان نگین پارسیان
          </h1>
          <h2 className="text-[1rem] lg:text-[1.2rem] text-[#a0a0a0] border-b-[1px] border-[#fff] mt-5 pb-3">
            باتوجه به تنوع وظایف و تخصص در نویان, ساختار وظیفه ای در این شرکت
            طراحی و در حال اجرا میباشد و متشکل از بخش های مختلف که هر کدام به
            صورت تخصصی و تیم وورک مشغول انجام وظایف مربوط به خود میباشند .
            دیپارتمان تولید , دیپارتمان فروش و خدمات پس از فروش, دیپارتمان
            بازاریابی, دیپارتمان روابط عمومی, دیپارتمان تحقیق و توسعه و تکنولوژی
            و.. نمونه هایی از بخش های چابک و فعال شرکت نویان میباشد
          </h2>
          <button className="border-[1px] border-[#313131] text-[#313131] hover:border-[#239e5a] hover:text-[#239e5a] transition duration-200 w-[130px] h-[2.5rem] rounded-[15px] mt-6">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
