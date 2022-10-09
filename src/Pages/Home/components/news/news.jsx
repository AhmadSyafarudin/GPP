import React from "react";
import "./news.css";

//Swiper Core
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

//Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Image
import IMG1 from "../../assets/image 2.png";
import IMG3 from "../../assets/image 3.png";
import IMG2 from "../../assets/image 4.png";

const News = () => {
  return (
    <section className="hero" id="hero">
      <h3>Recent News</h3>
      <Swiper
        className="container-section"
        // install Swiper modules
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="news-wrap">
          <div className="news">
            <h5>Topic 1</h5>
            <img src={IMG1} alt="" className="swiper-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="news-wrap">
          <div className="news">
            <h5>Topic 2</h5>
            <img src={IMG2} alt="" className="swiper-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="news-wrap">
          <div className="news">
            <h5>Topic 3</h5>
            <img src={IMG3} alt="" className="swiper-img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default News;
