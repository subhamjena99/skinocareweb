import '../Signup.css';

const Signupinput = ({ lable1, lable2, type1, type2, placeholder1, mail, placeholder2, eyeopen1, eyeopen2, handleView, eyeIcon1, eyeIcon2 }) => {

    // HANDLING PASSWORD SHOW HIDE STATE
    const [view, setView] = handleView;

    return (
        <>

            <div className="forminputs">
                <div className="forminput">
                    <label htmlFor="name">{lable1}</label>
                    <input type={view?.first ? type1 : type2} id='name' placeholder={placeholder1} />
                    <span><img src={mail} alt="" /></span>

                    {eyeIcon1 && <div className="eyeopen" onClick={() => setView((prev) => ({
                        ...prev,
                        first: !view?.first,
                    }))}>
                        <img src={eyeopen1} alt="" />
                    </div>}

                </div>
                <div className="forminput">
                    <label htmlFor="phoneEmail">{lable2}</label>
                    <input type={view?.second ? type1 : type2} id='phoneEmail' placeholder={placeholder2} />
                    <span><img src={mail} alt="" /></span>

                    {eyeIcon2 && <div className="eyeopen" onClick={() => setView((prev) => ({
                        ...prev,
                        second: !view?.second,
                    }))}>
                        <img src={eyeopen2} alt="" />
                    </div>}

                </div>
            </div>

        </>
    );
};

export default Signupinput;
