import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me ...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper></Swiper>
    </div>
  );
};

export default Testimonials;
