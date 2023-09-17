import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SideBar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Rencent Projects</span>
      <span>Portfolio</span>

      <Swiper>
        <SwiperSlide>
          <img src={SideBar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
