"use client"

import { useEffect, useState } from 'react';
import AddressList from './AddressList';
import EditAddress from './EditAddress';
import './Account.css';
import { getRequest } from '@/helpers';

const AccountAddress = (props) => {

    // const [addres, setAddress] = useState(false);
    const [editadd, setEditAdd] = useState(false);
    const [addadress, setAddAddress] = useState(false);
    // ORDERS LISTING STATE
    const [ordersList, setOrdersList] = useState([]);
    // ADDRESS DELETE STATUS
    const [deleteStatus, setDeleteStatus] = useState(false);
    // ACCOUNT/USER DETAILS STATE
    const [accountInfo, setAccountInfo] = useState({});
    // ACCOUNT/ADDRESS LIST TOGGLE STATE
    const [toggle, setToggle] = useState(true);
    // LIST OF ADDRESSES STATE
    const [addressList, setAddressList] = useState(props?.addressList);

    // ADDRESS TO BE EDITED STATE
    const [editable, setEditable] = useState();

    useEffect(() => {
        getRequest({ url: `api/user/shipping-address`, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    setAddressList(res?.data?.data);
                }
            })
            .catch(err => {
                if (err?.data?.msg) {
                    console.log(err?.data?.msg);
                } else {
                    console.log(err?.response?.data?.msg);
                }
            })
        getRequest({ url: `api/user/order`, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    setOrdersList(res?.data?.data);
                }
            })
            .catch(err => {
                if (err?.data?.msg) {
                    console.log(err?.data?.msg);
                } else {
                    console.log(err?.response?.data?.msg);
                }
            })
        if (props?.token?.value !== undefined && props?.token?.value !== "undefined") {
            getRequest({ url: `api/user/user-details`, token: props?.token?.value })
                .then(res => {
                    if (res?.data?.status) {
                        setAccountInfo(res?.data?.data);
                    }
                })
                .catch(err => {
                    if (err?.data?.msg) {
                        console.log(err?.data?.msg);
                    } else {
                        console.log(err?.response?.data?.errors);
                    };
                });
        }
    }, [editadd, addadress, deleteStatus]);

    // HANDLING EDIT/ADD TOGGLE
    const list = () => {
        setEditAdd(prev => !prev);
        setAddAddress(prev => !prev);
    };

    return (
        <>
            <div className="histroryAddContainer row">

                <div className="historyAddbox historyAddbox-left col-md-6 right-gradient-bdr">
                    <h2>Order History</h2>

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                        <li className="nav-item" role="presentation" id='historyorderbutton' >
                            <button className="nav-link active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Active</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Delivered</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">

                            <div className="accordion" id="accordionExample">

                                <div className="accordian-item-box">
                                    {
                                        ordersList?.activeOrders?.map((elem, index) => {
                                            return (
                                                <div className="accordion-item" key={index + 1}>
                                                    <h2 className="accordion-header">
                                                        <div className="" type="button" data-bs-toggle="collapse" data-bs-target={'#activeOrder' + (index + 1)}  >

                                                            <div className="ordersecdays">
                                                                <p className='textaline' id='textline' ><span>{new Date(elem?.generatedAt)?.toLocaleDateString()}</span></p>
                                                            </div>

                                                            <div className='orderhistoryproductinfo'>
                                                                <div className='orderhistoryproductinfoimg'>
                                                                    <img src={elem?.thumbnail} alt="" />
                                                                </div>
                                                                <div className="orderseccontent2">
                                                                    <h5 className='text-start'>Product Name : <span>{elem?.name}</span></h5>
                                                                    <h5 className='text-start'>Order no: <span>{elem?.orderId}</span></h5>
                                                                    <h5 className='text-start'>Quantity: <span>{elem?.quantity}</span></h5>
                                                                    <h5 className='text-start'>Amount: <span>₹ {elem?.amount}</span></h5>
                                                                </div>


                                                            </div>
                                                            {
                                                                elem?.paymentStatus === 'success' ?
                                                                    <h4>PAYMENT SCCESSFULL</h4>
                                                                    :
                                                                    <h4>PAYMENT PENDING</h4>
                                                            }
                                                        </div>
                                                    </h2>
                                                    <div id={'activeOrder' + (index + 1)} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <div className='orderaddressbox'>
                                                                <h6>Address</h6>
                                                                <p>#{elem?.address?.houseNo}, {elem?.address?.locatity}, {elem?.address?.area}, {elem?.address?.district}, {elem?.address?.state} - {elem?.address?.pincode}</p>
                                                                <h6>Courier</h6>
                                                                <div className='nameStatus'>
                                                                    <p>Name</p>
                                                                    <h6>Track order</h6>
                                                                </div>
                                                                <h6>Status</h6>
                                                                <p> <span>{elem?.orderStatus?.toUpperCase()}</span></p>
                                                                {/* <p> <span>12:05</span> <span>-</span> <span>Order is placed</span></p>
                                                                <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Transit</span></p>
                                                                <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Delivered</span></p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                    {/* <div className="accordion-item mb-3">
                                        <h2 className="accordion-header">
                                            <div className="" type="button" data-bs-toggle="collapse" data-bs-target="#activeOrder1"  >

                                                <div className="ordersecdays">
                                                    <p className='textaline' id='textline' ><span>Today</span></p>
                                                </div>

                                                <div className='orderhistoryproductinfo'>
                                                    <div className='orderhistoryproductinfoimg'>
                                                        <img src='/Assets/img/Orders/orderActiveimg.png' alt="" />
                                                    </div>
                                                    <div className="orderseccontent2">
                                                        <h5 className='text-start'>Product Name : <span>DFWF65464</span></h5>
                                                        <h5 className='text-start'>Order no: <span>DFWF65464</span></h5>
                                                        <h5 className='text-start'>Amount: <span>₹ 1599</span></h5>
                                                    </div>


                                                </div>
                                                <h4>ONLINE PAYMENT MODE PENDING</h4>
                                            </div>
                                        </h2>
                                        <div id="activeOrder1" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className='orderaddressbox'>
                                                    <h6>Address</h6>
                                                    <p>7890 Malleswaram West, Malleswaram, Bangalore, Karnataka, India-560089</p>
                                                    <h6>Courier</h6>
                                                    <div className='nameStatus'>
                                                        <p>Name</p>
                                                        <h6>Track order</h6>
                                                    </div>
                                                    <h6>Status</h6>
                                                    <p> <span>12:05</span> <span>-</span> <span>Order is placed</span></p>
                                                    <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Transit</span></p>
                                                    <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Delivered</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>

                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">

                            <div className="accordian-item-box">

                                {
                                    ordersList?.completeOrders?.map((elem, index) => {
                                        return (
                                            <div className="accordion-item" key={index + 1}>
                                                <h2 className="accordion-header">
                                                    <div className="" type="button" data-bs-toggle="collapse" data-bs-target={'#completeOrders' + (index + 1)}  >

                                                        <div className="ordersecdays">
                                                            <p className='textline2' > <span>Download Invice</span> </p>
                                                            <p className='textaline'><span>{new Date(elem?.generatedAt)?.toLocaleDateString()}</span></p>
                                                        </div>

                                                        <div className='orderhistoryproductinfo'>
                                                            <div className='orderhistoryproductinfoimg'>
                                                                <img src={elem?.thumbnail} alt="" />
                                                            </div>
                                                            <div className="orderseccontent2">
                                                                <h5 className='text-start'>Product Name : <span>{elem?.name}</span></h5>
                                                                <h5 className='text-start'>Amount: <span>₹ {elem?.amount}</span></h5>
                                                                <h5 className='text-start'>Quantity: <span>{elem?.quantity}</span></h5>
                                                                <h5 className='text-start'>Order no: <span>{elem?.orderId}</span></h5>
                                                            </div>


                                                        </div>
                                                        {/* <h4>ONLINE PAYMENT MODE PENDING</h4> */}
                                                    </div>
                                                </h2>
                                                <div id={'completeOrders' + (index + 1)} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <div className='orderaddressbox'>
                                                            <h6>Address</h6>
                                                            <p>#{elem?.address?.houseNo}, {elem?.address?.locatity}, {elem?.address?.area}, {elem?.address?.district}, {elem?.address?.state} - {elem?.address?.pincode}</p>
                                                            <h6>Courier</h6>
                                                            <div className='nameStatus'>
                                                                <p>Name</p>
                                                                <h6>Track order</h6>
                                                            </div>
                                                            <h6>Status</h6>
                                                            <p> <span>{elem?.orderStatus?.toUpperCase()}</span></p>
                                                            {/* <p> <span>12:05</span> <span>-</span> <span>Order is placed</span></p>
                                                            <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Transit</span></p>
                                                            <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Delivered</span></p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                {/* <div className="accordion mb-3" id="deliveredOrder">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <div className="" type="button" data-bs-toggle="collapse" data-bs-target="#deliveredOrder1"  >

                                                <div className="ordersecdays">
                                                    <p className='textline2' > <span>Download Invice</span> </p>
                                                    <p className='textaline'><span>12/08/23</span></p>
                                                </div>

                                                <div className='orderhistoryproductinfo'>
                                                    <div className='orderhistoryproductinfoimg'>
                                                        <img src='/Assets/img/Orders/orderActiveimg.png' alt="" />
                                                    </div>
                                                    <div className="orderseccontent2">
                                                        <h5 className='text-start'>Product Name : <span>DFWF65464</span></h5>
                                                        <h5 className='text-start'>Order no: <span>DFWF65464</span></h5>
                                                        <h5 className='text-start'>Amount: <span>₹ 1599</span></h5>
                                                    </div>
                                                </div>

                                                <h4>ONLINE PAYMENT MODE PENDING</h4>

                                            </div>
                                        </h2>
                                        <div id="deliveredOrder1" className="accordion-collapse collapse " data-bs-parent="#deliveredOrder">
                                            <div className="accordion-body">
                                                <div className='orderaddressbox'>
                                                    <h6>Address</h6>
                                                    <p>7890 Malleswaram West, Malleswaram, Bangalore, Karnataka, India-560089</p>
                                                    <h6>Courier</h6>
                                                    <div className='nameStatus'>
                                                        <p>Name</p>
                                                        <h6>Track order</h6>
                                                    </div>
                                                    <h6>Status</h6>
                                                    <p> <span>12:05</span> <span>-</span> <span>Order is placed</span></p>
                                                    <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Transit</span></p>
                                                    <p> <span className='pcolor'>12:05</span> <span>-</span> <span className='pcolor'>Order is Delivered</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                            </div>

                        </div>

                    </div>
                </div>

                <div className="historyAddbox historyAddbox-right col-md-6">
                    <h2>Account Info</h2>

                    {toggle ?
                        <>
                            <div className="address mt-5">
                                {/* <span>Name</span>
                                <p>{accountInfo?.name}</p>
                                <span>Email</span>
                                <p>{accountInfo?.email}</p>
                                <span>Age</span>
                                <p>{accountInfo?.age}</p>
                                <span>Gender</span>
                                <p>{accountInfo?.gender}</p> */}
                                <p>
                                    <span className='fw-400 fs-6'>Name: </span>
                                    <span className='fw-600 fs-6'>{accountInfo?.name}</span>
                                </p>
                                <p>
                                    <span className='fw-400 fs-6'>Email: </span>
                                    <span className='fw-600 fs-6'>{accountInfo?.email}</span>
                                </p>
                                <p>
                                    <span className='fw-400 fs-6'>Age: </span>
                                    <span className='fw-600 fs-6'>{accountInfo?.age}</span>
                                </p>
                                <p>
                                    <span className='fw-400 fs-6'>Gender: </span>
                                    <span className='fw-600 fs-6'>{accountInfo?.gender}</span>
                                </p>
                                <button onClick={()=>setToggle(false)}><span>Address</span> <img src='/Assets/img/Icons/icon.svg' alt="" /> </button>
                            </div>
                        </>
                        :
                        <>
                            {!editadd && <p className='a' onClick={()=>setToggle(true)}><i className="fa-solid fa-chevron-left"></i> Back to Account Info</p>}

                            {editadd && <p className='m-0 a' onClick={list}><i className="fa-solid fa-chevron-left"></i> Back</p>}
                            {

                                !editadd ? <AddressList toggle={setEditAdd} toggle2={setAddAddress} addressList={addressList} editable={[editable, setEditable]} deleteStatus={setDeleteStatus} token={props?.token} /> :

                                    !addadress ?
                                        <EditAddress heading="Edit my Address" toggle={setEditAdd} toggle2={setAddAddress} editable={editable} type={false} token={props?.token} />
                                        :
                                        <EditAddress heading="Add Address" toggle={setEditAdd} toggle2={setAddAddress} editable={editable} type={true} token={props?.token} />

                            }
                        </>
                    }

                </div>

            </div>

        </>
    );
};

export default AccountAddress;
