import React from "react";
import Slider from "react-slick";
const CustomSlide = ({ slideMobilePad, child, index }) => {
  return (
    <div
      key={index}
      style={slideMobilePad ? { margin: "0 0.75rem" } : { width: "100%" }}
    >
      {child}
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
      >
        <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
      </svg>
    </div>
  );
};

const Carousel = ({ children, slideMobilePad, settings }) => {
  settings = {
    dots: true,
    infinite: true,
    prevArrow: <SamplePrevArrow className="slick-arrow slick-prev" />,
    nextArrow: <SampleNextArrow className="slick-arrow slick-next" />,
    customPaging: () => <button />,
    ...settings,
  };
  return (
    <>
      <Slider {...settings}>
        {children.map((child, index) => (
            <React.Fragment key={index}>
                <CustomSlide
                  slideMobilePad={slideMobilePad}
                  child={child}
                  index={index}
                />
            </React.Fragment>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
