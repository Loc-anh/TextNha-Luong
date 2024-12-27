import React from "react";

const ChatLuongCamKet = () => {
  return (
    <div className="bg-yellow-100 lg:px-24 lg:pb-10 p-5">
      <h1 className="lg:text-[30px] text-[20px] font-bold">
        <span className="text-black">CAM KẾT</span>
        <span className="text-[#DE1313] ml-2">CHẤT LƯỢNG</span>
      </h1>
      <p className="text-black">
        Thương hiệu uy tín chuyên mật ong, các loại hạt dinh Thương hiệu uy tín
        chuyên mật ong, các loại hạt dinh dưỡng
      </p>
      <div>
        <div className="lg:grid-cols-4 grid">
          <div className="lg:w-[302px] h-[260px] p-5 mt-5 bg-white">
            <div>
              <img src="/images/nguyenchat.png" alt="nguyenchat" />
            </div>
            <p className="text-[#000000] text-[24px] font-bold my-3">
              Nguyên chất
            </p>
            <p className="text-[#6D6E76] text-[19px]">
              100% nguyên chất từ thiên nhiên, không pha tạp hóa chất
            </p>
          </div>
          <div className="lg:w-[302px] h-[260px] hidden lg:inline  p-5 mt-5 bg-white">
            <div>
              <img src="/images/baove.png" alt="baove" />
            </div>
            <p className="text-[#000000] text-[24px] font-bold my-3">An toàn</p>
            <p className="text-[#6D6E76] text-[19px]">
              Đã được kiểm định chất lượng và vệ sinh an toàn thực phẩm
            </p>
          </div>
          <div className="lg:w-[302px] h-[260px] hidden lg:inline  p-5 mt-5 bg-white">
            <div>
              <img src="/images/tiente.png" alt="tiente" />
            </div>
            <p className="text-[#000000] text-[24px] font-bold my-3">Giá tốt</p>
            <p className="text-[#6D6E76] text-[19px]">
              Bán trực tiếp từ nông trại với giá tốt nhất thị trường, hỗ trợ
              24/7
            </p>
          </div>
          <div className="lg:w-[302px] h-[260px] hidden lg:inline  p-5 mt-5 bg-white">
            <div>
              <img src="/images/boiduong.png" alt="boiduong" />
            </div>
            <p className="text-[#000000] text-[24px] font-bold my-3">
              Bổ dưỡng
            </p>
            <p className="text-[#6D6E76] text-[19px]">
              Bổ sung dưỡng chất tăng cường đề kháng, tốt cho sức khỏe
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-black sm:hidden items-center justify-between w-full max-w-xs mx-auto py-4 bg-cream">
        <button className="text-2xl">&lt;</button>
        <span className="text-xl font-medium">
          1<span className="mx-1">/</span>4
        </span>
        <button className="text-2xl">&gt;</button>
      </div>
    </div>
  );
};

export default ChatLuongCamKet;
