import React from "react";
import "./news.css";
import { Link } from 'react-router-dom';

//Swiper Core
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

//Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const News = (props) => {
    return (
    <section className="hero" id="hero">
      <h3>Galeri Kosan</h3>
      
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
      {props.kost.map((kosan, index) => (
        <SwiperSlide className="news-wrap">
          <div className="news">
            <h5>{kosan.nama}</h5>
            <Link to="/kosan">
              <img src={kosan.url1} alt="" className="swiper-img" />
            </Link>
            <p>{kosan.alamat}</p>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </section>
  );
};

export default News;
