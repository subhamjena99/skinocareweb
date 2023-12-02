import Image from 'next/image';
import SkinAndCareHeading from '../SkinAndCareHeading';
import './FAQs.css'

const FAQs = (props) => {

    // FETCHED FAQS FROM API ON SERVER SIDE
    const faqs = props?.faqs;

    // PAGE TITLE & SUBTITLE
    const h2 = `"Frequently Asked Questions (FAQ)"`;
    const p = `"Your Queries, Answered"`;

    return (
        <>

            <div className="faqsmaincontainer">
                <div className="faqscontainer">

                    <SkinAndCareHeading h2={h2} p={p} />

                    {/* MAPPING FAQS CATEGORIES */}
                    {
                        faqs?.map((elem, index) => {
                            return (
                                <div className="faqsswctionbox" key={index + 1}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={elem?.image} width={50} height={50} alt="" className='me-3' />
                                        {/* <Image src={elem?.image} width={10} height={10} alt="" srcset="" /> */}
                                        <h5>{elem?.name}</h5>
                                    </div>

                                    <div className="faqsbox">
                                        <div className="accordion" id={elem?.name?.split(" ")?.join('-')}>

                                            {/* MAPPING FAQS LIST ACCORDING TO CATEGORIES */}
                                            {
                                                elem?.faqs?.map((faq, ind) => {
                                                    return <div className="accordion-item" key={ind + 1}>
                                                        <h2 className="accordion-header" id='faqsbutton' >
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index + 1}${ind + 1}`} aria-expanded="false" aria-controls={`collapse${index + 1}${ind + 1}`}>
                                                                {faq?.question}
                                                            </button>
                                                        </h2>
                                                        <div id={`faq${index + 1}${ind + 1}`} className="accordion-collapse collapse" data-bs-parent={`#${elem?.name?.split(" ")?.join('-')}`}>
                                                            <div className="accordion-body">
                                                                {faq?.answer}
                                                            </div>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }

                    {/* <div className="faqsswctionbox">

                        <h5>1.About Skinocare</h5>

                        <div className="faqsbox">
                            <div className="accordion" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton' >
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone" aria-expanded="false" aria-controls="collapseTwo">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseone" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton' >
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div> */}

                    {/* <div className="faqsswctionbox">

                        <h5>2.About Skinocare</h5>

                        <div className="faqsbox">
                            <div className="accordion" id="accordionExample">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton' >
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone1" aria-expanded="false" aria-controls="collapseTwo">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseone1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton' >
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseThree1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour1" aria-expanded="false" aria-controls="collapseThree">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapsefour1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div> */}

                    {/* <div className="faqsswctionbox">

                        <h5>3.About Skinocare</h5>

                        <div className="faqsbox">
                            <div className="accordion" id="accordionExample3">

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton' >
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone2" aria-expanded="false" aria-controls="collapseTwo3">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseone2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton' >
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo3">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapseThree2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id='faqsbutton'>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour2" aria-expanded="false" aria-controls="collapseThree">
                                            How does Cureskin correct my skin or hair concerns with just photos?
                                        </button>
                                    </h2>
                                    <div id="collapsefour2" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                                        <div className="accordion-body">
                                            Once you upload your photos on the Cureskin app: The smart AI technology analyses your skin/hair health and detects concerns like acne, dark circles, pigmentation, scars, hair fall, and dandruff. It even detects the concerns invisible to the naked eye. Our dermatologist looks at your AI photo report to understand your skin and hair condition. The dermatologist then curates a regimen, specifically meant for your skin or hair needs. Dermatologist uses your photo as a reference for not only accurate diagnosis, but also to monitor timely improvement during the regimen. Thus, in just a few quick steps, Cureskin treats your skin and hair concerns.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div> */}


                </div>
            </div>

        </>
    );
};

export default FAQs;
