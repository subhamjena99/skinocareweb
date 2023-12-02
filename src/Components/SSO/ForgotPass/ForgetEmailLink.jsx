import { useState } from 'react';
import '../Signup.css';

const ForgetEmailLink = () => {

    // HANDLING FORM TYPE STATE
    const [forgetemail, setForgetemail] = useState(false);

    // HANDLING PASSWORD SHOW HIDE STATE
    const [passView, setPassView] = useState({
        first: true,
        second: true,
    });

    return (
        <>


            <div className="signupcontainer2">
                <div className="signupimgsec">
                    <img src='/Assets/img/Icons/forgetpassword.png' alt="" />
                </div>
                <div className="verifycontent">
                    <div className="verifynumberbox">
                        <div className="verifyheading">
                            <h2>Forget your Password</h2>
                        </div>
                        <div className="verifynumber">


                            <p>If there is an account associated with this email address you  <br /> will receive a Link to reset email.</p>



                        </div>
                        <div className="verifysigninlink">
                            <div className="resetemaillink">
                                <div className="forgetemail">
                                    <label htmlFor="">Password</label>
                                    <div className="forgetemailinput">
                                        <input type="password" placeholder='Password' />
                                    </div>
                                    <div className="mailsvg">
                                        <img src='/Assets/img/Icons/Password.svg' alt="" />
                                    </div>
                                    <div className="eyeopen" onClick={() => setPassView((prev) => ({
                                        ...prev,
                                        first: !passView?.first,
                                    }))}>
                                        <img src={passView?.first ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'} alt="" />
                                    </div>
                                </div>
                                <div className="forgetemail">
                                    <label htmlFor="">Confirm Password</label>
                                    <div className="forgetemailinput">
                                        <input type="password" placeholder='Confirm Password' />
                                    </div>
                                    <div className="mailsvg">
                                        <img src='/Assets/img/Icons/Password.svg' alt="" />
                                    </div>
                                    <div className="eyeopen" onClick={() => setPassView((prev) => ({
                                        ...prev,
                                        second: !passView?.second,
                                    }))}>
                                        <img src={passView?.second ? '/Assets/img/Icons/eye-open.svg' : '/Assets/img/Icons/eye-close.svg'} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                    <div className="verifybutton">


                        <button onClick={() => setForgetemail(true)} >Reset Password</button>


                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetEmailLink
