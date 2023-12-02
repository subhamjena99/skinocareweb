"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Cart from '../Cart';
import { deleteCookie } from '@/hooks/cookie';

function Navbar({ openSidebar, token, path, userDetails, siteDetails }) {

    // GETTING TOKEN VALUE FROM COOKIE DRILLED FROM LAYOUT
    const authToken = (token?.value !== undefined && token?.value !== "undefined") ? true : false;

    // CART TOGGLE STATE
    const [cartToggler, setCartToggler] = useState(false);
    // HANDLING CART TOGGLE
    const closebutton3 = () => {
        setCartToggler(false);
    };

    // LOPGOUT API CALL
    const logout = () => {
        deleteCookie();
        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`;
    };

    return (
        <>
            {cartToggler ? <Cart close={closebutton3} /> : ""}

            <div className="navbarcontainer">
                <div className="navbarboxs">
                    <div className="navbarbox">
                        <div className="navlogoimg">
                            <Link href='/'>
                                <img src={siteDetails?.logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="navbarlinks">
                            <ul className='m-0'>
                                <li className={path == "/" ? "active" : ""}>
                                    <Link href='/'>Home </Link>
                                </li>
                                <li className={path == "/about-us" ? "active" : ""}>
                                    <Link href='/about-us'>About us </Link>
                                </li>
                                <li className={path == "/experties" ? "active" : ""}>
                                    <Link href="/experties">Our Expertise  </Link>
                                </li>
                                <li className={path == "/testimonials" ? "active" : ""}>
                                    <Link href="/testimonials">Testimonials   </Link>
                                </li>
                                <li className={path == "/skin-&-hair" ? "active" : ""}>
                                    <Link href="/skin-&-hair">Skin & Hair</Link>
                                </li>
                                <li className={path == "/shop" ? "active" : ""}>
                                    <Link href="/shop"> Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbarbox">
                        <div className="contactnavbox">

                            {/* <div className="cardbutton1">
                                <span className="navlinbox a" onClick={() => setCartToggler(true)} title='Cart'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_422_2842)">
                                            <path d="M5.34191 18.6833L2.6183 13.2361C0.956047 9.91156 3.37353 6 7.09044 6H16.9101C20.627 6 23.0445 9.91156 21.3822 13.2361L18.6586 18.6833C17.6423 20.716 15.5647 22 13.2921 22H10.7085C8.43584 22 6.35826 20.716 5.34191 18.6833Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M14 2L17 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M10 2L7 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M10 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M14 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_422_2842">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div> */}

                            {/* <div className="cardbutton1">
                                <Link href='#!' className="navlinbox">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.9996 22.8533C12.4195 22.8437 12.8225 22.6858 13.1373 22.4076C13.4521 22.1295 13.6583 21.7489 13.7196 21.3333H10.2129C10.2759 21.7602 10.4918 22.1497 10.8204 22.4293C11.1491 22.7089 11.5681 22.8596 11.9996 22.8533Z" fill="#101828" />
                                        <path d="M21.6732 18.5534C21.0303 17.9802 20.4675 17.3232 19.9999 16.6C19.4894 15.6017 19.1834 14.5115 19.0999 13.3934V10.1C19.0972 9.69998 19.0615 9.30085 18.9932 8.90668C18.4685 8.80179 17.9642 8.61268 17.4999 8.34668C17.6769 8.91658 17.7668 9.50994 17.7665 10.1067V13.4C17.8482 14.764 18.2235 16.0943 18.8665 17.3C19.3268 18.0294 19.8729 18.7008 20.4932 19.3H3.41987C4.04014 18.7008 4.58627 18.0294 5.04654 17.3C5.68961 16.0943 6.06482 14.764 6.14654 13.4V10.1C6.14303 9.32847 6.29174 8.56382 6.58416 7.84983C6.87659 7.13584 7.30697 6.48655 7.85068 5.93913C8.39439 5.3917 9.04074 4.9569 9.75272 4.65963C10.4647 4.36235 11.2283 4.20843 11.9999 4.20668C13.129 4.20759 14.2329 4.54152 15.1732 5.16668C15.0695 4.78601 15.0114 4.39439 14.9999 4.00002V3.58002C14.3038 3.23759 13.556 3.01234 12.7865 2.91335V2.07335C12.7865 1.83731 12.6928 1.61093 12.5259 1.44402C12.359 1.27712 12.1326 1.18335 11.8965 1.18335C11.6605 1.18335 11.4341 1.27712 11.2672 1.44402C11.1003 1.61093 11.0065 1.83731 11.0065 2.07335V2.94668C9.28368 3.18972 7.70692 4.04785 6.56735 5.36264C5.42778 6.67743 4.80236 8.36011 4.80654 10.1V13.3934C4.72304 14.5115 4.41705 15.6017 3.90654 16.6C3.44712 17.3216 2.89333 17.9785 2.25987 18.5534C2.18876 18.6158 2.13176 18.6927 2.09268 18.7789C2.0536 18.8651 2.03332 18.9587 2.0332 19.0534V19.96C2.0332 20.1368 2.10344 20.3064 2.22847 20.4314C2.35349 20.5564 2.52306 20.6267 2.69987 20.6267H21.2332C21.41 20.6267 21.5796 20.5564 21.7046 20.4314C21.8296 20.3064 21.8999 20.1368 21.8999 19.96V19.0534C21.8997 18.9587 21.8795 18.8651 21.8404 18.7789C21.8013 18.6927 21.7443 18.6158 21.6732 18.5534Z" fill="#101828" />
                                        <path d="M19.9993 7.33332C21.8403 7.33332 23.3327 5.84094 23.3327 3.99999C23.3327 2.15904 21.8403 0.666656 19.9993 0.666656C18.1584 0.666656 16.666 2.15904 16.666 3.99999C16.666 5.84094 18.1584 7.33332 19.9993 7.33332Z" fill="#30D158" />
                                    </svg>
                                </Link>
                            </div> */}


                            {!authToken && <div className="navbarbutton ">
                                <Link href='/signin'>Sign in</Link>
                            </div>}
                            <div className="navbarbutton m-0">
                                <Link href='/contact'>Contact us</Link>
                            </div>

                            {authToken && <div className="profilesec ms-2">
                                <div className="accordion accordianbut" id='accordianbut1' >
                                    <div className="accordion">
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle d-flex align-items-center justify-content-center" type="button"  id='accordianbutton12' data-bs-toggle="dropdown" aria-expanded="false">
                                                <div className="navprofileimgbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span className='userName'>{userDetails?.name}</span>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="accordianbutton12">
                                                <li><Link className="dropdown-item" href="/account"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                    <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg> Account</Link></li>
                                                <li><Link className="dropdown-item" href="#!" onClick={() => logout()}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z" fill="#1C1C1E" />
                                                        <path d="M20.65 11.65L17.86 8.85998C17.7905 8.78853 17.7012 8.73946 17.6036 8.71905C17.506 8.69863 17.4045 8.70781 17.3121 8.74539C17.2198 8.78298 17.1408 8.84727 17.0851 8.93003C17.0295 9.0128 16.9999 9.11027 17 9.20998V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65Z" fill="#1C1C1E" />
                                                    </svg> Logout</p>
                                                </Link></li>
                                            </ul>
                                        </div>
                                        {/* <h2 className="accordion">
                                            <button id='accordianbutton12' className="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123" aria-expanded="false" aria-controls="collapseTwo">
                                                <div className="navprofileimgbox">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span className='userName'>{userDetails?.name}</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo123" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body profilebox1">
                                                <p>
                                                    <Link href="/account"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10Z" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" />
                                                        <path d="M6.34961 19.5C7.6538 17.9502 9.60088 17 11.7195 17H12.2792C14.3978 17 16.3449 17.9502 17.6491 19.5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg> Account</Link>
                                                </p>
                                                <Link href="#!" onClick={() => logout()}>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z" fill="#1C1C1E" />
                                                        <path d="M20.65 11.65L17.86 8.85998C17.7905 8.78853 17.7012 8.73946 17.6036 8.71905C17.506 8.69863 17.4045 8.70781 17.3121 8.74539C17.2198 8.78298 17.1408 8.84727 17.0851 8.93003C17.0295 9.0128 16.9999 9.11027 17 9.20998V11H10C9.45 11 9 11.45 9 12C9 12.55 9.45 13 10 13H17V14.79C17 15.24 17.54 15.46 17.85 15.14L20.64 12.35C20.84 12.16 20.84 11.84 20.65 11.65Z" fill="#1C1C1E" />
                                                    </svg> Logout</p>
                                                </Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                            </div>}
                        </div>
                    </div>
                    <div className="navbarbox1">
                        <div onClick={openSidebar} className="navmenubar">
                            <i className="fa-solid fa-bars menulogo"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
