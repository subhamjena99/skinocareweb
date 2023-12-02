"use client"

import { useState } from 'react';
import '../Signup.css';
import Link from 'next/link';
import { request } from '@/helpers';

const SignupOld = (props) => {

    // HANDLING INPUT TYPE STATE
    const [input, setInput] = useState(true);

    // HANDLING PASSWORD SHOW HIDE STATE
    const [view, setView] = useState({
        first: true,
        second: true,
    });

    // INPUT DATA STATE
    const [data, setData] = useState({
        name: "",
        mobile: "",
        password: "",
        confirm_password: ""
    });

    // HANDLING INPUTS CHANGE 
    const continuebutton = (e) => {
        e.preventDefault()
        setInput(false);
    };

    // ONCHANGE INPUT HANDLER
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
        }));

    };

    // HANDLING FORM SUBMISSION
    const submit = async (event) => {
        event.preventDefault();
        const credentials = { ...data };

        request({ url: 'api/user/register', cred: credentials })
            .then(res => {
                
                console.log(res.data);
            })
            .catch(err => console.log(err?.response?.data));

    };

    return (
        <>

            <div className="signupcontainer">
                <div className="signuppageimg">
                    <img src='/Assets/img/Icons/signup.svg' alt="signup" />
                </div>
                <div className="signupcontent">

                    <div className="formheading">
                        <h1>Sign up</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div className="inputs">

                            {
                                // input ?
                                //     <Signupinput
                                //         lable1="Name"
                                //         lable2="Phone/Email"
                                //         type1="text"
                                //         type2="text"
                                //         placeholder1="Name"
                                //         placeholder2=" Number/Email"
                                //         mail={'/Assets/img/Icons/mail.svg'}
                                //         handleView={[view, setView]}
                                //         eyeIcon1={false}
                                //         eyeIcon2={false}
                                //     />
                                //     : <Signupinput
                                //         lable1="Password"
                                //         lable2="Confirm Password"
                                //         type1="password"
                                //         type2="text"
                                //         placeholder1="Password"
                                //         placeholder2="Confirm Password"
                                //         eyeopen1={view?.first ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'}
                                //         eyeopen2={view?.second ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'}
                                //         mail={'/Assets/img/Icons/Password.svg'}
                                //         handleView={[view, setView]}
                                //         eyeIcon1={true}
                                //         eyeIcon2={true}
                                //     />
                            }

                            {
                                input ?
                                    <div className="forminputs">
                                        <div className="forminput">
                                            <label htmlFor="name">Name</label>
                                            <input type='text' name='name' id='name' placeholder='Name' onChange={handleChange} value={data?.name} required />
                                            <span><img src='/Assets/img/Icons/mail.svg' alt="" /></span>

                                        </div>
                                        <div className="forminput">
                                            <label htmlFor="phoneEmail">Phone/Email</label>
                                            <input type='text' name='mobile' id='phoneEmail' placeholder='Number/Email' onChange={handleChange} value={data?.mobile} required />
                                            <span><img src='/Assets/img/Icons/Password.svg' alt="" /></span>

                                        </div>
                                    </div>
                                    :
                                    <div className="forminputs">
                                        <div className="forminput">
                                            <label htmlFor="name">Password</label>
                                            <input type={view?.first ? 'password' : 'text'} name='password' id='name' placeholder='Password' onChange={handleChange} value={data?.password} required />
                                            <span><img src='/Assets/img/Icons/Password.svg' alt="" /></span>

                                            <div className="eyeopen" onClick={() => setView((prev) => ({
                                                ...prev,
                                                first: !view?.first,
                                            }))}>
                                                <img src={view?.first ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'} alt="" />
                                            </div>

                                        </div>
                                        <div className="forminput">
                                            <label htmlFor="phoneEmail">Confirm Password</label>
                                            <input type={view?.second ? 'password' : 'text'} name='confirm_password' id='phoneEmail' placeholder='Confirm Password' onChange={handleChange} value={data?.confirm_password} required />
                                            <span><img src='/Assets/img/Icons/Password.svg' alt="" /></span>

                                            <div className="eyeopen" onClick={() => setView((prev) => ({
                                                ...prev,
                                                second: !view?.second,
                                            }))}>
                                                <img src={view?.second ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'} alt="" />
                                            </div>

                                        </div>
                                    </div>
                            }

                            {

                                input ?
                                    <div className="formbutton">
                                        <button onClick={continuebutton}>Continue</button>
                                    </div>
                                    :
                                    <div className="formbutton">
                                        {/* <Link href="/verify"> */}
                                        <button type='submit'>Continue</button>
                                        {/* </Link> */}
                                    </div>
                            }


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
                        <Link href='/signin'>
                            <strong>Already have an account?</strong> <span>SingIn</span>
                        </Link>
                    </div>

                </div>

            </div>

        </>
    )
}

export default SignupOld
