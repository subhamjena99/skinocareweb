import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../../button/Button'
import Image from 'next/image';

function BannerCarousel({secimg,h1,p,secimg2,secimg3,secimg4,secimg5}) {

  const [skin, setSkin] = useState(true);
  const [hair, setHair] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hair == false) {
        setHair(true);
        setSkin(false)
      }
      else {
        setHair(false);
        setSkin(true);
      }
    }, 1900);
    return () => clearTimeout(timer);
  });

  return (
    <>

      <div className="sec1container">
        <div className="sec1containerboxs">
          <div className="sec1box">

          <h1>"Revolutionise Your {skin ? <span style={{ color: "var(--gray-900, #101828)" }}> Skin </span> : <span style={{ color: "#F6B092" }}> Skin </span>}  and {hair ? <span style={{ color: "var(--gray-900, #101828)" }}>Hair</span> : <span style={{ color: "#F6B092" }}>Hair</span>}    Care with SkinOcare."</h1>
            <p>"{p}"</p>

            <Button  button="Shop Now" link={'/shop'}/>
          </div>
          <div className="sec1box">
            <div className="sec1boximg">

              <Carousel fade controls={false} indicators={false}>
                <Carousel.Item interval={1000}>
                  <Image width={100} height={100} src={secimg3} alt="" unoptimized />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  {/* <img src={secimg4} alt="" /> */}
                  <Image width={100} height={100} src={secimg4} alt="" unoptimized />
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Image width={100} height={100} src={secimg} alt="" unoptimized />
                  {/* <img src={secimg} alt="" /> */}
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Image width={100} height={100} src={secimg2} alt="" unoptimized />
                  {/* <img src={secimg2} alt="" /> */}
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Image width={100} height={100} src={secimg5} alt="" unoptimized />
                  {/* <img src={secimg5} alt="" /> */}
                  <Carousel.Caption>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </div>
          </div>
        </div >
      </div >

    </>
  );
};

export default BannerCarousel;
