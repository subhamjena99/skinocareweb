import { CartContext } from '@/Context/CartContext';
import { addToCart } from '@/helpers';
import useCookie from '@/hooks/cookie';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ProductCard = (props) => {

    // USING CUSTOM COOKIE HOOK
    const [setCookie, getCookie] = useCookie();
    // GETTING TOKEN VALUE FROM COOKIE
    const token = getCookie('skinocare-auth');

    // ACCESSING CONTEXT API FOR CART
    const [data, setData] = useContext(CartContext);

    // LOADING STATE
    const [loading, setLoading] = useState(false);

    const cart = (cred) => {
        setLoading(true);
        addToCart({ cred }).then(res => {
            setData(prev => prev + 1);
            toast.success(res?.data?.msg);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }).catch(err => {
            if (token !== undefined && token !== "undefined") {
                if (err?.data?.msg) {
                    toast.error(err?.data?.msg);
                } else if (err?.response?.data?.errors) {
                    toast.error(err?.response?.data?.errors);
                } else {
                    toast.error(err?.response?.data?.msg);
                }
            } else {
                toast.error('Login First')
            }
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })
    };

    // console.log('cart count',data);
    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />
            {/* <div className='col-xl-3 col-lg-4 col-md-6 m-0 p-0' key={props?.key}> */}

            <div className="productbox123">

                <div className="productimg12">
                    {/* <img src='/Assets/img/Products/product5.png' alt="" /> */}
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M10.6415 4.13829L7.66615 3.70586L6.33608 1.00938C6.29975 0.935551 6.23998 0.875786 6.16615 0.839457C5.981 0.748051 5.756 0.824223 5.66342 1.00938L4.33334 3.70586L1.35795 4.13829C1.27592 4.15 1.20092 4.18868 1.1435 4.24727C1.07408 4.31862 1.03582 4.41461 1.03714 4.51415C1.03846 4.6137 1.07924 4.70864 1.15053 4.77813L3.30326 6.87696L2.79467 9.84063C2.78274 9.90957 2.79037 9.98047 2.81669 10.0453C2.84301 10.1101 2.88697 10.1663 2.94358 10.2074C3.00019 10.2485 3.06719 10.2729 3.13697 10.2779C3.20676 10.2829 3.27655 10.2682 3.33842 10.2355L5.99975 8.83633L8.66108 10.2355C8.73373 10.2742 8.81811 10.2871 8.89897 10.273C9.10287 10.2379 9.23998 10.0445 9.20483 9.84063L8.69623 6.87696L10.849 4.77813C10.9076 4.72071 10.9462 4.64571 10.958 4.56368C10.9896 4.3586 10.8466 4.16875 10.6415 4.13829Z" fill="white" />
                        </svg> <span>{props?.details?.averageRating ? props?.details?.averageRating : 4.5}</span>
                    </p>
                    <div className='product-card wishlist-icon-container a'>
                        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="wishlist pro">
                                <path id="Vector" d="M6.24984 3.33399C3.71859 3.33399 1.6665 5.38607 1.6665 7.91732C1.6665 12.5007 7.08317 16.6673 9.99984 17.6365C12.9165 16.6673 18.3332 12.5007 18.3332 7.91732C18.3332 5.38607 16.2811 3.33399 13.7498 3.33399C12.1998 3.33399 10.829 4.10357 9.99984 5.28149C9.5772 4.67949 9.01574 4.18819 8.36298 3.84919C7.71021 3.51019 6.98538 3.33347 6.24984 3.33399Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                        </svg>
                    </div>
                    <Link href={`/shop/${props?.details?.slug}`}>
                        <img src={props?.details?.thumbnail} alt="" />
                    </Link>
                </div>
                <div className="productcontent1">
                    {/* <p><Link href="/shop/gentle-cleanse-face-foam">Gentle Cleanse Face Foam </Link></p>
                    <h3>Rs. 587 <s>Rs.587</s></h3> */}
                    <p><Link href={`/shop/${props?.details?.slug}`}>{(props?.details?.name)?.slice(0, 15)}... </Link></p>
                    <h3>Rs. {props?.details?.price} <s>Rs.{props?.details?.mrp}</s></h3>

                    <div className="productbutton12">
                        <button
                            onClick={() => cart({
                                productId: props?.details?._id,
                                quantity: 1
                            })}
                            disabled={loading}
                        >Add to cart <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_422_2842)">
                                    <path d="M5.34191 18.6833L2.6183 13.2361C0.956047 9.91156 3.37353 6 7.09044 6H16.9101C20.627 6 23.0445 9.91156 21.3822 13.2361L18.6586 18.6833C17.6423 20.716 15.5647 22 13.2921 22H10.7085C8.43584 22 6.35826 20.716 5.34191 18.6833Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M14 2L17 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M10 2L7 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M10 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M14 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_422_2842">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> </button>
                    </div>

                </div>



            </div>


            {/* </div> */}
        </>
    )
}

export default ProductCard;
