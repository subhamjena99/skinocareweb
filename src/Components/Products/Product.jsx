"use client"

import { useContext, useEffect, useState } from 'react';
import Productslider from './productslider/Productslider';
import OtherProducts from './OtherProducts';
import { getRequest, noTokenGetRequest, postRequest } from '@/helpers';
import { toast, Toaster } from "react-hot-toast";
import useCookie from '@/hooks/cookie';
import { useRouter, usePathname } from 'next/navigation';
import Rating from 'react-rating';
import Cart from '../Cart';
import { CartContext } from '@/Context/CartContext';
import './Product.css';

const Product = (props) => {

    // USING NAVIGATION HOOK
    const router = useRouter();
    const pathname = usePathname();
    // GETTING PRODUCT SLUG
    const slug = pathname?.split('/')?.splice(-1)?.toString();

    // USING CUSTOM COOKIE HOOK
    const [setCookie, getCookie] = useCookie();
    // GETTING TOKEN VALUE FROM COOKIE
    const token = getCookie('skinocare-auth');

    // ACCESSING CONTEXT API FOR CART
    const [data, setData] = useContext(CartContext);

    // COMPONENT UPDATION STATE
    const [status, setStatus] = useState(false);
    // PRODUCT DETAILS STATE
    const [productDetails, setProductDetails] = useState(props?.productDetails);

    // LOADING STATE
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (token !== undefined && token !== "undefined") {
            getRequest({ url: `api/web/products/${slug}`, token })
                .then(res => {
                    if (res?.data?.status) {
                        setProductDetails(res?.data?.data);
                    };
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            noTokenGetRequest(`api/web/products/${slug}`)
                .then(res => {
                    if (res?.data?.status) {
                        setProductDetails(res?.data?.data);
                    };
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [status]);

    // CART TOGGLE STATE
    const [cartToggler, setCartToggler] = useState(false);
    // HANDLING CART TOGGLE
    const closebutton3 = () => {
        setCartToggler(false);
    };

    // PRODUCT QUANTITY STATE
    const [qty, setQty] = useState(1);

    // ADD TO CART API CALL
    const addToCart = (productId) => {
        setLoading(true);
        const credentials = { productId, quantity: qty };
        postRequest({ url: 'api/user/cart', cred: credentials, token: token })
            .then(res => {
                if (res.data.status) {
                    setData(prev => prev + 1);
                    setStatus(prev => !prev);
                    toast.success(res?.data?.msg)
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                }
            })
            .catch(err => {
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

    // BUY NOW API CALL
    const buyNow = (productId) => {
        setLoading(true);
        if (token !== undefined && token !== "undefined") {
            postRequest({ url: `api/user/billing`, token: token, cred: { checkoutType: 'buy', productId, quantity: qty, shippingMethod: 'free_shipping', } })
                .then(res => {
                    if (res?.data?.status) {
                        sessionStorage.setItem('checkout', JSON.stringify({ checkoutType: 'buy', productId, quantity: qty }));
                        router.push('/checkout');
                    };
                })
                .catch(err => {
                    setLoading(false);
                    console.log(err);
                })
        } else {
            setLoading(false);
            toast.error('Login First');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
        // const credentials = { productId, quantity: qty };
        // postRequest({ url: 'api/user/cart', cred: credentials, token: token })
        // const credentials = { productId, quantity: qty, checkoutType: "buy" };
        // postRequest({ url: 'api/user/billing', cred: credentials, token: token })
        //     .then(res => {
        //         if (res.data.status) {
        //             router.push('/checkout');
        //             setTimeout(() => {
        //                 setLoading(false);
        //             }, 1000);
        //         }
        //     })
        //     .catch(err => {
        //         if (token !== undefined && token !== "undefined") {
        //             toast.error(err?.response?.data?.msg)
        //         } else {
        //             toast.error('Login First')
        //         }
        //         setTimeout(() => {
        //             setLoading(false);
        //         }, 1000);
        //     })
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />

            {cartToggler ? <Cart close={closebutton3} data={props?.cartData} action={setStatus} /> : ""}

            <div className="productmaincontainer">
                <div className="productcontainer">
                    <div className="productbox">
                        <div className="procductimgslider">
                            <div className="wishlist-icon-container a">
                                {productDetails?.isWishlist ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                                        <mask id="mask0_2254_20099" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="17">
                                            <path d="M6.85 3.33399C4.72375 3.33399 3 5.05774 3 7.18399C3 11.034 7.55 14.534 10 15.3481C12.45 14.534 17 11.034 17 7.18399C17 5.05774 15.2762 3.33399 13.15 3.33399C11.848 3.33399 10.6965 3.98044 10 4.96989C9.64499 4.46421 9.17336 4.05152 8.62504 3.76676C8.07672 3.48199 7.46785 3.33355 6.85 3.33399Z" fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </mask>
                                        <g mask="url(#mask0_2254_20099)">
                                            <path d="M0 -1H20V19H0V-1Z" fill="#F6D992" />
                                        </g>
                                    </svg>
                                    :
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="wishlist pro">
                                            <path id="Vector" d="M6.24984 3.33399C3.71859 3.33399 1.6665 5.38607 1.6665 7.91732C1.6665 12.5007 7.08317 16.6673 9.99984 17.6365C12.9165 16.6673 18.3332 12.5007 18.3332 7.91732C18.3332 5.38607 16.2811 3.33399 13.7498 3.33399C12.1998 3.33399 10.829 4.10357 9.99984 5.28149C9.5772 4.67949 9.01574 4.18819 8.36298 3.84919C7.71021 3.51019 6.98538 3.33347 6.24984 3.33399Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                    </svg>
                                }
                            </div>
                            <Productslider thumbnail={productDetails?.thumbnail} images={productDetails?.images} />
                        </div>
                    </div>
                    <div className="productbox">
                        <h2>{productDetails?.name}</h2>
                        <p className='d-flex m-0'><img src="/Assets/img/Icons/circum_discount.svg" alt='' /> 20% Discount</p>
                        {/* <p className=' m-0'>{productDetails?.description}</p> */}
                        <div className="productboxproduct">
                            <div className="productbox12">
                                <h3>Rs. {productDetails?.price} <s>Rs {productDetails?.mrp}</s></h3>
                                <p className="m-0">Price incl. of all taxes</p>
                                <p>

                                    <Rating
                                        emptySymbol="fa-regular fa-star ilogostar"
                                        fullSymbol="fa-solid fa-star ilogostar"
                                        fractions={2}
                                        initialRating={productDetails?.averageRating ? productDetails?.averageRating : 4.5}
                                        readonly
                                    />
                                    {/* <i className="fa-solid fa-star ilogostar"></i>
                                    <i className="fa-solid fa-star ilogostar "></i>
                                    <i className="fa-solid fa-star ilogostar "></i>
                                    <i className="fa-solid fa-star ilogostar "></i>
                                    <i className="fa-solid fa-star ilogostar "></i> */}
                                </p>
                            </div>
                            <div className="productbox12">
                                <div className='qty-button'>
                                    <span className='a' onClick={() => { qty > 1 ? setQty(prev => prev - 1) : '' }}>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                    <span className='count'>{qty}</span>
                                    <span className='a' onClick={() => { setQty(prev => prev + 1) }}>
                                        <i className="fa-solid fa-plus"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="productitemscontainer pt-0 pb-5 border-0">
                            {productDetails?.isCart ?
                                <button className='cardbutton' id='addcard' onClick={() => setCartToggler(true)} disabled={loading} >
                                    Go to cart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5.34191 18.6833L2.6183 13.2361C0.956047 9.91156 3.37353 6 7.09044 6H16.9101C20.627 6 23.0445 9.91156 21.3822 13.2361L18.6586 18.6833C17.6423 20.716 15.5647 22 13.2921 22H10.7085C8.43584 22 6.35826 20.716 5.34191 18.6833Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M14 2L17 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 2L7 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M14 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                                :
                                <button className='cardbutton' id='addcard' onClick={() => addToCart(productDetails?._id)} disabled={loading} >
                                    Add to cart <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5.34191 18.6833L2.6183 13.2361C0.956047 9.91156 3.37353 6 7.09044 6H16.9101C20.627 6 23.0445 9.91156 21.3822 13.2361L18.6586 18.6833C17.6423 20.716 15.5647 22 13.2921 22H10.7085C8.43584 22 6.35826 20.716 5.34191 18.6833Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M14 2L17 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 2L7 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M10 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M14 13V15" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>}
                            <button className='cardbutton' id='buynow' onClick={() => buyNow(productDetails?._id)} disabled={loading}>Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17 18C17.5304 18 18.0391 18.2107 18.4142 18.5858C18.7893 18.9609 19 19.4696 19 20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22C16.4696 22 15.9609 21.7893 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20C15 18.89 15.89 18 17 18ZM1 2H4.27L5.21 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63L7.17 14.75C7.17 14.8163 7.19634 14.8799 7.24322 14.9268C7.29011 14.9737 7.3537 15 7.42 15H19V17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2ZM7 18C7.53043 18 8.03914 18.2107 8.41421 18.5858C8.78929 18.9609 9 19.4696 9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20C5 18.89 5.89 18 7 18ZM16 11L18.78 6H6.14L8.5 11H16Z" fill="black" />
                            </svg></button>
                        </div>

                        <div className="productitemscontainer">
                            <div className="accordion accordianbut" >
                                <div className="accordion">
                                    <div className="product-details-container">
                                        <button id='productshortbutton' className="product-details accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#ingredients" aria-expanded="false" aria-controls="ingredients">
                                            INGREDIENTS
                                        </button>
                                    </div>
                                    <div id="ingredients" className="accordion-collapse collapse bg-transparent m-0 mb-3" data-bs-parent="#ingredients">
                                        <div className="accordion-body shortbody">
                                            <div dangerouslySetInnerHTML={{ __html: productDetails?.ingredients }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="productitemscontainer">
                            <div className="accordion accordianbut" >
                                <div className="accordion">
                                    <div className="product-details-container">
                                        <button id='productshortbutton' className="product-details accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#indications" aria-expanded="false" aria-controls="indications">
                                            INDICATIONS
                                        </button>
                                    </div>
                                    <div id="indications" className="accordion-collapse collapse bg-transparent m-0 mb-3" data-bs-parent="#indications">
                                        <div className="accordion-body shortbody">
                                            <div dangerouslySetInnerHTML={{ __html: productDetails?.indications }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="productitemscontainer">
                            <div className="accordion accordianbut" >
                                <div className="accordion">
                                    <div className="product-details-container">
                                        <button id='productshortbutton' className="product-details accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#disclaimer" aria-expanded="false" aria-controls="disclaimer">
                                            DISCLAIMER
                                        </button>
                                    </div>
                                    <div id="disclaimer" className="accordion-collapse collapse bg-transparent m-0 mb-3" data-bs-parent="#disclaimer">
                                        <div className="accordion-body shortbody">
                                            <div dangerouslySetInnerHTML={{ __html: productDetails?.disclaimer }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="productitemscontainer">
                            <div className="accordion accordianbut" >
                                <div className="accordion">
                                    <div className="product-details-container">
                                        <button id='productshortbutton' className="product-details accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#whenToUse" aria-expanded="false" aria-controls="whenToUse">
                                            WHEN TO USE
                                        </button>
                                    </div>
                                    <div id="whenToUse" className="accordion-collapse collapse bg-transparent m-0 mb-3" data-bs-parent="#whenToUse">
                                        <div className="accordion-body shortbody">
                                            <div dangerouslySetInnerHTML={{ __html: productDetails?.whenToUse }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="productitemscontainer">
                            <div className="accordion accordianbut" >
                                <div className="accordion">
                                    <div className="product-details-container">
                                        <button id='productshortbutton' className="product-details accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#howToUse" aria-expanded="false" aria-controls="howToUse">
                                            How to use?
                                        </button>
                                    </div>
                                    <div id="howToUse" className="accordion-collapse collapse bg-transparent m-0 mb-3" data-bs-parent="#howToUse">
                                        <div className="accordion-body shortbody">
                                            <div dangerouslySetInnerHTML={{ __html: productDetails?.howToUse }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* REVIEWS */}
                        {/* <div className="productitemscontainer" id='review'>
                            <div className="accordion accordianbut" >
                                <div className="accordion">
                                    <div className="product-details-container" onClick={() => setShow2(true)}>
                                        <button className="product-details d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M17.7359 6.89649L12.7769 6.17579L10.5601 1.68165C10.4996 1.5586 10.4 1.45899 10.2769 1.39844C9.96833 1.2461 9.59333 1.37305 9.43903 1.68165L7.22223 6.17579L2.26325 6.89649C2.12653 6.91602 2.00153 6.98047 1.90583 7.07813C1.79013 7.19705 1.72637 7.35704 1.72857 7.52294C1.73077 7.68884 1.79874 7.84708 1.91755 7.9629L5.50544 11.4609L4.65778 16.4004C4.6379 16.5153 4.65062 16.6335 4.69449 16.7415C4.73835 16.8496 4.81161 16.9431 4.90596 17.0117C5.00031 17.0802 5.11198 17.1209 5.22829 17.1292C5.3446 17.1375 5.46091 17.113 5.56403 17.0586L9.99958 14.7266L14.4351 17.0586C14.5562 17.1231 14.6968 17.1445 14.8316 17.1211C15.1715 17.0625 15.4 16.7402 15.3414 16.4004L14.4937 11.4609L18.0816 7.9629C18.1793 7.86719 18.2437 7.74219 18.2633 7.60547C18.316 7.26368 18.0777 6.94727 17.7359 6.89649Z" fill="#101828" />
                                            </svg> {props?.reviews?.averageRating} Review({props?.reviews?.totalCount})
                                        </button>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <OtherProducts heading="Related Products" products={props?.relatedProducts} addToCart={addToCart} loading={loading} />
                <OtherProducts heading="Recently viewed Products" products={props?.recentProducts} addToCart={addToCart} loading={loading} />
            </div>
        </>
    )
}

export default Product
