"use client"

import { useState } from 'react';
import '../Signup.css';
import { noTokenPostRequest } from '@/helpers';
import SignupVerification from '../Verification/SignupVerification';
import { toast, Toaster } from "react-hot-toast";
import Link from 'next/link';

const Signup = () => {

    // LOADING STATE
    const [loading, setLoading] = useState(false);

    // HANDLING INPUT TYPE STATE
    const [input, setInput] = useState(true);

    // INPUT DATA STATE
    const [data, setData] = useState({
        type: '',
        value: '',
    });

    // ONCHANGE INPUT HANDLER
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value,
            type: Number(data?.value) ? 'mobile' : 'email'
        }));

    };

    // HANDLING FORM SUBMISSION
    const submit = async (event) => {
        event?.preventDefault();
        setLoading(true);

        setData(prev => ({
            ...prev,
            type: Number(data?.value) ? 'mobile' : 'email',
        }));
        const credentials = { ...data, type: Number(data?.value) ? 'mobile' : 'email' };

        noTokenPostRequest({ url: 'api/user/applogin', cred: credentials })
            .then(res => {
                if (res.data.status) {
                    toast.success(res?.data?.msg);
                    setInput(false);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                }
            })
            .catch(err => {
                if (err?.data?.msg) {
                    toast.error(err?.data?.msg);
                } else if (err?.response?.data?.errors) {
                    toast.error(err?.response?.data?.errors);
                } else {
                    toast.error(err?.response?.data?.msg);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />
            {input ?
                <div className="signupcontainer">
                    <div className="signuppageimg text-center">
                        <img src='/Assets/img/Icons/signup.svg' alt="signup" />
                    </div>
                    <div className="signupcontent justify-content-center">

                        <div className="formheading">
                            <h1>Sign In/Registration</h1>
                        </div>
                        <form onSubmit={submit}>
                            <div className="inputs">
                                <div className="forminputs">
                                    <div className="forminput">
                                        <label htmlFor="phoneEmail">Phone/Email</label>
                                        <input type='text' name='value' id='phoneEmail' placeholder='Number/Email' onChange={handleChange} value={data?.value} required />
                                        <span><img src='/Assets/img/Icons/Password.svg' alt="" /></span>

                                    </div>
                                </div>

                                <div className="formbutton">
                                    <button type='submit' disabled={loading}>Proceed</button>
                                </div>


                            </div>
                            <div className="formheading mt-4">
                                <div className="inputs">
                                    <div className="addlocationhead forminput">
                                        <p>By proceeding you consent to share your information with SkinOcare and agree to SkinOcare <Link href='/legal/privacy-policy'>Privacy Policy</Link> and <Link href='/legal/terms'>Terms of Services.</Link></p>
                                        {/* <h4>But how my city affects my skin and hair?</h4> */}
                                    </div>
                                </div>
                            </div>

                        </form>

                        {/* <div className="hrtag">
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
                        </div> */}

                    </div>

                </div>
                :
                <SignupVerification handleVisibility={[input, setInput]} data={[data, setData]} />
            }

        </>
    )
}

export default Signup
