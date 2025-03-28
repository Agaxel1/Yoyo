import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../CSS/styles.css";

const Carousel = () => {
    return (
        <div className="carousel">
            <Swiper navigation={true} modules={[Navigation]}>
                <SwiperSlide><img src="https://api.vida-roleplay.com/imagenes/back1.png" alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src="https://api.vida-roleplay.com/imagenes/back2.png" alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img src="https://api.vida-roleplay.com/imagenes/back3.png" alt="Slide 3" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
