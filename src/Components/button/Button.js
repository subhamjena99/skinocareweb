import Link from 'next/link'
import React from 'react'


function Button(props) {
    return (
        <>

            <div className="buttoncontainer">

                <div className="sec1button">
                    <Link href={props?.link ? props?.link : '#!'}><button>{props?.button} <span className='buttonarrow' >
                        <i className="fa-solid fa-arrow-right cta-arrow"></i>
                    </span></button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Button
