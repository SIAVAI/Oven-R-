import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import w2 from "../assets/welcome2.jpg";
import w4 from "../assets/welcome4.jpg";
import w3 from "../assets/welcome3.jpg";
import w5 from "../assets/welcome5.jpg";
import w6 from "../assets/welcome6.jpg";
import w7 from "../assets/welcome7.jpg";
import w8 from "../assets/welcome8.jpg";
import w9 from "../assets/welcome9.jpg";
const Menu = () => {
  return (
    <div className="mt-10 p-10 lg:w-[50%]">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={w2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={w9} />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Menu;
