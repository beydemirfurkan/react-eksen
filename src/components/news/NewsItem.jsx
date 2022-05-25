import React from "react";

const NewsItem = ({dateNumber, dateMonth, text, country, tag1, tag2 }) => {
  return (
    <>
      <div
      >
        <div className="d-flex justify-content-between">
          <div className="news-date">
            <span className="fs-3">{dateNumber}</span>
            <span className="fs-08 text-uppercase m-0 d-block">{dateMonth}</span>
          </div>
          <div>
            <p className="news-text fw-bold">{text}</p>
            <button className="btn text-uppercase fs-07 px-4">{country}</button>
            <div className="news-tag fs-08 py-4">
              <span className="text-decoration-underline">{tag1}</span>
              <span className="text-decoration-underline">{tag2}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
