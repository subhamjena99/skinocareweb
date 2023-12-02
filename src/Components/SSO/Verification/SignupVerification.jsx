"use client"

import Link from 'next/link';
import '../Signup.css';
import OtpInput from 'react-otp-input';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { noTokenPostRequest } from '@/helpers';
import Information from './Information';
import useCookie from '@/hooks/cookie';

const SignupVerification = (props) => {

    // USING CUSTOM COOKIE HOOK
    const [setCookie, getCookie] = useCookie();

    // COMPONENT API LOADING STATE
    const [loading, setLoading] = useState(false);
    // MOBILE/EMAIL DATA STATE FROM PARENT
    const [data, setData] = props?.data;

    // HANDLING INPUT VISIBILITY
    const [input, setInput] = props?.handleVisibility;

    // HANDLING INPUT VISIBILITY
    const [infoStatus, setInfoStatus] = useState(false);

    // HANDLING INPUTS CHANGE 
    const backBtn = (e) => {
        e.preventDefault()
        setInput(prev => !prev);
    };

    // OTP INPUT STATE
    const [otp, setOtp] = useState('');

    // HANDLING OTP RESENDING
    const resendOTP = async () => {
        const credentials = { ...data };

        noTokenPostRequest({ url: 'api/user/app-resend-otp', cred: credentials })
            .then(res => {
                if (res.data.status) {
                    toast.success(res?.data?.msg)
                } else {
                    toast.error(res?.data?.msg)
                }
            })
            .catch(err => console.log(err?.response?.data));

    };

    // HANDLING OTP RESENDING
    const submit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const credentials = { ...data, otp };

        noTokenPostRequest({ url: 'api/user/app-verify-otp', cred: credentials })
            .then(res => {
                if (res.data.status) {
                    toast.success(res?.data?.msg)
                    if (!res?.data?.data?.isRegistered) {
                        setInfoStatus(true);
                    } else {
                        setOtp('');
                        setCookie('skinocare-auth', res?.data?.data?.token, 1);
                        // router.push('/', { scroll: false });
                        window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`
                    };
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                };
            })
            .catch(err => {
                if(err?.data?.msg){
                    toast.error(err?.data?.msg)
                }else if(err?.response?.data?.msg){
                    toast.error(err?.response?.data?.msg)
                }else{
                    toast.error(err?.response?.data?.errors)
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });

    };

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />
            {infoStatus ?
                <Information data={[data, setData]} />
                :
                <form onSubmit={submit}>
                    <div className="signupcontainer2">
                        <div className="signupimgsec text-center w-100">
                            <img src='/Assets/img/Icons/otpvarification.svg' alt="" />
                        </div>
                        <div className="verifycontent">

                            <div className="verifynumberbox">

                                <div className="verifyheading">
                                    <h2>OTP Verification</h2>
                                </div>

                                <div className="verifynumber">
                                    <label htmlFor="">Verification code</label>
                                    <div className="verifylableinput12">
                                        <OtpInput className="inputotp"
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={4}
                                            renderInput={(props) => <input type='number'  {...props} placeholder="0" />}
                                            inputType="tel"
                                            inputStyle='otp-input'
                                        />
                                    </div>
                                </div>
                                <div className="verifysigninlink">

                                    <p><strong> Didn`t receive?</strong> <span className='a' onClick={() => { resendOTP() }}> Send again</span></p>

                                </div>

                            </div>

                            <div className="verifybutton">
                                <button className='mb-3' type='submit' disabled={loading}>Proceed</button>
                                <Link href={'#!'} onClick={backBtn}><i className="fa-solid fa-arrow-left cta-arrow"></i> Back</Link>
                            </div>

                            <div className="formheading">
                                <div className="inputs">
                                    <div className="addlocationhead forminput">
                                        <p>By proceeding you consent to share your information with SkinOcare and agree to SkinOcare <Link href='/legal/privacy-policy'>Privacy Policy</Link> and <Link href='/legal/terms'>Terms of Services.</Link></p>
                                        {/* <h4>But how my city affects my skin and hair?</h4> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>}
        </>
    );
};

export default SignupVerification;
