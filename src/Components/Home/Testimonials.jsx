"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../button/Button';

function Testimonials(props) {    

    const [screenSize, setScreenSize] = useState(1500);

    useEffect(() => {
        setScreenSize(window.innerWidth);
    }, []);

    const testimonials = (props?.testimonials).slice(0,4);

    return (
        <>
            <div className="sec7maincontainer" id='testimonials'>
                <div className="sec7container">
                    <div className="sec7boxs">
                        <div className="sec7box">
                            <h2>"Testimonials"</h2>
                            <p>"Journey Through the Inspiring Stories of Our Valued
                                Customers: Discover How SkinOcare Transformed Their Skin
                                and Hair Health, Boosting Confidence and Well-Being."</p>


                            <p id='testimonialheading' >5K+ clients loved SkinOcare</p>

                            <div className="sec7testimonialgroupsimg">

                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (1).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>

                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (2).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (3).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (4).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (5).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (6).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (7).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <div className="testimonialgroupimg">
                                    <img src='/Assets/img/Testimonials/celebr (8).jpg' alt="" style={{borderRadius:'50%', height:'40px'}}/>
                                </div>
                                <Link className="testimonialgroupimg1" href='/testimonials'>
                                    {/* <div className="testimonialgroupimg1"> */}
                                    +5K
                                    {/* </div> */}
                                </Link>




                            </div>

                        </div>
                        <div className="sec7box1">

                            <div className="sec7box2container">
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={testimonials.length > 1 ? screenSize >= 601 ? 2 : 1 : 1}
                                    onSlideChange={() => { }}
                                    onSwiper={(swiper) => { }}
                                    navigation={false}
                                    modules={[Navigation]}
                                >
                                    {testimonials?.map((elem, index) => {
                                        return (
                                            <SwiperSlide key={index + 1}>
                                                <div className="sec7box2box">
                                                    <p>{elem?.description}</p>
                                                    <p className='row'>
                                                        <span className='col-lg-3 p-0 text-center'>
                                                            <img src={elem?.image ? elem?.image : '/Assets/img/Testimonials/celebr (1).jpg'} alt="img" />
                                                        </span>
                                                        <span className='col-lg-4 p-0 text-center'>{elem?.name}</span>
                                                        <span className='col-lg-5 pe-0 text-center'>
                                                            <Rating
                                                                emptySymbol="fa-regular fa-star ilogostar"
                                                                fullSymbol="fa-solid fa-star ilogostar"
                                                                fractions={2}
                                                                initialRating={elem?.rating}
                                                                readonly
                                                            />
                                                        </span>
                                                    </p>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                                {/* {testimonials?.map((elem, index) => {
                                    return (
                                        <div className="sec7box2box" key={index + 1}>
                                            <p>{elem?.description}</p>
                                            <p className='row'>
                                                <span className='col-lg-3 p-0 text-center'>
                                                    <img src={elem?.image ? elem?.image : '/Assets/img/Testimonials/t1.png'} alt="img" />
                                                </span>
                                                <span className='col-lg-4 p-0 text-center'>{elem?.name}</span>
                                                <span className='col-lg-5 pe-0 text-center'>
                                                    <Rating
                                                        emptySymbol="fa-regular fa-star ilogostar"
                                                        fullSymbol="fa-solid fa-star ilogostar"
                                                        fractions={2}
                                                        initialRating={elem?.rating}
                                                        readonly
                                                    />
                                                </span>
                                            </p>
                                        </div>
                                    )
                                })} */}

                                {/* <div className="sec7box2box">

                                    <p>SkinOcare has been a game-changer for
                                        me. I struggled with skin issues for years,
                                        but their personalized regimen and
                                        expert guidance have transformed my
                                        complexion. I feel more confident than
                                        ever!</p>

                                    <p>
                                        <span>
                                            <img src='/Assets/img/Testimonials/t1.png' alt="img" />
                                        </span>
                                        <span>Olivia Rhye</span>
                                        <span>
                                            <Rating
                                                emptySymbol="fa-regular fa-star ilogostar"
                                                fullSymbol="fa-solid fa-star ilogostar"
                                                fractions={2}
                                                initialRating={5}
                                                readonly
                                            />
                                        </span>
                                    </p>

                                </div>
                                <div className="sec7box2box">

                                    <p>SkinOcare has been a game-changer for
                                        me. I struggled with skin issues for years,
                                        but their personalized regimen and
                                        expert guidance have transformed my
                                        complexion. I feel more confident than
                                        ever!</p>

                                    <p>
                                        <span>
                                            <img src='/Assets/img/Testimonials/t1.png' alt="img" />
                                        </span>
                                        <span>Olivia Rhye</span>
                                        <span>
                                            <Rating
                                                emptySymbol="fa-regular fa-star ilogostar"
                                                fullSymbol="fa-solid fa-star ilogostar"
                                                fractions={2}
                                                initialRating={5}
                                                readonly
                                            />
                                        </span>
                                    </p>

                                </div> */}
                            </div>
                                <div className='text-center'>
                                    <Button button="Read More..." link='/testimonials' />
                                </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Testimonials;
