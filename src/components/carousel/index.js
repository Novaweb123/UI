import React from "react";
import './carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = props => {
    return(
        <>
            <div className="carousel-slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {props.carousel.map(function(d, idx){
                        return (
                            <SwiperSlide key={idx}>
                                {props.children}
                            </SwiperSlide>
                        )
                    })}                    
                </Swiper>
            </div>
        </>
    )
}
export default Carousel;
