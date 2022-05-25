import React from 'react'

const TabsInner = (miniTitle, text, img) => {
  return (
    <div className='bg-light'>
        <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
                <h6>{miniTitle}</h6>
                <p>{text}</p>
            </div>
            <div className="col-lg-6">
                <img src={img} alt="Eksen Services" />
            </div>
        </div>
    </div>
  )
}

export default TabsInner