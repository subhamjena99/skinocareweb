"use client"

import React, { useEffect, useState } from 'react';
import './Checkoutpage.css';
import Link from 'next/link';
import Privcy from '../Legals/Privcy';
import { getRequest, noTokenGetRequest, postRequest } from '@/helpers';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Script from 'next/script';
import Cart from '../Cart';

const Checkoutpage = (props) => {

    // USING NAVIGATION HOOK
    const router = useRouter();

    // COMPONENT API LOADING STATE
    const [loading, setLoading] = useState(false);
    // COMPONENT RENRENDER STATE
    const [status, setStatus] = useState(false);
    // CHECKOUT & ADD ORDER CREDENTIALS STATE
    const [checkoutCreds, setCheckoutCreds] = useState({ checkoutType: 'cart' });
    // COUPON STATE
    const [coupon, setCoupon] = useState('');
    // COUPON DISCOUNT STATE
    const [couponDiscount, setCouponDiscount] = useState('');
    // DYNAMIC KEY & VALUES (PAYMENT & SHIPPING) METHOD STATE
    const [method, setMethod] = useState({});
    // SELECTED PAYMENT & SHIPPING METHOD STATE
    const [selectedMethod, setSelectedMethod] = useState({
        shippingMethod: 'free_shipping',
    });
    // DEFAULT ADDRESS STATE
    const [defaultAddress, setDefaultAddress] = useState('');
    // DEFAULT ADDRESS STATE
    const [productsList, setProductsList] = useState([]);
    // ADDRESS FORM DATA STATE
    const [address, setAddress] = useState({
        name: "",
        phone: "",
        alternativePhone: "",
        pincode: "",
        district: "",
        state: "",
        country: "",
        area: "",
        locatity: "",
        landmark: "",
        houseNo: "",
        isDefault: false
    });
    // CART TOGGLE STATE
    const [cartToggler, setCartToggler] = useState(false);

    useEffect(() => {
        getRequest({ url: `api/user/default-shipping-address`, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    setDefaultAddress(res?.data?.data);
                };
            })
            .catch(err => {
                console.log(err);
            })
        noTokenGetRequest(`api/web/settings/shipping_method`)
            .then(res => {
                if (res?.data?.status) {
                    setMethod(res?.data?.data);
                };
            })
            .catch(err => {
                console.log(err);
            })

        const checkoutMode = sessionStorage.getItem('checkout');
        const checkoutType = checkoutMode ? JSON.parse(checkoutMode) : checkoutCreds;
        setCheckoutCreds(checkoutType);
        sessionStorage.setItem('checkout', '');

        postRequest({ url: `api/user/billing`, token: props?.token?.value, cred: { ...checkoutType, ...selectedMethod } })
            .then(res => {
                if (res?.data?.status) {
                    setProductsList(res?.data?.data);
                };
            })
            .catch(err => {
                console.log(err);
                setProductsList([]);
                setCouponDiscount('');
                setCoupon('');
            })
    }, [status, selectedMethod, cartToggler]);

    // HANDLING CART TOGGLE
    const closebutton3 = () => {
        setCartToggler(false);
    };

    // HANDLING FORM DATA
    const handleData = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // HANDLING PAYMENT & SHIPPING METHOD
    const handleMethod = (e) => {
        const { value } = e.target;
        setSelectedMethod(prev => ({
            shippingMethod: value,
        }));
    };

    // HANDLING COUPON DATA
    const handleCoupon = (e) => {
        const { value } = e.target;
        setCoupon(value);
    };

    // HANDLING COUPON REMOVAL
    const removeCoupon = () => {
        setCoupon('');
        setCouponDiscount('');
    };

    // HANDLING ADD ADDRESS FORM
    const addAddress = (e) => {
        e.preventDefault();

        postRequest({ url: 'api/user/shipping-address', cred: address, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    toast.success(res.data?.msg)
                    setDefaultAddress(res?.data?.data);
                    setStatus(prev => !prev);
                };
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

    // HANDLING APPLY COUPON API
    const applyCoupon = (e) => {
        e.preventDefault();
        setLoading(true);

        const credentials = {
            totalAmount: productsList?.grandTotal,
            couponCode: coupon
        };

        postRequest({ url: 'api/user/apply-coupon', cred: credentials, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    toast.success(res.data?.msg)
                    setCouponDiscount(res?.data?.data);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                };
            })
            .catch(err => {
                if (props?.token?.value) {
                    err?.data?.msg ?
                        toast.error(err?.data?.msg)
                        :
                        toast.error(err?.response?.data?.msg)
                } else {
                    toast.error('Login First');
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
                // console.log(err?.data?.msg);
            })
    };

    // --------------------------------------------------------------------------------------------------------
    // INITIATE PAYMENT
    const initPayment = (data) => {
        setLoading(true);
        const options = {
            key: `${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}`,
            amount: data?.amount,
            currency: data?.currency,
            name: data?.name,
            description: data?.description,
            // image: '',
            order_id: data.id,
            handler: async (response) => {
                try {
                    await axios.post(
                        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/user/payment-verify`,
                        {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        },
                        {
                            headers: { 'Authorization': `${props?.token?.value}` },
                            withCredentials: true
                        }
                    ).then(res => {
                        console.log(res);
                        if (res.data.status) {
                            window.scrollTo(0, 0);
                            setStatus(prev => !prev);
                            router.push('/account', { scroll: false });
                            // toast.success(res?.data?.msg);
                            toast.success('Order Placed Successfully!');
                            setTimeout(() => {
                                setLoading(false);
                            }, 1000);
                        }
                    }).catch(err => {
                        console.log(err);
                        setTimeout(() => {
                            setLoading(false);
                        }, 1000);
                    })
                } catch (error) {
                    console.log(error);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                }
            },
            prefill: {
                name: data?.name,
                email: data?.email,
                contact: data?.mobile,
            },
            theme: {
                color: "#3399cc",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
            alert("Payment failed. Please try again. Contact support for help");
        });
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    // --------------------------------------------------------------------------------------------------------
    // HANDLE PAYMENT
    const handlePayment = async (id) => {
        setLoading(true);
        try {
            const credentials = {
                orderId: id,
            };
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}api/user/payment`,
                credentials,
                {
                    headers: { 'Authorization': `${props?.token?.value}` },
                    withCredentials: true
                }
            ).then(res => {
                // console.log(res.data);
                initPayment(res.data.data);
            }).catch(err => {
                console.log(err);
                postRequest({ url: 'api/user/payment/failed', cred: { orderId: id }, token: props?.token?.value })
                    .then(res => {
                        // if (res?.data?.status) {
                        //     toast.success(res?.data?.msg);
                        // };
                        setTimeout(() => {
                            setLoading(false);
                        }, 1000);
                    })
                    .catch(err => {
                        console.log(err);
                        setTimeout(() => {
                            setLoading(false);
                        }, 1000);
                    })
            })

        } catch (error) {
            console.log(error);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    // ADD ORDER API CALL
    const addOrder = () => {

        setLoading(true);
        const credentials = {
            ...checkoutCreds,
            ...selectedMethod,
            shippingAddressId: defaultAddress?._id,
            couponCode: coupon,
        };
        postRequest({ url: 'api/user/order', cred: credentials, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    setStatus(prev => !prev)
                    toast.success(res?.data?.msg);
                    handlePayment(res?.data?.data?._id);
                };
            })
            .catch(err => {
                if (props?.token?.value) {
                    if (err?.data?.msg) {
                        toast.error(err?.data?.msg);
                    } else if (err?.response?.data?.errors) {
                        toast.error(err?.response?.data?.errors);
                    } else {
                        toast.error(err?.response?.data?.msg);
                    }
                } else {
                    toast.error('Login First');
                }
                console.log(err);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
    };

    // ADD COD ORDER API CALL
    const addCodOrder = () => {

        setLoading(true);
        const credentials = {
            ...checkoutCreds,
            ...selectedMethod,
            shippingAddressId: defaultAddress?._id,
            couponCode: coupon,
        };
        postRequest({ url: 'api/user/order', cred: credentials, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    window.scrollTo(0, 0);
                    setStatus(prev => !prev)
                    toast.success(res?.data?.msg);
                    router.push('/account', { scroll: false });
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                };
            })
            .catch(err => {
                if (props?.token?.value) {
                    if (err?.data?.msg) {
                        toast.error(err?.data?.msg);
                    } else if (err?.response?.data?.errors) {
                        toast.error(err?.response?.data?.errors);
                    } else {
                        toast.error(err?.response?.data?.msg);
                    }
                } else {
                    toast.error('Login First');
                }
                console.log(err);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
    };

    return (
        <>

            {/* <!--================= Razorpay Script =================--> */}
            <Script id="razorpay-checkout-js" src="https://checkout.razorpay.com/v1/checkout.js" />

            <Toaster toastOptions={{ duration: 1000 }} />

            {cartToggler ? <Cart close={closebutton3} data={[]} /> : ""}

            <div className="chaeckoutpagecontainer">

                {/* <div className='checkoutpageboxs'>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="#!">Cart</Link></li>
                            <li className="breadcrumb-item"><Link href="#!">Information</Link></li>
                            <li className="breadcrumb-item breadcrum-active">Payment</li>
                        </ol>
                    </nav>
                </div> */}

                <div className="checkoutpageboxs">

                    <div className="checkoutpagebox">
                        <div className="checkoutpageboxheading">
                            <h3>Total {productsList?.products?.length ? productsList?.products?.length : 0} Products</h3>
                            <h3 className='a' onClick={() => setCartToggler(true)}>Edit</h3>
                        </div>
                        {
                            productsList?.products?.map((elem, index) => {
                                return (
                                    <div className="checkoutpagebase mb-2" key={index + 1}>
                                        <div className='d-flex align-items-center'>
                                            <span>
                                                <img src={elem?.thumbnail} className='me-3' width={50} height={50} alt="" />
                                            </span>
                                            <span>
                                                <p className='m-0'>{elem?.name}</p>
                                                <p className='m-0 sub-title'>Quantity: {elem?.quantity ? elem?.quantity : 1}</p>
                                            </span>
                                        </div>
                                        <p className='fw-600'>₹{elem?.price}  <s className="ms-2">₹{elem?.mrp}</s></p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="checkoutpagebox">
                        {(props?.token?.value !== undefined && props?.token?.value !== "undefined") ? '' : <div className="checkboxsigninbutton">
                            <p>Don`t Have an account? <Link href="/signin">Log in</Link></p>

                        </div>}

                        <div className="checkoutform">
                            <div className="accordion accordianbut accordianbut127">
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1234567" aria-expanded="false" aria-controls="collapseTwo">
                                            Shipping Address
                                        </button>
                                    </h2>
                                    <div id="collapseTwo1234567" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">
                                            {!defaultAddress?.name ?
                                                <form onSubmit={addAddress}>
                                                    <div className="row g-3">
                                                        <div className="col-md-12">
                                                            <label htmlFor="name" className="form-label">Name *</label>
                                                            <input type='text' placeholder='Enter' id="name" className="form-control" name='name' onChange={handleData} value={address?.name} required />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="phone" className="form-label">Phone Number *</label>
                                                            <input type='tel' placeholder='Enter' id="phone" className="form-control" name='phone' onChange={handleData} value={address?.phone} required />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="alternativePhone" className="form-label">Alternative Phone Number</label>
                                                            <input type='tel' placeholder='Enter' id="alternativePhone" className="form-control" name='alternativePhone' onChange={handleData} value={address?.alternativePhone} />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="pincode" className="form-label">Pincode *</label>
                                                            <input type='number' placeholder='Enter' id="pincode" className="form-control" name='pincode' onChange={handleData} value={address?.pincode} required />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="state" className="form-label">State *</label>
                                                            <input type='text' placeholder='Enter' id="state" className="form-control" name='state' onChange={handleData} value={address?.state} required />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="district" className="form-label">District *</label>
                                                            <input type='text' placeholder='Enter' id="district" className="form-control" name='district' onChange={handleData} value={address?.district} required />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="area" className="form-label">Area *</label>
                                                            <input type='text' placeholder='Enter' id="area" className="form-control" name='area' onChange={handleData} value={address?.area} required />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="street" className="form-label">Street name/Number *</label>
                                                            <input type='text' placeholder='Enter' id="street" className="form-control" name='locatity' onChange={handleData} value={address?.locatity} required />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="doorNo" className="form-label">Door no *</label>
                                                            <input type='text' placeholder='Enter' id="doorNo" className="form-control" name='houseNo' onChange={handleData} value={address?.houseNo} required />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <label htmlFor="landmark" className="form-label">Landmark *</label>
                                                            <input type='text' placeholder='Enter' id="landmark" className="form-control" name='landmark' onChange={handleData} value={address?.landmark} required />
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="gridCheck" name='isDefault' onChange={(e) => {
                                                                    setAddress(prev => ({
                                                                        ...prev,
                                                                        isDefault: e.target.checked,
                                                                    }))
                                                                }} checked={address?.isDefault} />
                                                                <label className="form-check-label" htmlFor="gridCheck">
                                                                    Set as default address
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="button">
                                                                <button type='submit'>Use This Address</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </form>
                                                :
                                                <div className="addadresscontainer">
                                                    <div className="address">

                                                        <span>Name</span>
                                                        <p>{defaultAddress?.name}</p>

                                                        <span>Phone Number</span>
                                                        <p>{defaultAddress?.phone}</p>

                                                        <span>Address</span>
                                                        <p>#{defaultAddress?.houseNo}, {defaultAddress?.locatity}, {defaultAddress?.area}, {defaultAddress?.district}, {defaultAddress?.state} - {defaultAddress?.pincode}</p>

                                                        <button onClick={() => router.push('/account', { scroll: false })}><span>Edit Address</span> <img src='/Assets/img/Icons/icon.svg' alt="" /> </button>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="checkoutform">
                            <div className="accordion accordianbut accordianbut127">
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123456712" aria-expanded="false" aria-controls="collapseTwo123456712">
                                            Shipping Method
                                        </button>
                                    </h2>
                                    <div id="collapseTwo123456712" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <div className="paymentMethod">
                                                <div className="checkboxs">
                                                    <div className='check'>
                                                        <input type="radio" className='form-check-input m-0' name='shippingMethod' id='free-shipping' value="free_shipping" onChange={handleMethod} checked={selectedMethod?.shippingMethod === 'free_shipping' ? true : false} />

                                                    </div>
                                                    <div className="para">
                                                        <label className='fs-6' htmlFor='free-shipping'>
                                                            <h6>Free Shipping (Cash on Delivery)</h6>
                                                            <p>This shipping option is eligible for Cash on Delivery.</p>
                                                        </label>

                                                    </div>
                                                </div>

                                                <div className="free">
                                                    <p>{method?.free_shipping === 0 ? 'Free' : `₹${method?.standard}`}</p>
                                                </div>
                                            </div>

                                            <div className="paymentMethod">
                                                <div className="checkboxs">
                                                    <div className='check' >
                                                        <input type="radio" className='form-check-input m-0' name='shippingMethod' id='standard-shipping' value="standard" onChange={handleMethod} checked={selectedMethod?.shippingMethod === 'standard' ? true : false} />
                                                    </div>
                                                    <div className="para">
                                                        <label className='fs-6' htmlFor='standard-shipping'>
                                                            <h6>Standard</h6>
                                                        </label>

                                                    </div>
                                                </div>

                                                <div className="free">
                                                    <p>{method?.standard === 0 ? 'Free' : `₹${method?.standard}`}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="checkoutform">
                            <div className="accordion accordianbut accordianbut127">
                                <div className="accordion  " id='accordianclass2'>
                                    <h2 className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button collapsed  accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo123456709" aria-expanded="false" aria-controls="collapseTwo123456709">
                                            Payment Method
                                        </button>
                                    </h2>
                                    <div id="collapseTwo123456709" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            <div className="paymentMethod">
                                                <div className="checkboxs">
                                                    <div className='check' >
                                                        <input type="radio" id='cod' className='form-check-input m-0' name='paymentMethod' value="free_shipping" onChange={handleMethod} checked={selectedMethod?.shippingMethod === 'free_shipping' ? true : false} />

                                                    </div>
                                                    <div className="para">
                                                        <label className='fs-6 mb-2' htmlFor='cod'>Cash on Delivery (COD)</label>

                                                    </div>
                                                </div>

                                                {/* <div className="free">
                                                    <p>₹{method?.free_shipping === 0 ? 'Free' : method?.free_shipping}</p>
                                                </div> */}
                                            </div>

                                            <div className="paymentMethod">
                                                <div className="checkboxs">
                                                    <div className='check' >
                                                        <input type="radio" id='razor-pay' className='form-check-input m-0' name='paymentMethod' value="standard" onChange={handleMethod} checked={selectedMethod?.shippingMethod === 'standard' ? true : false} />

                                                    </div>
                                                    <div className="para">

                                                        <label className='fs-6 mb-2' htmlFor='razor-pay'>PhonePe Secure (UPI, Cards, Wallets, NetBanking)</label>

                                                    </div>
                                                </div>

                                                {/* <div className="free">
                                                    <p>₹{method?.standard === 0 ? 'Free' : method?.standard}</p>
                                                </div> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="checkoutform border-bottom-0 p-0">

                            <h4 className='fw-600'>Order summary</h4>

                            <div className="checkoutpagebase border-bottom-dashed-2 my-0">
                                <p className='fw-400'>Sub Total</p>
                                <p className='fw-600'>₹{productsList?.subTotal}</p>
                            </div>
                            {couponDiscount?.discountAmount && <div className="checkoutpagebase border-bottom-dashed-2 my-0">
                                <p className='fw-400'>Coupon Discount</p>
                                <p className='fw-600 delivery-amount'>₹{couponDiscount?.discountAmount}</p>
                            </div>}
                            <div className="checkoutpagebase border-bottom-dashed-2 my-0">
                                <p className='fw-400'>Shipping fee</p>
                                {/* <p className='fw-600 delivery-amount'>₹{productsList?.shippingCost}</p> */}
                                <p className='fw-600 delivery-amount'>₹{0}</p>
                            </div>
                            <div className="checkoutpagebase border-bottom-dashed-2 my-0">
                                <p className='fw-400'>Shipping Discount</p>
                                <p className='fw-600 delivery-amount'>- ₹{productsList?.gstCost}</p>
                            </div>
                        </div>

                        <div className="checkoutform1 p-0">

                            <div className="checkoutpagebase mt-0 pt-4">
                                <p className='fw-600'>Total Price</p>
                                <p className='fw-600'>₹{couponDiscount?.discountAmount ? Number((productsList?.grandTotal) - (couponDiscount?.discountAmount))?.toFixed(2) : productsList?.grandTotal}</p>
                            </div>
                            {/* <div className="checkoutpagebase weight mt-3">
                                    <p>Total weight</p>
                                    <p>800gm  </p>
                                </div> */}
                        </div>

                        {productsList?.grandTotal && <div className="checkoutform12">

                            <p className='mb-2'>Coupon code</p>
                            <form onSubmit={applyCoupon}>
                                <div className="applycupan">
                                    <input type="text" placeholder='Enter here' name='cupon' onChange={handleCoupon} value={coupon} required />
                                    {couponDiscount?.discountAmount ?
                                        <button disabled={loading} onClick={removeCoupon}><span>Remove</span></button>
                                        :
                                        <button type='submit' className='ms-2' disabled={loading}><span>Apply</span></button>
                                    }
                                </div>
                            </form>
                            <p className='coupon1'>You can only use one discount code per order</p>

                        </div>}

                        <div className="checkoutform123">
                            {
                                selectedMethod?.shippingMethod === 'free_shipping' ?
                                    <button onClick={() => addCodOrder()} disabled={loading}>Place Order</button>
                                    :
                                    <button onClick={() => addOrder()} disabled={loading}>Proceed to pay</button>
                            }

                        </div>
                    </div>
                </div>

            </div>

            <Privcy />

        </>
    );
};

export default Checkoutpage;
