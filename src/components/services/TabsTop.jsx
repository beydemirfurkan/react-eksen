import React from 'react'

const TabsTop = ({title, miniTitle, img}) => {
  return (
    <div className='services-hero-top'>
        <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <h1> {title} <br /> <span>{miniTitle}</span> </h1>                  
                </div>
                <div className="col-lg-10 services-hero-img">
                    <img src={img} alt="" />
                    <div className='services-hero-bottom-btn'>
                        {miniTitle}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TabsTop