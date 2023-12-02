"use client"

import BannerCarousel from '@/Components/Home/BannerCarousel';
import React from 'react';

function Banner() {

    const h1 = "Revolutionise Your  Skin and Hair Care with SkinOcare.";
    const p = "Access a well-rounded skincare routine, expertly designed through the fusion of dermatologist knowledge and AI technology.";

    return (
        <>
            <div className="sec1imgcontentcontainer">
                <BannerCarousel
                    secimg='/Assets/img/Banner/carouselImg1.png'
                    secimg2='/Assets/img/Banner/carouselImg2.png'
                    secimg3='/Assets/img/Banner/carouselImg3.png'
                    secimg4='/Assets/img/Banner/carouselImg4.png'
                    secimg5='/Assets/img/Banner/carouselImg1.png'
                    h1={h1}
                    p={p}
                />

            </div>
        </>
    );
};

export default Banner;
