import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";


// Images
import waySlide1 from '../img/home/eksen_way_slide1.png'

const HomeSlide1 = () => {

  const waySlideList = [
      {
          id: 1,
          img: waySlide1,
      },

      {
          id: 2,
          img: waySlide1,
      }
  ]

  const wayList =  waySlideList.map((data) => {
      return (
        <SwiperSlide key={data.id}>
            <img src={data.img} alt="" />
        </SwiperSlide>
      )

  })


  return (
    <section className='way-slide'>
        <div className="container-fluid gx-0 overflow-hidden py-5">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-4 paragraph-margin">
                    <h1 className="display-3 fw-bold text-uppercase">
                        daha iyi bir yol bulmak için kararlıyız
                    </h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum fugit totam ipsa nostrum, mollitia eos ex consequuntur accusamus dignissimos magnam impedit architecto modi nobis, sit nisi optio odio dolores.
                    </p>
                </div>
                <div className="col-lg-7 text-end">
                    <Swiper 
                        modules={[Navigation, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={{ 
                            nextEl: ".way-slide-next", 
                            prevEl: ".way-slide-prev", }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}>
                    {wayList}
                    <div className="way-slide-btn">
                        <span className="bi bi-arrow-left fs-3 way-slide-prev"></span>
                        <span className="bi bi-arrow-right fs-3 way-slide-next"></span>
                    </div>
                    </Swiper>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeSlide1