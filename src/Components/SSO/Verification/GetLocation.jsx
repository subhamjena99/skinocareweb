import React from 'react';
import '../Signup.css';

const GetLocation = () => {
    return (
        <div>
            {/* <div className="signupcontainer2">
                <div className="signupimgsec w-100">
                    <img src='/Assets/img/Icons/otpvarification.svg' alt="" />
                </div>
                <div className="verifycontent container">
                    <div className="addlocationhead">
                        <p>Tell your doctor which city you live in, so that they give you the best treatment</p>
                        <h4>But how my city affects my skin and hair?</h4>
                    </div>

                    <div className="addlocationmid">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder='Enter' />

                    </div>
                    <div className="addlocationbutton">
                        <button>No, Thanks</button>
                    </div>
                </div>

            </div> */}
            <div className="signupcontainer">
                <div className="signuppageimg">
                    <img src='/Assets/img/Icons/signup.svg' alt="signup" />
                </div>
                <div className="signupcontent justify-content-center">

                    <div className="formheading">
                        {/* <h1>Location</h1> */}
                        <div className="inputs">
                            <div className="addlocationhead forminput">
                                <p>Tell your doctor which city you live in, so that they give you the best treatment</p>
                                {/* <h4>But how my city affects my skin and hair?</h4> */}
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="inputs">
                            <div className="forminputs">
                                <div className="forminput">
                                    <label htmlFor="location">Location</label>
                                    <input type='text' name='value' id='location' placeholder='Enter Location' required />
                                    <span><img src='/Assets/img/Icons/Location.svg' alt="" /></span>

                                </div>
                            </div>

                            <div className="formbutton">
                                <button type='submit'>No, Thanks</button>
                            </div>


                        </div>


                    </form>

                </div>

            </div>
        </div>
    );
};

export default GetLocation;
