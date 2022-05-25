import React from 'react'

import eksenHero from '../img/home/eksen_hero.png'

const Hero = () => {
  return (
    <section>
        <div className="container-fluid overflow-hidden gx-0">
            <div className="hero-img position-relative">
                <img src={eksenHero} alt="eksen hero" className='w-100' />
                <div className="hero-text position-absolute top-50 start-50 translate-middle">
                    <h1><span>Sadece bir çağrıda</span> en kısa sürede <span>istediğin yere</span></h1>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero