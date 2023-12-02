'use client'

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import SkinAndCareHeading from '../SkinAndCareHeading';
import SkinHair from '../Home/SkinHair';
import './Testimonials.css';
import NoLinkBtn from '../button/NoLinkBtn';

const Testimonials = ({ testimonials, caseStudies }) => {

    // VIDEO MODAL TOGGLE STATE
    const [viewVideo, setViewVideo] = useState(false);
    // TESTIMONIALS READ MORE TOGGLE STATE 
    const [readMoreTestimonial, setReadMoreTestimonial] = useState(false);
    // CASE STUDIES READ MORE TOGGLE STATE 
    const [readMoreCase, setReadMoreCase] = useState(false);

    // TEXT MODAL DATA STATE
    const [textModalData, setTextModalData] = useState({});
    // VIDEO MODAL DATA STATE
    const [videoModalData, setVideoModalData] = useState('');

    //view more My SkinOcare Journey modal state
    const [moreVideo, setMoreVideo] = useState(false);
    //view more Real Doctors. Real result.(Testimonial) modal state
    const [moreTestimonial, setMoreTestimonial] = useState(false);
    //view more Case studies modal state
    const [moreCaseStudies, setMoreCaseStudies] = useState(false);
    const [video_array, setVideoArray] = useState([
        '/Assets/videos/v6.mp4',
        '/Assets/videos/v1.mp4',
        '/Assets/videos/v2.mp4',
        '/Assets/videos/v3.mp4',
        '/Assets/videos/v4.mp4',
        '/Assets/videos/v5.mp4',
    ])
    const [caseStudy_name_array, setcaseStudy_NameArray] = useState([
        {
            name: 'Sanju',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Ramya',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Rishi',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Dipeeka',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Kaveri',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Ajay',
            age: 21,
            address: 'Bangalore'
        }
    ])
    const [name_array, setNameArray] = useState([
        {
            name: 'Sanjana',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Ramya',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Rashmika',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Dipeeka',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Kaveri',
            age: 21,
            address: 'Bangalore'
        },
        {
            name: 'Appu',
            age: 21,
            address: 'Bangalore'
        }
    ])
    // VIEW JOURNEY VIDEO HANDLER 
    const showVideo = (data = '/Assets/videos/sample.mp4') => {
        setViewVideo(true)
        setVideoModalData(data);
    };

    // READ MORE TESTIMONIALS HANDLER
    const readTestimonial = (data) => {
        setReadMoreTestimonial(true)
        setTextModalData(data);
    };

    // READ MORE CASE STUDIES HANDLER
    const readCase = (data) => {
        setReadMoreCase(true)
        setTextModalData(data);
    };

    // VIDEO CONTENT MODAL
    const VideoModal = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>

                    <ReactPlayer className='popupvideo' url={videoModalData} controls={true} playing={true} width="100%" height="300px" />

                </Modal.Body>
            </Modal>
        );
    };

    // TESTIMONIALS CONTENT MODAL
    const TestimonialsModal = (props) => {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>
                    <img src={textModalData?.image} alt="" style={{ width: "100%" }} />
                    <h6 className='modal-h6 mt-3'>{textModalData?.title}</h6>
                    <p className='modal-p'>{textModalData?.description}</p>
                    <p><span className='modal-span'>{textModalData?.name}, {textModalData?.address}</span></p>
                </Modal.Body>
            </Modal>
        );
    };

    // CASE STUDIES CONTENT MODAL
    const CaseStudiesModal = (props) => {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "var(--foundation-gold-light, #FEFBF4)" }}>
                    <img src={textModalData?.image} alt="" style={{ width: "100%" }} />
                    <h6 className='modal-h6 mt-3'>{textModalData?.title}</h6>
                    <p className='modal-p'>{textModalData?.description}</p>
                    <p><span className='modal-span'>{textModalData?.name}, {textModalData?.age} years</span></p>
                </Modal.Body>
            </Modal>
        );
    };

    const h2 = `"SkinOcare Success Stories"`;
    const p = ` "Real Stories, Real Results, Real People"`;

    return (
        <>
            <div className='testimonialscontainrs'>
                <SkinAndCareHeading h2={h2} p={p} />

                <div className='myskincareJourny'>
                    <p>My SkinOcare Journey</p>

                    <div className='skinOcareswipeboxs'>
                        {video_array.map((video) => {
                            return <div className='skinOcareswipebox' onClick={() => showVideo(video)} >
                                <video id="myVideo" width="100%" height="100%">
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className='playbutton' >
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>

                        } )}
                        {/* <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p2.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p3.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p4.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p1.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p2.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div> */}
                    </div>
                    {/* <div className='skinOcareswipeboxs'>

                        <div className='skinOcareswipebox' onClick={() => showVideo()} >
                            <img src='/Assets/img/Testimonials/p1.png' alt="" />
                            <div className='playbutton' >
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p2.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p3.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p4.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p1.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                        <div className='skinOcareswipebox' onClick={() => showVideo()}>
                            <img src='/Assets/img/Testimonials/p2.png' alt="" />
                            <div className='playbutton'>
                                <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                            </div>
                        </div>
                    </div> */}

                    <div className={moreVideo ? "viewmorblock skinOcareswipeboxs" : "viewmornone"}>

                        <div className="skinOcareswipeboxs"  >

                            <div className='skinOcareswipebox' onClick={() => showVideo()} >
                                <img src='/Assets/img/Testimonials/p1.png' alt="" />
                                <div className='playbutton' >
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p2.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p3.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p4.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p1.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p2.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={moreVideo ? "viewmorblock skinOcareswipeboxs" : "viewmornone"}>

                        <div className="skinOcareswipeboxs"  >

                            <div className='skinOcareswipebox' onClick={() => showVideo()} >
                                <img src='/Assets/img/Testimonials/p1.png' alt="" />
                                <div className='playbutton' >
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p2.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p3.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p4.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p1.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                            <div className='skinOcareswipebox' onClick={() => showVideo()}>
                                <img src='/Assets/img/Testimonials/p2.png' alt="" />
                                <div className='playbutton'>
                                    <img src='/Assets/img/Icons/play_icon.svg' alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {
                        !moreVideo ? <div onClick={() => setMoreVideo(true)} className='testimonialbutton'>
                            <NoLinkBtn button="View more" />
                        </div> :
                            <div onClick={() => setMoreVideo(false)} className='testimonialbutton'>
                                <NoLinkBtn button="View less" />
                            </div>
                    }


                </div>


                <div className='realDoctorTestimonials'>
                    <p>Real Doctors. Real result.(Testimonial)</p>

                    <div className='realdoctorsboxs'>
                        {
                            name_array?.slice(0, 10)?.map((elem, index) => {
                                return (
                                    <div className='realdoctorsbox' key={index + 1}>
                                        <div className='realdoctorimg'>
                                            {/* <img src={elem?.image} alt="" /> */}
                                            <img  src={`/Assets/img/Testimonials/celebr (${8 - index}).jpg`} alt="" />
                                        </div>
                                        <p>{elem.name}</p>
                                        {/* <p>{elem?.title}</p> */}
                                        {/* <span>{elem?.name}, {elem?.address}</span> */}
                                        <span>{elem.address}</span>
                                        <button onClick={() => { }} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>
                                        {/* <button onClick={() => readTestimonial(elem)} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button> */}
                                    </div>
                                )
                            })
                        }

                        {/* <div className='realdoctorsbox'>
                            <div className='realdoctorimg'>
                                <img src='/Assets/img/Testimonials/real1.png' alt="" />
                            </div>
                            <p>My skin is almost clear and the texture has improved</p>
                            <span>Olivia, Bangalore</span>
                            <button onClick={showmodal} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                        </div>
                        <div className='realdoctorsbox'>
                            <div className='realdoctorimg'>
                                <img src='/Assets/img/Testimonials/real2.png' alt="" />
                            </div>
                            <p>My skin is almost clear and the texture has improved</p>
                            <span>Olivia, Bangalore</span>
                            <button onClick={showmodal}><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                        </div>
                        <div className='realdoctorsbox'>
                            <div className='realdoctorimg'>
                                <img src='/Assets/img/Testimonials/real3.png' alt="" />
                            </div>
                            <p>My skin is almost clear and the texture has improved</p>
                            <span>Olivia, Bangalore</span>
                            <button onClick={showmodal} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                        </div>
                        <div className='realdoctorsbox'>
                            <div className='realdoctorimg'>
                                <img src='/Assets/img/Testimonials/real1.png' alt="" />
                            </div>
                            <p>My skin is almost clear and the texture has improved</p>
                            <span>Olivia, Bangalore</span>
                            <button onClick={showmodal} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                        </div>
                        <div className='realdoctorsbox'>
                            <div className='realdoctorimg'>
                                <img src='/Assets/img/Testimonials/real2.png' alt="" />
                            </div>
                            <p>My skin is almost clear and the texture has improved</p>
                            <span>Olivia, Bangalore</span>
                            <button onClick={showmodal} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                        </div> */}

                    </div>
                    <div className='realdoctorsboxs'>
                        {
                            testimonials?.slice(10, 20)?.map((elem, index) => {
                                return (
                                    <div className='realdoctorsbox' key={index + 1}>
                                        <div className='realdoctorimg'>
                                            <img src={elem?.image} alt="" />
                                        </div>
                                        <p>{elem?.description?.slice(0, 15)}...</p>
                                        <span>{elem?.name}, Bangalore</span>
                                        <button onClick={() => readTestimonial(elem)} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={moreTestimonial ? "viewmorblock realdoctorsboxs" : "viewmornone"}>
                        <div className='realdoctorsboxs'>
                            {
                                testimonials?.slice(20, 30)?.map((elem, index) => {
                                    return (
                                        <div className='realdoctorsbox' key={index + 1}>
                                            <div className='realdoctorimg'>
                                                <img src={elem?.image} alt="" />
                                            </div>
                                            <p>{elem?.description?.slice(0, 15)}...</p>
                                            <span>{elem?.name}, Bangalore</span>
                                            <button onClick={() => readTestimonial(elem)} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className={moreTestimonial ? "viewmorblock realdoctorsboxs" : "viewmornone"}>
                        <div className='realdoctorsboxs'>
                            {
                                testimonials?.slice(30, 40)?.map((elem, index) => {
                                    return (
                                        <div className='realdoctorsbox' key={index + 1}>
                                            <div className='realdoctorimg'>
                                                <img src={elem?.image} alt="" />
                                            </div>
                                            <p>{elem?.description?.slice(0, 15)}...</p>
                                            <span>{elem?.name}, Bangalore</span>
                                            <button onClick={() => readTestimonial(elem)} ><span>Read More</span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span></button>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {testimonials?.length > 20 ?
                        !moreTestimonial ?
                            <div onClick={() => setMoreTestimonial(true)} className='testimonialbutton'>
                                <NoLinkBtn button="View more" />
                            </div>
                            :
                            <div onClick={() => setMoreTestimonial(false)} className='testimonialbutton'>
                                <NoLinkBtn button="View less" />
                            </div>
                        :
                        ''
                    }



                </div>

                <div className='caseStudys'>
                    <p>Case studies</p>

                    <div className='casestudyboxs'>
                        {
                            caseStudy_name_array?.slice(0, 7)?.map((elem, index) => {
                                return (
                                    <div className='casestudybox' style={{ marginTop: "20px",  marginBottom: "20px"}} key={index + 1}>
                                        <div className='img2'>
                                            <img src={`/Assets/img/caseStudy/celebr (${index+1}).jpg`}  alt="" />
                                        </div>
                                        <p>{elem?.name}, {elem?.age} year</p>
                                        <h4>{elem?.title}</h4>
                                        <button onClick={() => { }}> <span>Read More </span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span> </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <div className='casestudyboxs'>
                        {
                            caseStudies?.slice(10, 20)?.map((elem, index) => {
                                return (
                                    <div className='casestudybox' key={index + 1}>
                                        <div className='img2'>
                                            <img src={elem?.image} alt="" />
                                        </div>
                                        <p>{elem?.name}, {elem?.age} year</p>
                                        <h4>{elem?.title}</h4>
                                        <button onClick={() => readCase(elem)}> <span>Read More </span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span> </button>
                                    </div>
                                )
                            })
                        }
                    </div> */}

                    <div className={moreCaseStudies ? "viewmorblock casestudyboxs" : "viewmornone"}>
                        <div className='casestudyboxs'>
                            {
                                caseStudies?.slice(20, 30)?.map((elem, index) => {
                                    return (
                                        <div className='casestudybox' key={index + 1}>
                                            <div className='img2'>
                                                <img src={elem?.image} alt="" />
                                            </div>
                                            <p>{elem?.name}, {elem?.age} year</p>
                                            <h4>{elem?.title}</h4>
                                            <button onClick={() => readCase(elem)}> <span>Read More </span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span> </button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={moreCaseStudies ? "viewmorblock casestudyboxs" : "viewmornone"}>
                        <div className='casestudyboxs'>
                            {
                                caseStudies?.slice(30, 40)?.map((elem, index) => {
                                    return (
                                        <div className='casestudybox' key={index + 1}>
                                            <div className='img2'>
                                                <img src={elem?.image} alt="" />
                                            </div>
                                            <p>{elem?.name}, {elem?.age} year</p>
                                            <h4>{elem?.title}</h4>
                                            <button onClick={() => readCase(elem)}> <span>Read More </span> <span><img src='/Assets/img/Icons/Next.png' alt="" /></span> </button>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    {caseStudies?.length > 20 ?
                        !moreCaseStudies ?
                            <div onClick={() => setMoreCaseStudies(true)} className='testimonialbutton'>
                                <NoLinkBtn button="View more" />
                            </div>
                            :
                            <div onClick={() => setMoreCaseStudies(false)} className='testimonialbutton'>
                                <NoLinkBtn button="View less" />
                            </div>
                        :
                        ''
                    }

                </div>
                <div className='sec6c'>
                    <SkinHair />
                </div>
            </div >


            {/* -------------------------VIDEO MODAL--------------------- */}
            <VideoModal
                show={viewVideo}
                onHide={() => setViewVideo(false)}
            />

            {/* --------------------------TESTIMONIALS MODAL---------------------- */}
            <TestimonialsModal
                show={readMoreTestimonial}
                onHide={() => setReadMoreTestimonial(false)}
            />

            {/* --------------------------CASE STUDIES MODAL---------------------- */}
            <CaseStudiesModal
                show={readMoreCase}
                onHide={() => setReadMoreCase(false)}
            />

        </>
    );
};

export default Testimonials;