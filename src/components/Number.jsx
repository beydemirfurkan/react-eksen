import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// Images
import Maps2 from '../img/home/maps_2.png'
import Country1 from '../img/home/eksen_country1.png'
import Country2 from '../img/home/eksen_country2.png'
import Country3 from '../img/home/eksen_country3.png'
import Country4 from '../img/home/eksen_country4.png'
import Country5 from '../img/home/eksen_country5.png'
import Country6 from '../img/home/eksen_country6.png'


const Number = () => {

  const NumberData = [
      {
          id: 1,
          img: Country1,
          country: 'Almanya',

      },
      {
          id: 2,
          img: Country2,
          country: 'Norveç',

      },
      {
          id: 3,
          img: Country3,
          country: 'Almanya',

      },
      {
          id: 4,
          img: Country4,
          country: 'Almanya',

      },
      {
          id: 5,
          img: Country5,
          country: 'Almanya',

      },
      {
          id: 6,
          img: Country6,
          country: 'Almanya',

      },
  ]

  const dataList = NumberData.map((data)=>{
      return (
        <SwiperSlide key={data.id}>
            <div className="swiper-slide-inner position-relative">
                <img src={data.img} alt="" />
                <span className='position-absolute bottom-0 start-50 translate-middle text-white bg-black bg-opacity-50 w-100 py-3 fw-bold'>
                <span className="fs-3 text-uppercase">{data.country}</span>
                    <br />
                İncele
                </span>
            </div>
        </SwiperSlide>
      )
  })
  return (
    <section className='numbers'>
        <div className="container-fluid text-center py-5 gx-0 overflow-hidden">
            <div className="row flex-column py-5">
                <div className="numbers-top">
                    <div className="title text-uppercase display-4 fw-bold pb-3">63 ülke 52.311km <br /> yol yapılarak teslimat</div>
                        <p>Eksen Lojistik eksiksiz, uçtan uca bir ulaşım hizmeti sağlayıcısıdır. Araç veya yük, LTL veya FTL, tüm  <br /> sektörlerde tüm ulaşım modlarıyla dünyanın birçok noktasına lojistik hizmeti sağlıyoruz</p>
                        <div class="py-3">
                            <a href="" class="btn btn-outline-dark">avrupaya ulaştırıyoruz</a>
                        </div>
                </div>
                <div className="numbers-map">
                    <img src={Maps2} alt="" />
                </div>
                <Swiper 
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={6}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}>
                {dataList}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Number