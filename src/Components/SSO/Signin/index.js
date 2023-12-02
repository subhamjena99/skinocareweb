"use client"

import Link from 'next/link';
import '../Signup.css';
import { useState } from 'react';

const Signin = () => {

    // HANDLING PASSWORD SHOW HIDE STATE
    const [passView, setPassView] = useState(true);

    return (
        <>

            <div className="signupcontainer">
                <div className="signuppageimg">
                    <img src='/Assets/img/Icons/signinimg.png' alt="signup" />
                </div>
                <div className="signupcontent">

                    <div className="formheading">
                        <h1>Sign In</h1>
                    </div>
                    <form >
                        <div className="inputs">

                            <div className="forminputs">
                                <div className="forminput">
                                    <label htmlFor="name">Email</label>
                                    <input type="email" id='name' placeholder='email' />
                                    <span><img src={'/Assets/img/Icons/mail.svg'} alt="" /></span>

                                </div>
                                <div className="forminput">
                                    <label htmlFor="phoneEmail">Password</label>
                                    <input type={passView ? "password" : "text"} id='phoneEmail' placeholder="Password" />
                                    <div className="mailsvg">
                                        <img src={'/Assets/img/Icons/Password.svg'} alt="" />
                                    </div>
                                    <div className="eyeopen" onClick={() => setPassView((prev) => (!prev))}>
                                        <img src={passView ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'} alt="" />
                                    </div>
                                </div>
                                <span className='signinwithotp'><Link href="/verify">Sign In with OTP</Link></span>
                            </div>

                            <div className="formbutton">

                                <button>Submit</button>
                            </div>

                            <div className="forgetpassword">
                                <Link href="/forget-password">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                    </form>

                    <div className="hrtag">
                        <hr className="hr-text gradient" data-content="OR" />
                        <p>or</p>
                    </div>

                    <div className="googlelogin">
                        <div className="googleloginbox">
                            <button> <img src='/Assets/img/Icons/google.svg' alt="" /> <span>Sign in with Google</span> </button>
                        </div>
                        <div className="googleloginbox" id='applebutton1'>
                            <button><img src='/Assets/img/Icons/facebook.png' alt="" />  <span>Sign in with Facebook</span></button>
                        </div>
                        <div className="googleloginbox" id='applebutton'>
                            <button> <img src='/Assets/img/Icons/applelogo.png' alt="" /> <span>Sign in with Apple</span></button>
                        </div>
                    </div>

                    <div className="signuplogin">
                        <Link href='/signup'>
                            <strong>Don`t have an account?</strong> <span>Sign up</span>
                        </Link>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Signin;
