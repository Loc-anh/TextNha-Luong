import React from "react";

const DacSacTuNhien = () => {
  return (
    <div className="bg-yellow-100 lg:w-full h-full ">
      <img
        src="/images/lomatong.png"
        alt="lomatong"
        className="block md:hidden"
      />
      <div className="flex justify-between items-center ">
        <div className="lg:grid grid-cols-1 grid-rows-4 gap-4 lg:px-24 p-5">
          <img
            src="/images/logo-nhaluong.png"
            alt="Logo-nhaluong"
            className="h-[40px] mb-5 "
          />
          <p className="text-[#000000] font-bold lg:text-[34px] text-[25px]">
            ĐẶC SẢN TỪ THIÊN NHIÊN
          </p>
          <p className="text-[#000000] lg:w-[478px] lg:text-[19px]">
            Thương hiệu uy tín chuyên mật ong, các loại hạt dinh dưỡng, viên
            tinh nghệ mật ong cùng với sữa ong chúa và phấn hoa.
          </p>
          <div className="bg-[#125194] lg:w-[245px] h-[67px] flex items-center justify-center mt-5">
            <p>Xem tất cả sản phẩm</p>
          </div>
        </div>
        <img
          src="/images/lomatong.png"
          alt="lomatong"
          className="h-[884px] hidden lg:block w-[801px]"
        />
      </div>
      <h1 className="lg:text-[30px] text-[20px] font-bold py-5 px-5 lg:px-24">
        <span className="text-black">CÂU CHUYỆN CỦA </span>
        <span className="text-[#DE1313]">NHÀ LƯƠNG</span>
      </h1>
    </div>
  );
};

export default DacSacTuNhien;
