import React from "react";

const OurStory = () => {
  return (
    <div>
      <img
        src="/images/La-cay.png"
        alt="La-cay"
        className=" inline lg:hidden"
      />
      <div className="bg-red-600 w-full lg:h-[610px] lg:grid-cols-2 lg:grid   ">
        <img
          src="/images/La-cay.png"
          alt="La-cay"
          className="w-[700px] h-full hidden lg:inline"
        />
        <div className="text-xl lg:p-24 p-5 place-content-center ">
          <h1 className="lg:text-[30px] text-[20px] font-bold pb-2">
            <span className="text-black">CÂU</span>
            <span className="text-[#ffffff] ml-2">CHUYỆN CỦA CHÚNG TÔI</span>
          </h1>
          <p className="text-[#ffffff] text-[16px] hidden lg:inline lg:w-[540px]">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </p>
          <p className="text-[16px]inline lg:hidden">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
            <a href="#" className="text-black underline inline lg:hidden ml-10">
              Xem thêm
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
