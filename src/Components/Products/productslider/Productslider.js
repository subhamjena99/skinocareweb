"use client"

import React, { useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from "swiper/modules";
import './Productimg.css';



const Productslider = (props) => {

     const [size, setSize] = useState(1300);

     useEffect(() => {
          setSize(window.outerWidth);
     }, []);

     let number;
     if (size > 1300) {
          number = 6;
     }
     else if (size >= 762 && 1300 > size) {
          number = 4;
     }
     else if (size >= 375 && 762 > size) {
          number = 4;
     }
     else {
          number = 3;
     }

     const [thumbsswiper, setThumbswiper] = useState(null);
     // const [imgchange, setImgchange] = useState("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")
     const [imgchange, setImgchange] = useState(props?.thumbnail);

     //  img1:"https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg",
     // img2:"https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg",
     // img3:"https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg",


     return (
          <>

               <div className="swiperimg">
                    <img src={imgchange} alt="" />
               </div>



               <Swiper
                    spaceBetween={2}
                    slidesPerView={number}
                    // navigation={true}
                    thumbs={{ swiper: thumbsswiper }}
                    modules={[Navigation, Thumbs]}
                    className='mySwiper2'

                    onSlideChange={() => { }}
                    onSwiper={(swiper) => { }}
               >
                    {props?.images?.map((img, index) => {
                         return (
                                   <SwiperSlide onClick={() => setImgchange(img)} className='slideimg' key={index+1} ><span className='a'><img src={img} alt="" /></span></SwiperSlide>
                         )
                         // return (
                         //      <span key={index + 1}>
                         //           <SwiperSlide onClick={() => setImgchange(img)} className='slideimg'  ><span className='a'><img src={img} alt="" /></span></SwiperSlide>
                         //      </span>
                         // )
                    })}




                    {/* <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide>

                    <SwiperSlide onClick={() => setImgchange("https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg")} className='slideimg'  ><img src="https://www.helsebixen.dk/shop/media/catalog/product/cache/1/image/400x/9df78eab33525d08d6e5fb8d27136e95/5/f/5f7254cbb96460f14554c6f0d3c914d6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/GI/HJ/MY-52821854/skino-care-capsule-500x500.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide onClick={() => setImgchange("https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg")} className='slideimg'  ><img src="https://5.imimg.com/data5/ANDROID/Default/2023/8/339002269/GI/WY/SD/38377274/product-jpeg-500x500.jpg" alt="" /></SwiperSlide> */}


               </Swiper>
          </>
     )
}

export default Productslider
