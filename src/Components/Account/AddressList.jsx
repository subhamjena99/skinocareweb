import toast, { Toaster } from 'react-hot-toast';
import './Account.css';
import { postRequest } from '@/helpers';
import { useState } from 'react';

const AddressList = (props) => {

    // LOADING STATE
    const [loading, setLoading]= useState(false);
    // ADDRESS TO BE EDITED STATE
    const [editable, setEditable] = props?.editable;

    // HANDLING EDIT/ADD TOGGLE
    const adddata = (address) => {
        props?.toggle(true);
        props?.toggle2(true);
        setEditable(address);
    };

    // HANDLING ADD ADDRESS FORM
    const deleteAddress = (id) => {
        setLoading(true);
        postRequest({ url: 'api/user/shipping-address/delete', cred: { shippingAddressId: id }, token: props?.token?.value })
            .then(res => {
                if (res?.data?.status) {
                    toast.success(res.data?.msg);
                    props?.deleteStatus(prev => !prev);
                };
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch(err => {
                if (err?.data?.msg) {
                    toast.error(err?.data?.msg);
                } else {
                    toast.error(err?.response?.data?.msg);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />

            <div className="accordian-item-box">
                {!props?.addressList.length && <div className="address my-5">

                    <button onClick={adddata}   ><span>Add Address</span> <img src='/Assets/img/Icons/icon.svg' alt="" /> </button>

                </div>}

                {props?.addressList?.map((elem, index) => {
                    return (
                        <div className="address mb-5" key={index + 1}>

                            <span>Name</span>
                            <p>{elem?.name}</p>

                            <span>Phone Number</span>
                            <p>{elem?.phone}</p>

                            <span>Address</span>
                            <p>#{elem?.houseNo}, {elem?.locatity}, {elem?.area}, {elem?.district}, {elem?.state} - {elem?.pincode}</p>

                            <div className="button1">
                                <button onClick={() => adddata(elem)} disabled={loading}><span>Edit</span> <img src='/Assets/img/Icons/edit.svg' alt="" /> </button>
                                <button id='delete' onClick={() => deleteAddress(elem?._id)} disabled={loading}><span>Delete</span> <img src='/Assets/img/Icons/delete.svg' alt="" /></button>
                            </div>

                            <button onClick={adddata} disabled={loading}><span>Add Address</span> <img src='/Assets/img/Icons/icon.svg' alt="" /> </button>

                        </div>
                    )
                })}

            </div>


            {/* <div className="address">
                <span>Name</span>
                <p>Siddartha J</p>
                <span>Phone Number</span>
                <p>98479 69854</p>
                <span>Address</span>
                <p>#23, Brigade Road Koramangala, Bangalore - 560034</p>
                <div className="button1">
                    <button onClick={adddata} ><span>Edit</span> <img src='/Assets/img/Icons/edit.svg' alt="" /> </button>
                    <button id='delete'><span>Delete</span> <img src='/Assets/img/Icons/delete.svg' alt="" /></button>
                </div>
                <button onClick={adddata}   ><span>Add Address</span> <img src='/Assets/img/Icons/icon.svg' alt="" /> </button>
            </div> */}
        </>
    );
};

export default AddressList;
