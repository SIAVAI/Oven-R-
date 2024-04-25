import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

//import "../../src/index.css";

import g1 from "../assets/gallery01.png";
import g2 from "../assets/gallery02.png";
import g3 from "../assets/gallery03.png";
import g4 from "../assets/gallery04.png";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";
import g8 from "../assets/g8.jpg";
import g9 from "../assets/g9.jpg";
import g10 from "../assets/g10.jpg";
import g11 from "../assets/g11.jpg";
import g12 from "../assets/g12.jpg";

const Gallery = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center font-bodoni">
      <div className="p-10 w-[70%]">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src={g1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={g12} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <h2 className="text-6xl text-[#feee8e] font-bodoni font-bold">
          Our Gallery
        </h2>
        <button className="btn text-xl text-black bg-[#feee8e] mt-6">
          Visit Here
        </button>
      </div>
    </div>
  );
};

export default Gallery;
