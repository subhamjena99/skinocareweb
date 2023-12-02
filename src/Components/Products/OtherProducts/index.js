"use client"

import React, { useEffect, useState } from 'react';
import Item from './Item';
import './Item.css';

const OtherProducts = ({ heading, products,  addToCart, loading }) => {

    const [size, setSize] = useState(1500);

    useEffect(() => {
        setSize(window.innerWidth);
    }, []);

    let number;
    if (size > 1500) {
        number = 6;
    }
    else if (size >= 1352 && 1500 > size) {
        number = 5.5;
    }
    else if (size >= 1200 && 1352 > size) {
        number = 5;
    }
    else if (size >= 1074 && 1200 > size) {
        number = 4.5;
    }
    else if (size >= 900 && 1074 > size) {
        number = 4;
    }
    else if (size >= 800 && 900 > size) {
        number = 3.5;
    }
    else if (size >= 600 && 800 > size) {
        number = 3;
    }
    else if (size >= 400 && 600 > size) {
        number = 1.5;
    }
    else {
        number = 1.2;
    }

    return (
        <>

            <div className="productpagemidbox">

                <h2 className='other-products-heading'>{heading}</h2>

                {/* <div className="productboxs1">
                    <Swiper
                        spaceBetween={2}
                        slidesPerView={number}
                        onSlideChange={() => { }}
                        onSwiper={(swiper) => { }}
                    >
                        {
                            products?.length ?
                                products?.map(elem => {
                                    return <SwiperSlide>  <Item details={elem} cartToggler={cartToggler} />  </SwiperSlide>
                                })
                                :
                                <>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                    <SwiperSlide>  <Item cartToggler={cartToggler} />  </SwiperSlide>
                                </>
                        }
                    </Swiper>
                </div> */}

                <div className="productslider">

                    <div className="productsliderboxs2">
                        {products?.length ?
                            products?.map((elem, index) => {
                                return <div className="productbox123" key={index + 1}><Item details={elem} addToCart={addToCart} loading={loading} /></div>
                            })
                            :
                            ''
                        }

                    </div>

                </div>

            </div>



        </>
    )
}

export default OtherProducts
