import Link from 'next/link'
import React from 'react'

const Privcy = () => {
    return (
        <>
            <div className="privcycontainer">

                <div className="privcyboxs">
                    <ul className='p-0'>
                        <li className='text-center'><Link href="/legal/shipping-policy">Shipping policy</Link> </li>
                        {/* <li className='text-center'><Link href="#!">Refund policy</Link> </li> */}
                        <li className='text-center'><Link href="/legal/refund-policy">Refund policy</Link> </li>
                        <li className='text-center'><Link href="/legal/privacy-policy">Privacy policy</Link> </li>
                        <li><Link href="/legal/terms">Terms and conditions</Link> </li>
                    </ul>

                </div>

            </div>

        </>
    )
}

export default Privcy
