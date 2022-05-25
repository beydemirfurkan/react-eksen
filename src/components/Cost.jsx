import React from 'react'

// Images
import eksenCostMap from '../img/home/eksen_cost_map.png';

// Button


const Cost = () => {
  return (
    <section className='cost'>
        <div className="container py-5">
            <div className="row justify-content-between py-5">
                <div className="col-lg-5">
                    <div className="section-title">
                        <span className="text-uppercase text-black-50 fs-4">size özel</span>
                        <h1 className='display-4 text-uppercase fw-bold py-4'>maaliyet hesapla</h1>
                        <p>
                        Yükü göndermek istediğin yer,  teslim edeceğin yeri ve ortalama ağırlığını seç ortalama maaliyetini kısa sürede hesaplayıp sana dönüş yapalım.
                        </p>
                    </div>
                    <form action="">
                        {/* Start Country */}
                        <div>
                            <select name="" id="" className='form-select'>
                                <option value="1" selected>Başlangıç Ülkesi</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>
                        </div>
                        {/* Finish Country */}
                        <div>
                            <select name="" id="" className='form-select'>
                                <option value="1" selected>Bitiş Ülkesi</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div>
                            <input type="text" className='form-control' placeholder='email adresi' />
                        </div>
                        {/* Telefon */}
                        <div>
                            <input type="tel" className='form-control' placeholder='telefon numarası' />
                        </div>
                        <div className="row">
                            {/* Weight */}
                            <div className="col-md-6">
                                <input type="number" className='form-control' placeholder='ort. ağırlık' />
                            </div>
                            {/* Date */}
                            <div className='col-md-6'>
                                <input type="date" className='form-control' placeholder='tarih seç' />
                            </div>
                        </div>
                    </form>
                    <a href="#!" className='btn btn-main mt-5'>hesapla</a>
                </div>
                <div className="col-lg-6">
                    <img src={eksenCostMap} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cost