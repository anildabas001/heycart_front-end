import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductSlider.css';

const ProductSlider = (props) => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              className: 'ProductSlider'
            }
          }
        ]
      };

    return(
        <Slider {...settings}>
            {props.children}
        </Slider>
    );
}

export default ProductSlider;