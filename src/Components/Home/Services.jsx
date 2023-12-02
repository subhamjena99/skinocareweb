"use client"

import React from 'react';
import Secheader from '../secheader/Secheader';

function Services() {

    const heading = "Our Services";
    const content = "Unlock Your Beauty Potential with Our Comprehensive Services";

    return (
        <>
            <div className="sec5maincontainer">
                <div className="sec5container">
                    <Secheader heading={heading} content={content} />
                    <div className="sec5container1">
                        <div className="sec5containerboxs">
                            <div className="sec5containerbox service-1">
                                <div className="sec5boximg">
                                    <img src='/Assets/img/Services/services1.png' alt="img" />
                                </div>
                                <div className="sec5boxcontent">
                                    <h3>Skin & Hair Regimen</h3>
                                    <p>"Guaranteed visible
                                        improvements through
                                        the use of clinicallytested ingredients and
                                        individualised product
                                        solutions."</p>
                                </div>
                            </div>
                            <div className="sec5containerbox service-2">
                                <div className="sec5boximg">
                                    <img src='/Assets/img/Services/services2.png' alt="img" />
                                </div>
                                <div className="sec5boxcontent">
                                    <h3>Nutritional Diet Plan</h3>
                                    <p>"Free meal plans to
                                        ensure your daily dietary
                                        choices promote the
                                        health of your skin and
                                        hair."</p>
                                </div>
                            </div>
                            <div className="sec5containerbox service-3">
                                <div className="sec5boximg">
                                    <img src='/Assets/img/Services/services3.png' alt="img" />
                                </div>
                                <div className="sec5boxcontent">
                                    <h3>Lifestyle Guidance By
                                        Experts</h3>
                                    <p>"Guidance for a
                                        wholesome, clean, and
                                        stress-free lifestyle to
                                        help you radiate natural
                                        beauty."</p>
                                </div>
                            </div>
                            <div className="sec5containerbox service-4">
                                <div className="sec5boximg">
                                    <img src='/Assets/img/Services/services4.png' alt="img" />
                                </div>
                                <div className="sec5boxcontent">
                                    <h3>Regular Doctor
                                        Checkups</h3>
                                    <p>"Receive complimentary
                                        periodic assessments
                                        with a Skinocare
                                        dermatologist to
                                        meticulously track your
                                        skin and hair
                                        improvements."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
