import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Rencent Projects</span>
      <span>Portfolio</span>

      <Swiper>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
