import React from "react";

const DanhMuc = () => {
  return (
    <div className="bg-yellow-100 lg:px-24 p-5">
      <h1 className="lg:text-[30px] text-[20px] font-bold">
        <span className="text-black">DANH MỤC</span>
        <span className="text-[#DE1313] ml-2">SẢN PHẨM</span>
      </h1>
      <p className="text-black">
        Thương hiệu uy tín chuyên mật ong, các loại hạt dinh Thương hiệu uy tín
        chuyên mật ong, các loại hạt dinh dưỡng
      </p>
      <div className="grid lg:grid-cols-4">
        <div className="lg:w-[302px] w-full h-[368px] place-items-center p-5 mt-5 bg-white">
          <div>
            <img src="/images/sanday.png" alt="sanday" />
          </div>
          <p className="text-[#000000] text-[24px] font-bold my-3">
            Bột sắn dây sạch
          </p>
          <p className="text-[#6D6E76]">
            Thương hiệu uy tín chuyên mật ong, các loại hạt dinh Thương hiệu uy
            tín chuyên mật ong, các loại hạt dinh
          </p>
        </div>
        <div className="lg:w-[302px] w-full h-[368px] place-items-center p-5 mt-5 bg-white">
          <div>
            <img src="/images/botnghe.png" alt="botnghe" />
          </div>
          <p className="text-[#000000] text-[24px] font-bold my-3">
            Bột Nghệ tươi
          </p>
          <p className="text-[#6D6E76]">
            Thương hiệu uy tín chuyên mật ong, các loại hạt dinh Thương hiệu uy
            tín chuyên mật ong, các loại hạt dinh dưỡng
          </p>
        </div>
        <div className="lg:w-[302px] w-full h-[368px] place-items-center p-5 mt-5 bg-white">
          <div>
            <img src="/images/matong.png" alt="matong" />
          </div>
          <p className="text-[#000000] text-[24px] font-bold my-3">
            Mật ong thiên nhiên
          </p>
          <p className="text-[#6D6E76]">
            Thương hiệu uy tín chuyên mật ong, các loại hạt dinh Thương hiệu uy
            tín chuyên mật ong, các loại hạt dinh dưỡng
          </p>
        </div>
        <div className="lg:w-[302px] w-full h-[368px] place-items-center p-5 mt-5 bg-white">
          <div>
            <img src="/images/matongtunhien.png" alt="matongtunhien" />
          </div>
          <p className="text-[#000000] text-[24px] font-bold my-3">
            Bột sắn dây sạch
          </p>
          <p className="text-[#6D6E76]">
            Thương hiệu uy tín chuyên mật ong, các loại hạt dinh Thương hiệu uy
            tín chuyên mật ong, các loại hạt dinh
          </p>
        </div>
      </div>
      <div className="place-items-center py-5">
        <div className="bg-[#125194] lg:w-[245px] w-full h-[67px] flex items-center justify-center">
          <p>Xem tất cả </p>
        </div>
      </div>
    </div>
  );
};

export default DanhMuc;
