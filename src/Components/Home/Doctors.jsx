"use client"

import React from 'react';
import Secheader from '../secheader/Secheader';
function Doctors() {

    const heading = '"Ensuring specialized care from our experts."';
    const content = "After AI's supportive role, our team of over 40 experienced dermatologists designs a personalized regimen. These dermatologists are skilled in addressing mild to severe issues and offer effective care solutions for maintaining optimal skin and hair health. Currently, they provide ongoing monthly care to more than one million customers through our app."
    
    return (
        <>
            <div className="sec4maincontainer">
                <div className="sec4container">
                    <Secheader heading={heading} content={content} />
                    <div className="sec4doctorimgs">
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor1.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor2.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor3.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor4.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor5.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor6.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor7.png' alt="" />
                        </div>
                        {/* <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor5.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor6.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor1.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor2.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor3.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor4.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor5.png' alt="" />
                        </div>
                        <div className="doctorimgs">
                            <img src='/Assets/img/Doctors/doctor6.png' alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Doctors;
