"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import './footer.css';

function Footer({ siteDetails }) {

  // USING NAVIGATION HOOK
  const pathname = usePathname();

  // PAGE SCROLL TO TOP
  const up = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id={pathname.split('/').includes('shop') ? 'footershopcontainer' : 'footermaincontainer'}>
      <div className="footermaincontainer">
        <div className="footercontainer">
          {/* <div className="footergouplogo"> */}
          <div onClick={up} className="gouplogo a">
            <img src='/Assets/img/Icons/up-arrow.svg' alt="" />
          </div>
          {/* </div> */}
          <div className="footerboxs">
            <div className="footerbox">
              <div className="footerboximg">
                <img src={siteDetails?.logo} alt="" />
              </div>

            </div>
            <div className="footerbox1">
              <div className="footerbox1container">
                <div className="footerbox1boxs row">
                  <div className="footerbox1box col-sm-6 col-lg-3">
                    <h3>Pages</h3>
                    <p><Link href='/about-us'>About us</Link></p>
                    <p><Link href='/experties'>Our Expertise</Link></p>
                    <p><Link href='/testimonials'>Testimonials</Link></p>
                    <p><Link href='/skin-&-hair'>Skin & Hair</Link></p>
                    <p><Link href='/shop'>Shop</Link></p>

                  </div>
                  <div className="footerbox1box col-sm-6 col-lg-3">
                    <h3>Legal and help</h3>
                    <p><Link href='/faq'>FAQs</Link></p>
                    <p><Link href='/legal/terms'>Terms of use</Link></p>
                    <p><Link href='/legal/privacy-policy'>Privacy policy</Link></p>
                    <p><Link href='/legal/shipping-policy'>Shipping policy</Link></p>
                    <p><Link href='/legal/refund-policy'>Refund policy</Link></p>
                  </div>
                  <div className="footerbox1box col-sm-6 col-lg-3">
                    <h3>Contact us</h3>
                    <p> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                      <path d="M16.8941 17.3939L11.5916 22.6979C11.3827 22.907 11.1346 23.0728 10.8615 23.186C10.5884 23.2992 10.2957 23.3574 10.0001 23.3574C9.70452 23.3574 9.41182 23.2992 9.13875 23.186C8.86567 23.0728 8.61757 22.907 8.40862 22.6979L3.10612 17.3939C2.20069 16.4886 1.48244 15.4138 0.992387 14.2308C0.502333 13.0479 0.25007 11.7801 0.25 10.4997C0.24993 9.21927 0.502056 7.95139 0.991981 6.76842C1.48191 5.58546 2.20004 4.51057 3.10537 3.60514C4.0107 2.69971 5.08551 1.98146 6.26842 1.49141C7.45133 1.00136 8.71918 0.749093 9.99959 0.749023C11.28 0.748954 12.5479 1.00108 13.7308 1.491C14.9138 1.98093 15.9887 2.69906 16.8941 3.60439C17.7996 4.50978 18.5179 5.58467 19.008 6.76768C19.4981 7.95069 19.7503 9.21865 19.7503 10.4991C19.7503 11.7796 19.4981 13.0476 19.008 14.2306C18.5179 15.4136 17.7996 16.4885 16.8941 17.3939ZM15.3041 5.19589C13.8974 3.78918 11.9895 2.9974 10.0001 2.9974C8.01073 2.9974 6.10283 3.78768 4.69612 5.19439C3.28941 6.6011 2.49913 8.50901 2.49913 10.4984C2.49913 12.4878 3.28941 14.3957 4.69612 15.8024L10.0001 21.1049L15.3041 15.8039C16.0008 15.1074 16.5534 14.2805 16.9304 13.3705C17.3075 12.4604 17.5015 11.485 17.5015 10.4999C17.5015 9.51481 17.3075 8.53938 16.9304 7.62931C16.5534 6.71924 16.0008 5.89236 15.3041 5.19589ZM10.0001 13.4999C9.60061 13.5089 9.20332 13.4381 8.83158 13.2914C8.45984 13.1448 8.12114 12.9254 7.83536 12.6461C7.54958 12.3668 7.32249 12.0332 7.16741 11.6649C7.01233 11.2966 6.9324 10.901 6.9323 10.5014C6.9322 10.1018 7.01193 9.70619 7.16683 9.33782C7.32172 8.96945 7.54865 8.63574 7.83429 8.35628C8.11993 8.07682 8.45852 7.85724 8.83019 7.71043C9.20185 7.56363 9.59911 7.49256 9.99862 7.50139C10.7825 7.51873 11.5284 7.84223 12.0767 8.40265C12.625 8.96307 12.9321 9.71588 12.9323 10.4999C12.9325 11.2839 12.6257 12.0369 12.0777 12.5976C11.5297 13.1583 10.784 13.4822 10.0001 13.4999Z" fill="black" />
                    </svg> <span className='text-wrap'>Address: {siteDetails?.address}</span></p>
                    <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232H20.25C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z" fill="black" />
                    </svg> <span className='a'>{siteDetails?.phoneNo}</span></p>
                    <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="black" />
                    </svg> <span className='a'>{siteDetails?.email}</span></p>
                  </div>
                  <div className="footerbox1box col-sm-6 col-lg-3">
                    <h3>Social links</h3>
                    <div className="footerbox1boxsociallinks">
                      <div className="footerbox1boxsociallink">
                        <i className="fa-brands fa-facebook ilogo"></i>
                      </div>
                      <div className="footerbox1boxsociallink">
                        <i className="fa-brands fa-twitter ilogo"></i>
                      </div>
                      <div className="footerbox1boxsociallink">
                        <i className="fa-brands fa-linkedin ilogo"></i>
                      </div>
                      <div className="footerbox1boxsociallink">
                        <i className="fa-brands fa-youtube ilogo"></i>
                      </div>
                    </div>

                    <div className="footerimglinks">
                      <div className="footerimglink">
                        <img src='/Assets/img/Icons/play-store.png' alt="" />
                      </div>
                      <div className="footerimglink">
                        <img src='/Assets/img/Icons/app-store.png' alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
