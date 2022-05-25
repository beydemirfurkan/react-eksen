import React from 'react'

const Title = ({subtitle, title, paragraph}) => {
  return (
    <div>
        <span className="text-uppercase text-black-50 fs-4">{subtitle}</span>
        <h1 className="display-4 text-uppercase fw-bold py-4">{title}</h1>
        <p>{paragraph}</p>
    </div>
  )
}

export default Title