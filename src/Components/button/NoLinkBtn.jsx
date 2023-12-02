import React from 'react'

const NoLinkBtn = (props) => {
    return (
        <div className="buttoncontainer">

            <div className="sec1button">
                <button>{props?.button} <span className='buttonarrow' >
                    <i className="fa-solid fa-arrow-right cta-arrow"></i>
                </span></button>
            </div>
        </div>
    );
};

export default NoLinkBtn;