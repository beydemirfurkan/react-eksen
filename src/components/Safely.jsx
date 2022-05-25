import React from 'react'

// Images
import eksenSafely from '../img/home/eksen_safely.png'

const Safely = () => {
  return (
    <section className='safely'>
        <div className="container-fluid gx-0 overflow-hidden py-5">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <img src={eksenSafely} alt="" />
                </div>
                <div className="col-lg-4">
                    <h1 className='display-3 fw-bold text-uppercase'>
                        daha iyi bir yol bulmak için kararlıyız
                    </h1>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum fugit totam ipsa nostrum, mollitia eos ex consequuntur accusamus dignissimos magnam impedit architecto modi nobis, sit nisi optio odio dolores.
                    </p>
                    <a href="" class="btn btn-main2 mt-3">servislerimiz</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Safely