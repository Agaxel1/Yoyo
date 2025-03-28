import React from "react";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../CSS/styles.css";
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="carousel-container">
        <Swiper navigation={true} modules={[Navigation]} className="carousel">
          <SwiperSlide>
            <div className="carousel-slide">
              <img src={slider1} alt="Slide 1" />
              <div className="hero-text">
                <h1>Colectivo Comunidad Consiente</h1>
                <p>"PROPÓSITO O MENSAJE DEL COLECTIVO"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide">
              <img src={slider2} alt="Slide 2" />
              <div className="hero-text">
                <h1>Colectivo Comunidad Consiente</h1>
                <p>"PROPÓSITO O MENSAJE DEL COLECTIVO"</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide">
              <img src={slider3} alt="Slide 3" />
              <div className="hero-text">
                <h1>Colectivo Comunidad Consiente</h1>
                <p>"PROPÓSITO O MENSAJE DEL COLECTIVO"</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </header>
  );
};

export default Header;
