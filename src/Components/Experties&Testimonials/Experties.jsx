"use client"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SkinHair from '../Home/SkinHair';
import SkinAndCareHeading from '../SkinAndCareHeading';
import './OurExpertise.css';
import { useEffect, useState } from 'react';

const Experties = ({ doctors }) => {

    const h2 = `"Meet Our Skincare & Health Experts"`
    const p = ` "Guiding You Toward Radiant Skin and Optimal Health"`

    // EXPERTIES PANEL CONTENT STATE
    const [content, setContent] = useState({});

    useEffect(() => {
        doctors?.map((elem, index)=>{
            setContent(prev=>({
                ...prev,
                [`content${index+1}`] : elem?.shortDescription,
            }))
        });
    }, []);

    const handleMouseEvent = (e, content) => {
        const { id } = e.currentTarget;
        setContent(prev => ({
            ...prev,
            [id]: content,
        }))
    };

    return (
        <>
            <div className="ourExpertiseMainContainer2">

                <div className="ourExpertiseMainContainer1">
                    <div className="ourExpertiseContainer1 w-100">
                        <SkinAndCareHeading h2={h2} p={p} />
                        <div className="ourexpertiesimg1 text-center">
                            <img src='/Assets/img/Experties/group.jpg' alt="" />
                        </div>
                    </div>
                </div>

                <div className="ourexpertiesimgcontent">
                    <div className="content">
                        <h2>Regarding skin and hair, our experts consider more than just 'care.'</h2>
                        <p>They assess your environment, recommend dietary adjustments, and select tailored solutions that perfectly align with your needs. This takes the form of a personalized regimen that seamlessly integrates data-backed diagnosis, prescribed treatments, consistent skincare/haircare, and guidance from dermatologists. <br />
                            <br />   Our comprehensive suite of services is meticulously crafted to pinpoint and address the underlying issues, delivering enduring outcomes. Furthermore, the effectiveness of these regimens is assured, as they are provided by certified skin and hair specialists endorsed by the Indian Association of Dermatologists (IADVL).
                        </p>
                    </div>
                    <div className="img">
                        <img src='/Assets/img/Experties/experties1.png' alt="" />
                    </div>
                </div>

                <div className="ourexpertiesimgcontent" id='ourexpertiesimgcontent'>
                    <div className="img1">
                        <img src='/Assets/img/Experties/experties2.png' alt="" />
                    </div>
                    <div className="content" id='content1'>
                        <h2>Prioritizing the process over the products.</h2>
                        <p>Skin and hair care is a journey filled with various products, yet their compatibility with individual needs and other products can vary. That's where the SkinOcare app's process-oriented strategy takes center stage.  <br /> <br />
                            When you download the app, our AI, working alongside our medical experts, identifies the most suitable products tailored to your objectives, eliminating the need for trial and error. To validate this effectiveness, we offer complimentary checkups every month, during which our experts monitor your skin and hair health diligently.
                        </p>
                    </div>
                </div>

                <div className="cutingagesec">

                    <div className="cutingsecheading">
                        <SkinAndCareHeading h2={"Cutting-Edge Tech Infrastructure Delivering Proven Skin and Hair Solutions"} />

                    </div>

                    <div className="cutingimgcards">

                        <div className="cutingimgcard">

                            <img src='/Assets/img/Ai/sec2img.png' alt="" />
                            <p>AI-powered skin & hair analysis</p>

                        </div>
                        <div className="cutingimgcard">

                            <img src='/Assets/img/Experties/cutingimg2.png' alt="" />
                            <p>Dermatologist diagnosis & treatment</p>

                        </div>
                        <div className="cutingimgcard">

                            <img src='/Assets/img/Experties/cutingimg3.png' alt="" />
                            <p>Well-researched formulations & products</p>

                        </div>
                        <div className="cutingimgcard">

                            <img src='/Assets/img/Experties/cutingimg4.png' alt="" />
                            <p>Skin reports for tracking progress</p>

                        </div>
                    </div>



                </div>

                <div className="introducingpanel">

                    <div className="introducingpanelheading">
                        <SkinAndCareHeading h2={"Introducing the Panel of Experts at Skinocare"} p={"A team of over 40 extensively skilled and seasoned dermatologists and clinicians is here to guide and assist you throughout your treatment journey. To date, this dedicated team has successfully aided over one million individuals in achieving their desired level of skin and hair health."} />
                    </div>

                    {
                        doctors?.map((elem, index) => {
                            return (
                                <div className="introducingboxs row w-100" id={`content${index + 1}`} onMouseEnter={(e) => handleMouseEvent(e, elem?.description)} onMouseLeave={(e) => handleMouseEvent(e, elem?.shortDescription)} key={index + 1}>

                                    <div className="introducingimgbox col-md-4">
                                        <div className="introducingimg">
                                            <img src={elem?.image} alt="" />
                                        </div>
                                        <div className="introducingimgcontent">
                                            <h5>{elem?.name}</h5>
                                            <p className=''>{elem?.experties}</p>
                                            <span className='badge rounded-pill text-bg-success'>Treated : {elem?.patientHandled}+ Patients</span>
                                        </div>
                                    </div>

                                    <div className="introducingpara col-md-8">

                                        <div dangerouslySetInnerHTML={{ __html: content?.[`content${index + 1}`] }}>
                                        </div>

                                    </div>

                                </div>
                            );
                        })
                    }

                    {/* <div className="introducingboxs" id='content1' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="introducingimgbox">
                            <div className="introducingimg">
                                <img src='/Assets/img/Experties/intro.png' alt="" />
                            </div>
                            <div className="introducingimgcontent">
                                <h5>Dr. Kiran Joshy</h5>
                                <p className='m-1'>MBBS,DDVL,FAGE,FAAD (USA)</p>
                                <p className='m-1'>Fel.Laser Surgery (Bangkok)</p>
                                <p className='m-1'>Dermatologist & Hair Transplant Surgeon</p>
                                <span className='badge rounded-pill text-bg-success'>Treated : 8,000+ Patients</span>
                            </div>
                        </div>

                        <div className="introducingpara">

                            <div dangerouslySetInnerHTML={{ __html: content?.content1 }}>
                            </div>

                        </div>


                    </div>

                    <div className="introducingboxs" id='content2' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="introducingimgbox">
                            <div className="introducingimg">
                                <img src='/Assets/img/Experties/intro.png' alt="" />
                            </div>
                            <div className="introducingimgcontent">
                                <h5>Dr. Rajesh Sharma</h5>
                                <p>Physician and skin care expert</p>
                                <span className='badge rounded-pill text-bg-success'>Treated : 10,000 SkinOcare patients</span>
                            </div>
                        </div>

                        <div className="introducingpara">
                            <div dangerouslySetInnerHTML={{ __html: content?.content2 }}>
                            </div>
                        </div>


                    </div>

                    <div className="introducingboxs" id='content3' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="introducingimgbox">
                            <div className="introducingimg">
                                <img src='/Assets/img/Experties/intro.png' alt="" />
                            </div>
                            <div className="introducingimgcontent">
                                <h5>Dr. Rajesh Sharma</h5>
                                <p>Physician and skin care expert</p>
                                <span className='badge rounded-pill text-bg-success'>Treated : 10,000 SkinOcare patients</span>
                            </div>
                        </div>

                        <div className="introducingpara">

                            <div dangerouslySetInnerHTML={{ __html: content?.content3 }}>
                            </div>
                        </div>


                    </div> */}


                </div>


                <div className="introducingsec6">


                    <SkinHair />
                </div>

            </div>


        </>
    );
};

export default Experties;
