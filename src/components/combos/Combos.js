import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Combos extends React.Component {
  responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  render() {
    return (
      <div id="combos">
        <h1 className="combos__main-title">Combos</h1>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 4200,
                min: 992,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 576,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 992,
                min: 576,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="combo__image__container">
            <img className="combo__images" src="/images/posters/combo1-300.png" />
          </div>
          <div className="combo__image__container">
            <img className="combo__images" src="/images/posters/combo2-300.png" />
          </div>
          <div className="combo__image__container">
            <img className="combo__images" src="/images/posters/combo3-300.png" />
          </div>
          <div className="combo__image__container">
            <img className="combo__images" src="/images/posters/combo4-300.png" />
          </div>
          <div className="combo__image__container">
            <img className="combo__images" src="/images/posters/combo5-300.png" />
          </div>
        </Carousel>
      </div>
    );
  }
}
