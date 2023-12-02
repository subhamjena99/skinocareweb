import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { getRequest, postRequest } from '@/helpers';
import Cookies from 'js-cookie';
import './Wishlist.css';
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from '@/Context/CartContext';

const Wishlist = ({ close, cartData, action = () => { } }) => {

    // FETCHING TOKEN FROM COOKIE
    const token = Cookies.get('skinocare-auth');

    // ACCESSING CONTEXT API FOR WISHLIST
    const [data, setData] = useContext(CartContext);

    // LOADING STATE
    const [loading, setLoading] = useState(false);

    // WISHLIST DATA STATE
    const [wishList, setWishList] = useState(cartData);

    useEffect(() => {
        getRequest({ url: `api/user/cart`, token })
            .then(res => {
                if (res?.data?.status) {
                    window.scrollTo(0, 0)
                    setWishList(res?.data?.data);
                };
            })
            .catch(err => {
                console.log(err);
            });
    }, [loading]);

    // REMOVE FROM WISHLIST API CALL
    const remove = (id) => {
        setLoading(true);
        postRequest({ url: 'api/user/cart/delete', cred: { cartId: id }, token })
            .then(res => {
                if (res.data.status) {
                    setData(prev => prev - 1);
                    setLoading(false);
                    action(prev => !prev)
                    toast.success(res.data?.msg)
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
            })
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />
            <div className="productsidebarmaincontainer">
                <div className="producsidbarboxs">
                    <div className="productsidbarbox spec-container">
                        <div className="closebutton align-items-center">
                            <h2 className='m-0'>Wishlist</h2>
                            <span className='a'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={close}>
                                    <path d="M22.8748 7.13754C22.7591 7.02166 22.6218 6.92972 22.4706 6.86699C22.3194 6.80427 22.1572 6.77198 21.9935 6.77198C21.8298 6.77198 21.6677 6.80427 21.5165 6.86699C21.3653 6.92972 21.2279 7.02166 21.1123 7.13754L14.9998 13.2375L8.88729 7.12504C8.77156 7.00931 8.63418 6.91751 8.48297 6.85488C8.33177 6.79225 8.1697 6.76001 8.00604 6.76001C7.84238 6.76001 7.68032 6.79225 7.52911 6.85488C7.37791 6.91751 7.24052 7.00931 7.12479 7.12504C7.00906 7.24076 6.91726 7.37815 6.85463 7.52936C6.792 7.68056 6.75977 7.84262 6.75977 8.00629C6.75977 8.16995 6.792 8.33201 6.85463 8.48321C6.91726 8.63442 7.00906 8.77181 7.12479 8.88754L13.2373 15L7.12479 21.1125C7.00906 21.2283 6.91726 21.3656 6.85463 21.5169C6.792 21.6681 6.75977 21.8301 6.75977 21.9938C6.75977 22.1574 6.792 22.3195 6.85463 22.4707C6.91726 22.6219 7.00906 22.7593 7.12479 22.875C7.24052 22.9908 7.37791 23.0826 7.52911 23.1452C7.68032 23.2078 7.84238 23.2401 8.00604 23.2401C8.1697 23.2401 8.33177 23.2078 8.48297 23.1452C8.63418 23.0826 8.77156 22.9908 8.88729 22.875L14.9998 16.7625L21.1123 22.875C21.228 22.9908 21.3654 23.0826 21.5166 23.1452C21.6678 23.2078 21.8299 23.2401 21.9935 23.2401C22.1572 23.2401 22.3193 23.2078 22.4705 23.1452C22.6217 23.0826 22.7591 22.9908 22.8748 22.875C22.9905 22.7593 23.0823 22.6219 23.1449 22.4707C23.2076 22.3195 23.2398 22.1574 23.2398 21.9938C23.2398 21.8301 23.2076 21.6681 23.1449 21.5169C23.0823 21.3656 22.9905 21.2283 22.8748 21.1125L16.7623 15L22.8748 8.88754C23.3498 8.41254 23.3498 7.61254 22.8748 7.13754Z" fill="black" />
                                </svg>
                            </span>
                        </div>

                        {
                            // wishList?.length ?
                            //     <div className="cartmaincontainer">
                            //         <div className="cartboxs1 w-100 container">

                            //             {
                            //                 wishList?.map((elem, index) => {
                            //                     return (
                            //                         <div className="cardbox1" key={index + 1}>
                            //                             <div className="cartimgbox">
                            //                                 {/* <Image src={elem?.thumbnail} width={150} height={150} alt="" /> */}
                            //                                 <img src={elem?.thumbnail} alt="" />
                            //                             </div>
                            //                             <div className="cartcontentbox">
                            //                                 <div className="cartheding">
                            //                                     <Link href={'/shop/' + elem?.slug} onClick={close}>
                            //                                         <h3>{elem?.name}</h3>
                            //                                     </Link>
                            //                                     <p className='ratingsec'> <i className="fa-solid fa-star"></i>  {elem?.averageRating}</p>
                            //                                 </div>
                            //                                 <div className="cartheding1">
                            //                                     <p>{elem?.description}</p>
                            //                                     <h2>Rs. {elem?.price} <span><s>Rs. {elem?.mrp}</s></span></h2>
                            //                                 </div>
                            //                                 <div className="cartheding">

                            //                                     {!elem?.isStock &&
                            //                                         <span className='text-danger fw-600'>Out of Stock</span>
                            //                                     }

                            //                                     <div className="cartdeletebox a" onClick={() => remove(elem?.cardId)}>
                            //                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            //                                             <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="black" />
                            //                                         </svg>
                            //                                     </div>
                            //                                 </div>
                            //                             </div>
                            //                         </div>
                            //                     )
                            //                 })
                            //             }
                            //         </div>
                            //     </div>
                            //     :
                                <div className="text-center no-product-container">
                                    <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fillRule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fillRule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path></g></g></svg>
                                    <h5 className='text-secondary'>
                                        No Product Added To Wishlist
                                    </h5>
                                </div>
                        }
                    </div>
                </div>

            </div>




        </>
    );
};

export default Wishlist;
