import React from 'react'
import Slider from "react-slick";
import data from "./sliderImg.json"
import styles from "./moduleCSS/carasoul.module.css"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carasoul = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dotsClass: styles.button__bar,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div >
         <div style={{width:"90%",margin:"auto",marginBottom:"25px",zIndex:"-7"}}>
    
            <Slider {...settings}>
                {data.map((el)=>(
                    <div id={el.id} key={el.id}>
                        <img src={el.url} alt={el.id} />
                    </div>
                ))}
            </Slider>
    </div>
    </div>
   
  )
}

export default Carasoul