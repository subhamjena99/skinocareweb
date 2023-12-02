'use client'

import SkinAndCareHeading from '../SkinAndCareHeading';
import SkinAndHairCard from './SkinAndHairCard';
import './SkinAndCare.css';
import Link from 'next/link';

const SkinAndHair = () => {

    const h3 = `"Dermatologist-Certified Insights on Optimal Skin and Hair Well-being"`;
    const p = `"Balancing Beauty and Health for a Radiant You"`;

    return (
        <>
            <div className='skinAndCare2Container'>
                <div className='headingsearchfilter'>
                    <SkinAndCareHeading h2={h3} p={p} />

                    <div className='searchinput'>
                        <input type="text" placeholder='Search here' />
                        <svg xmlns="http://www.w3.org/2000/svg" className='ms-3' width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <circle cx="8.30541" cy="8.80492" r="7.49047" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.5151 14.4043L16.4518 17.3334" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className='skincare2buttons'>



                        <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ gap: "1rem" }}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Skin</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Hair</button>
                            </li>
                        </ul>


                    </div>
                </div>

                <div className="tab-content" id="myTabContent">

                    <div className='skinAndAcretwoboxs'>
                        <div className='skinAndAcretwobox12'>

                            <SkinAndHairCard />
                            <SkinAndHairCard />
                            <SkinAndHairCard />
                            <SkinAndHairCard />
                            <SkinAndHairCard />
                            <SkinAndHairCard />
                            <SkinAndHairCard />
                            <SkinAndHairCard />

                        </div>

                        <div className='skinAndAcretwobox12'>

                            <div className='skinAndAcretwobox'>
                                <Link href='/skin-&-hair/art'>
                                    <img src='/Assets/img/Story/ourStoryPerson.png' alt="" />
                                    <div className='onimgcontent'>
                                        <p>Topic name</p>
                                        <h4>Dr. Kiran Joshi</h4>
                                    </div>
                                </Link>

                            </div>
                            <div className='skinAndAcretwobox'>
                                <Link href='/skin-&-hair/art'>
                                    <img src='/Assets/img/Story/ourStoryPerson.png' alt="" />
                                    <div className='onimgcontent'>
                                        <p>Topic name</p>
                                        <h4>Dr. Kiran Joshi</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className='skinAndAcretwobox'>
                                <Link href='/skin-&-hair/art'>
                                    <img src='/Assets/img/Story/ourStoryPerson.png' alt="" />
                                    <div className='onimgcontent'>
                                        <p>Topic name</p>
                                        <h4>Dr. Kiran Joshi</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className='skinAndAcretwobox' >
                                <Link href='/skin-&-hair/art'>
                                    <img src='/Assets/img/Story/ourStoryPerson.png' alt="" />
                                    <div className='onimgcontent'>
                                        <p>Topic name</p>
                                        <h4>Dr. Kiran Joshi</h4>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div >
        </>
    );
};

export default SkinAndHair;
