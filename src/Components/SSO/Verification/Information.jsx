"use client"

import { noTokenPostRequest } from '@/helpers';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useCookie from '@/hooks/cookie';
import '../Signup.css';

const Information = (props) => {

    // USING CUSTOM COOKIE HOOK
    const [setCookie, getCookie] = useCookie();

    // COMPONENT API LOADING STATE
    const [loading, setLoading] = useState(false);
    // MOBILE/EMAIL DATA STATE FROM PARENT
    const [data, setData] = props?.data;

    // MOBILE/EMAIL DATA STATE FROM PARENT
    const [info, setInfo] = useState({
        email: data?.type === 'email' ? data?.value : '',
        name: "",
        age: '',
        gender: ""
    });

    // ONCHANGE INPUT HANDLER
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(prev => ({
            ...prev,
            [name]: value,
        }));

    };

    // HANDLING OTP RESENDING
    const submit = () => {
        const credentials = { ...data, ...info };

        noTokenPostRequest({ url: 'api/user/app-register', cred: credentials })
            .then(res => {
                if (res.data.status) {
                    toast.success(res?.data?.msg)
                    setData({
                        type: '',
                        value: '',
                    });
                    setInfo({
                        email: "",
                        name: "",
                        age: '',
                        gender: ""
                    })
                    setCookie('skinocare-auth', res?.data?.data?.token, 1)
                    // router.push('/', { scroll: false })
                    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}`;
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
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="signupcontainer">
                <div className="signuppageimg">
                    <img src='/Assets/img/Icons/signup.svg' alt="signup" />
                </div>
                <div className="signupcontent">

                    <div className="formheading">
                        <h1>Add your Information</h1>
                    </div>
                    <div className="inputs">
                        <div className="forminputs">
                            <div className="forminput">
                                <label htmlFor="name">Full Name</label>
                                <input type='text' className='px-2' name='name' id='name' placeholder='Enter here' onChange={handleChange} value={info?.name} required />

                            </div>
                        </div>
                        <div className="forminputs">
                            <div className="forminput">
                                <label htmlFor="age">Age</label>
                                <input type='number' className='px-2' name='age' id='age' placeholder='Enter here' onChange={handleChange} value={info?.age} required />

                            </div>
                        </div>
                        <div className="forminputs">
                            <div className="forminput">
                                <label htmlFor="email">Email Id</label>
                                <input type='email' className='px-2' name='email' id='email' placeholder='Enter here' onChange={data?.type === 'email' ? '' : handleChange} value={data?.type === 'email' ? data?.value : info?.email} required readOnly={data?.type === 'email' ? true : false} />

                            </div>
                        </div>
                        {/* <div className="forminputs">
                            <div className="forminput">
                                <div><label htmlFor="male">Gender</label></div>
                                <div className='d-flex'>
                                    <label htmlFor="male" className='pe-3'>Male</label>
                                    <input type='radio' className='me-3' onChange={handleChange} value='male' name='gender' id='male' />
                                    <label htmlFor="female" className='pe-3'>Female</label>
                                    <input type='radio' name='gender' onChange={handleChange} value='female' id='female' />
                                </div>

                            </div>
                        </div> */}

                        <div className="afterotpunputbox forminputs">

                            <div><label htmlFor="gender">Choose your Gender</label> </div>


                            <label className="gendercontainer" htmlFor="flexRadioDefault2">

                                <label className="imgcontents align-items-center" htmlFor="flexRadioDefault2" >
                                    <div className="genderimg">
                                        <img src='/Assets/img/Icons/female.png' alt="" />
                                    </div>
                                    <p className='m-0'>Female</p>

                                </label>

                                <div className="next-button">
                                    <input type="radio" onChange={handleChange} value='female' name='gender' id="flexRadioDefault2" />
                                </div>



                            </label>

                            <label className="gendercontainer" htmlFor="flexRadioDefault1">

                                <label className="imgcontents align-items-center" htmlFor="flexRadioDefault1">
                                    <div className="genderimg">
                                        <img src='/Assets/img/Icons/male.png' alt="" />
                                    </div>
                                    <p className='m-0'>Male</p>

                                </label>

                                <div className="next-button">
                                    <input type="radio" onChange={handleChange} value='male' name='gender' id='flexRadioDefault1' />
                                </div>


                            </label>

                        </div>

                        <div className="formbutton">
                            <button onClick={() => submit()} disabled={loading}>Proceed</button>
                        </div>


                    </div>

                </div>

            </div>
        </>
    );
};

export default Information;
