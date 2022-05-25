import React from 'react'

// images
import videoPoster from '../img/home/eksen_video_poster.png';
import icon1 from '../img/icon/icon1.png';
import icon2 from '../img/icon/icon2.png';
import icon3 from '../img/icon/icon3.png';
import icon4 from '../img/icon/icon4.png';
// Component
import Title from './global/Title';

const Solutions = () => {
  return (
    <section className='solutions'>
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                    <img src={videoPoster} alt="" />
                </div>
                <div className="col-lg-6">
                    <Title
                    title='büyük sevkiyatlar için premium çözümler'
                    subtitle='size özel'
                    paragraph='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam corporis, numquam quam, aspernatur dicta aut nam inventore maxime unde dolorem consequatur. Rerum, cum velit atque ea quia accusamus magnam minus?'/>
                    <a href='#!' className="btn btn-main">iletişime geç</a>
                    <a href='#!' className="btn btn-main active ms-2">daha fazla</a>
                </div>
            </div>
            <div className="solutions-icon py-5">
                <div className="row pt-5">
                    <div className="col-md-3 solutions-icon-item">
                        <img src={icon1} alt="" />
                        <span> Tır <br /> Filosu </span>
                    </div>
                    <div className="col-md-3 solutions-icon-item">
                        <img src={icon2} alt="" />
                        <span> Güvenlik <br /> Sözleşmesi </span>
                    </div>
                    <div className="col-md-3 solutions-icon-item">
                        <img src={icon3} alt="" />
                        <span> Anında <br /> Çözümler </span>
                    </div>
                    <div className="col-md-3 solutions-icon-item">
                        <img src={icon4} alt="" />
                        <span> Zamanında <br /> Teslimat </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Solutions