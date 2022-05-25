import React from "react";

// Swıper

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import NewsImg1 from "../../img/home/eksen_news_slide1.png";
import NewsImg2 from "../../img/home/eksen_news_slide1.png";

const NewsContent = () => {
  const newsList = [
    {
      id: 1,
      img: NewsImg1,
      tag1: 'Haber',
      tag2: 'Faaliyet',
      country: 'Belcika',
      text: 'eksen lojistik yeni ekibiyle belçika da faaliyete geçti',
      date: '22 subat 2022'
    },
    {
      id: 1,
      img: NewsImg2,
      tag1: 'Haber',
      tag2: 'Faaliyet',
      country: 'Belcika',
      text: 'eksen lojistik yeni ekibiyle belçika da faaliyete geçti',
      date: '22 subat 2022'
    },
  ]

  const newsData = newsList.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <div>
            <img src={data.img} alt="" />
            <div className="position-absolute top-0 p-3 news-content-wrap">
                <div className="news1-tag col-lg-10 p-4">
                    <span className="text-decoration-underline">{data.tag1}</span>
                    <span className="text-decoration-underline mx-2">{data.country}</span>
                    <span className="text-decoration-underline">{data.tag2}</span>
                    <h2 className="text-uppercase py-3 display-5 fw-bold">{data.text}</h2>
                    <span className="news1-date text-uppercase">{data.date}</span>
                </div>
            </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".news-slide-next",
          prevEl: ".news-slide-prev",
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {newsData}
        <div className="news-slide-btn">
            <span className="bi bi-arrow-left fs-3 news-slide-prev"></span>
            <span className="bi bi-arrow-right fs-3 news-slide-next"></span>
        </div>
      </Swiper>
    </>
  );
};

export default NewsContent;
