import React from "react";
import './heroslider.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HeroImage from '../../assets/images/hero-image.jpg'
import Image from "../image";
import Text from "../text";
import Button from "../button";

const HeroSlider = props => {
    return(
        <>
            <div className="heroslider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {props.options.map(function(d, idx){
                        return (
                            <SwiperSlide key={idx}>
                                <div className="hero-item">
                                    <div className="hero-image">
                                        <Image 
                                            src={d.src}
                                            alt={d.alt}
                                        />
                                    </div>
                                    <div className="hero-content">
                                        <div className="container">
                                            <div className="hero-caption">
                                                <Text type="H1" text={d.text} />
                                                <Button text="DAFTAR" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}                    
                </Swiper>
            </div>
        </>
    )
}
export default HeroSlider;

HeroSlider.defaultProps = {
    options: [
        {
            text:"Belajar dan dapatkan ganjaran",
            src: HeroImage,
            alt: "Hero Image"
        },
        {
            text:"Belajar dan dapatkan ganjaran",
            src: HeroImage,
            alt: "Hero Image"
        },
        {
            text:"Belajar dan dapatkan ganjaran",
            src: HeroImage,
            alt: "Hero Image"
        },
    ]
};
