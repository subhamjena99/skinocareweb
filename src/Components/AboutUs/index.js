"use client"

import { useEffect, useState } from 'react';
import SkinAndCareHeading from '../SkinAndCareHeading';
import SkinHair from '../Home/SkinHair';
import Carousel from 'react-bootstrap/Carousel';
import './AboutUs.css';
import Link from 'next/link';

const AboutUs = () => {

    const h3 = `"Using straight forward technology to tackle the intricacies of skin and hair."`;
    const p = `"In 2017, accessing a dermatologist's expertise for everyday skin and hair care was a challenge we recognized. This led us to harness the power of AI to provide continuous dermatologist care through the SkinOcare app, making expert care accessible."`;

    const [width, setWidth] = useState(false);

    const changeColor = () => {
        if (window.scrollY < 1450) {
            setWidth(true)
        } else {
            setWidth(false)
        };
    };

    useEffect(()=>{
        window.addEventListener('scroll', changeColor);
    },[]);

    return (
        <>
            <div className="aboutUsContainer">

                <div className="AboutUsHeading">
                    <SkinAndCareHeading h2={h3} p={p} />
                </div>

                <div className="improvingskils">
                    <div className="improvingskillbox">
                        <div className="improvingskillboxContainer">
                            <div className="improvingskillboxheding">
                                <h2 className='mb-4 mt-5'>"Improving skin and hair health on a daily basis."</h2>
                                <p className='mb-5'>"We recognize the influence of incorrect products, mental well-being, nutrition, and environmental elements on your skin and hair. That's why we meticulously analyze your photos, ask pertinent questions, and take into account these factors to curate a personalized kit aligned with your skin and hair objectives."</p>
                            </div>
                            <h6 className='mb-5'>We simplify skin & hair care with 3 essential personalizations</h6>

                            <div className="improveskillpoint">
                                <p className='row'>
                                    <div className="col-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M10 7V9H12V17H14V7H10ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z" fill="black" />
                                        </svg>
                                    </div>
                                    <span className='col-10'>A personal dermatologist assigned to you</span>
                                </p>
                                <p className='row'>
                                    <div className="col-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 7V9H13V11H11C10.4696 11 9.96086 11.2107 9.58579 11.5858C9.21071 11.9609 9 12.4696 9 13V17H15V15H11V13H13C13.5304 13 14.0391 12.7893 14.4142 12.4142C14.7893 12.0391 15 11.5304 15 11V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H9ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z" fill="black" />
                                        </svg>
                                    </div>
                                    <span className='col-10'>A personal regimen based on your skin & hair needs</span>
                                </p>
                                <p className='row'>
                                    <div className="col-1">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 15V13.5C15 13.1022 14.842 12.7206 14.5607 12.4393C14.2794 12.158 13.8978 12 13.5 12C13.8978 12 14.2794 11.842 14.5607 11.5607C14.842 11.2794 15 10.8978 15 10.5V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H9V9H13V11H11V13H13V15H9V17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15ZM12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z" fill="black" />
                                        </svg>
                                    </div>
                                    <span className='col-10'>A personal tracking system to monitor your skin & hair progress</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="improvingskillbox">


                        <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <Carousel fade controls={false} indicators={false}>
                                <Carousel.Item interval={2000}>
                                    <img src='/Assets/img/Story/banner1.png' className="d-block w-100" alt="" unoptimized />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    {/* <img src={secimg4} alt="" /> */}
                                    <img src='/Assets/img/Story/banner4.jpg' className="d-block w-100" alt="" unoptimized />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            {/* <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="1000">
                                    <img src='/Assets/img/Story/banner1.png' className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="1000">
                                    <img src='/Assets/img/Story/banner2.png' className="d-block w-100" alt="..." />
                                </div>

                            </div> */}
                        </div>






                    </div>
                </div>
                <div className="improvestory row">
                    <div className="ourStorybox col-md-8 p-0 pe-2">
                        <div className="ourstoryheading">
                            <SkinAndCareHeading h2={"Our Story"} />
                            <div className="para">
                                <p className='mb-5'>SkinOcare is a dedicated effort to make life simpler for people who are facing tough situations in life due to skin and hair care issues. It was founded by Mrs. Pratima Shukla and powered by the medical expertise of Dr Kiran Joshy. Both with over a decade of experience in helping people win their lives back after suffering from skin and hair care problems. </p>
                                <p className='mb-5'>As one of the prominent dermatologists in the country, Dr Kiran understands that people suffer mostly because they go for generic solutions for their skin and hair issues. Mrs. Pratima Shukla, a management professional who has displayed exceptional leadership in her previous roles taking her company to the top 30 list in India understands the demands of the market like no one else. </p>
                                <p className='mb-5'>People use “ one fit for all”  generic products just because it is not easy to get the comfort of a custom skin or hair care solution where they live. The use of artificial intelligence coupled with world-class products to provide a unique solution is a dream that needs to be made real. This idea paved the way for the birth of SkinOcare.</p>
                                <p className='mb-5'>SkinOcare makes available the service of expert dermatologists even in small towns helping people get treatment that actually suits them. This accessibility of expert skin and hair care solutions to every person who needs them can help people come out of serious skin and hair issues and face and win their lives with confidence. </p>
                            </div>
                        </div>
                    </div>
                    <div className="ourStorybox col-md-4 p-0" id='ourStorybox' >
                        <div className="ourstoryimg text-center">
                            <img className='' src='/Assets/img/Story/ourStoryPerson1.png' alt="" />
                            <img src='/Assets/img/Story/ourStoryPerson2.png' alt="" />
                        </div>
                    </div>
                </div>

                <div className="milestonesContainer">
                <SkinAndCareHeading h2={" Milestones in the journey so far"} />
                    <div className="milestonesContainer">

                        <img src='/Assets/img/Story/graph.png' alt="" />

                        <div className={!width ? "animationcontainers123" : "animationcontainer123"} id='animationcontainer'>

                        </div>



                    </div>
                </div>

                <div className="aboutUsPillars">
                    <div className="pillarsheading">
                        <SkinAndCareHeading h2={`Pillar behind the pursuit of ‘skin health’`} />
                    </div>
                    <div className="pilarscards row">
                        <div className="pilarcard col-12 w-100">
                            <div className="pilarimgcontent">
                                <img src='/Assets/img/Story/ourStoryPerson1.png' alt="" />
                                <div className="info" id='info'>
                                    <h6>Mrs. Pratima Shukla</h6>
                                    <p>Founder & CEO</p>
                                    <img src='/Assets/img/Story/in.png' alt="" />
                                </div>
                            </div>
                            <div className="pilarpara">
                                <p>Mrs. Pratima Shukla is one of the celebrated business personalities in India. She is the Founder and CEO of SkinOcare. A visionary businesswoman, Mrs. Pratima Shukla, after securing an MBA from Amity Business School Mumbai, started her career as a consultant with Ivaan Technology & Company in the US. Mrs. Shukla then returned to India to join a Pharmaceutical company as a Business Development Manager and worked her way up to become a part of top level management as Executive Director. Under her leadership, the company gained the distinction of being one of the top thirty pharmaceutical companies in India. This was a feat many thought was nearly impossible and was mainly the result of the unwavering leadership and management prowess of Pratima Shukla.</p>
                                <p>After her successful tenure in pharmaceuticals, Mrs. Shukla reinvented the beauty care and treatment industry by founding SkinOcare. SkinOcare, the AI powered app backed with skin and hair treatment products is a revolutionary change to how people treat their skin and hair issues. A mix of technology and medical prowess is very evident in every aspect of SkinOcare. The use of artificial intelligence alongside medical treatment is a new arena in India and is attempted by very few industrialists. Her vision and management skills have opened a new path in the form of SkinOcare to those who are struggling with skin and hair care issues. She is currently serving as the CEO of SkinOcare. </p>
                            </div>
                        </div>
                        <div className="pilarcard col-12 w-100">
                            <div className="pilarimgcontent">
                                <img src='/Assets/img/Story/ourStoryPerson2.png' alt="" />
                                <div className="info" id='info'>
                                    <h6>Dr. Kiran Joshy</h6>
                                    <p>Co-founder & CEO</p>
                                    <Link href='https://www.linkedin.com/in/kiran-joshy-b8010382?utm__source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
                                        <img src='/Assets/img/Story/in.png' alt="" />
                                    </Link>
                                </div>
                            </div>

                            <div className="pilarpara">
                                <p>Dr. Kiran Joshy is one of the renowned dermatologists in India. Based in Bangalore, he has over a decade of experience in changing people's lives by fixing various skin disorders for patients of all age groups. Dr. Kiran is however known for his excellent skills in treating acne and hair loss, an area which directly influences the appearance of a person. He has successfully handled numerous hair transplants from patients within India and abroad with great success and perfection. These transplants not only were a success technically but also brought positive changes in patients' lives making them more confident and presentable, giving them a new life. </p>
                                <p>Dr. Kiran Joshy established Joshys Medical Center in 2010. Since then, to date, Joshy Medical Center has attracted patients of all age groups within the country and abroad. With more than a decade’s worth of bringing positive change to people’s lives, helping them succeed and act as confident human beings who are successful in their lives, he continues his effort to help people look better</p>
                                <p>Dr. Kiran is a permanent member of IADVL, the Bangalore Dermatological Society and the International Society of Dermatologists. Dr. Kiran worked on the panel as master trainer and coordinator for NABH accreditation at St.Martha’s Hospital and also held the position of the Joint Secretary of the Clinical Society</p>
                                <p>Dr. Kiran has been a part of many state and national conferences and has made presentations that were well received.  Dr. Kiran’s academic interests include being the author of a book for undergraduates and several journal articles. Dr. Kiran is a regular contributor to various newspapers like the Times of India and appears on panel discussions on TV.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutsec6">
                    <SkinHair />
                </div>
            </div>
        </>
    );
};

export default AboutUs;
