import React from 'react'

import Logo from '../img/global/eksen_logo.png'
import isoIcon from '../img/icon/iso-9001.png'

const Footer = () => {
  return (
    <footer className='px-5'>
        <div className="container-fluid px-5 py-3">
            <div className="row justify-content-between align-items-center pb-4">
                <div className="col-lg-3">
                    <img src={Logo} alt="" />
                </div>
                <div className="col-lg-3">
                    <i className='bi bi-instagram'></i>
                    <i className='bi bi-linkedin'></i>
                </div>
            </div>
            {/* Footer Middle */}
            <div className="row py-4">
                <div className="col-lg-3">
                    <p>
                        Sektör ve büyüklükten bağımsız olarak güvenilirlik,
                        çevresel etki ve maliyet odaklı tüm işletmeler için
                        verimli çözümler üretiyoruz.
                    </p>
                </div>
                <div className="col-lg-2">
                    <ul className="list-unstyled">
                        <li>Büyükdere Cad. No.62</li>  
                        <li>Kat.5 Fulya Mah.</li>  
                        <li>Mecidiyeköy Şişli</li>  
                        <li><strong>İstanbul</strong></li> 
                    </ul>
                </div>
                <div className="col-lg-3">
                    <ul className="list-unstyled">
                        <li><a href="tel:092122670721"><i className="bi bi-telephone pe-2"></i> +90 212 267 07 21</a></li>
                        <li><a href="mailto:info@eksenlojistik.com.tr"><i className="bi bi-envelope pe-2"></i> info@eksenlojistik.com.tr</a></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <label For="" className="d-block">Bültenimize kayıt olun</label>
                    <input type="text" placeholder="E-mail Adresi" className="py-3 my-3 form-control"/>
                    <span className="fs-08 py-3 d-block">Bu formu göndererek şartlar ve koşullarımızı <a href="#!" className="text-decoration-underline fw-bold">kabul etmiş olursunuz</a></span>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="d-flex justify-content-between align-items-center pt-4">
                <div className="col-lg-4">
                    <ul className="d-flex pb-3">
                        <li className="me-4"><a href="" className="fw-bold">Şartlar ve Koşullar</a></li>
                        <li className="me-4"><a href="" className="fw-bold">Yasal Uyarı</a></li>
                        <li className="me-4"><a href="" className="fw-bold">Veri Gizliliği</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <img src={isoIcon} alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer