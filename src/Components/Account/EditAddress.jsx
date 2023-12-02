import { useState } from 'react';
import './Account.css';
import toast, { Toaster } from 'react-hot-toast';
import { postRequest, request } from '@/helpers';

const EditAddress = ({ heading, editable, type, toggle, toggle2, token }) => {

    // LOADING STATE
    const [loading, setLoading]= useState(false);

    // HANDLING EDIT/ADD TOGGLE
    const addressList = () => {
        toggle(prev => !prev);
        toggle2(prev => !prev);
    };

    // FORM DATA STATE
    const [address, setAddress] = useState(editable?.name ? {...editable} : {
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

    // HANDLING FORM DATA
    const handleData = (e) => {
        const { name, value } = e.target;
        setAddress(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // HANDLING ADD ADDRESS FORM
    const updateAddress = (e) => {
        setLoading(true);
        e.preventDefault();
        if (editable?.name !== 'undefined' && editable?.name !== undefined) {
            const credentials = {
                shippingAddressId: address?._id,
                name: address?.name,
                phone: address?.phone,
                alternativePhone: address?.alternativePhone,
                pincode: address?.pincode,
                district: address?.district,
                state: address?.state,
                country: address?.country,
                area: address?.area,
                locatity: address?.locatity,
                landmark: address?.landmark,
                houseNo: address?.houseNo,
                isDefault: address?.isDefault,
            };

            request({method: 'put', url: 'api/user/shipping-address', cred: credentials, token: token?.value})
            .then(res => {
                if (res?.data?.status) {
                    toast.success(res.data?.msg);
                    addressList();
                };
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch(err => {
                if(err?.data?.msg){
                    toast.error(err?.data?.msg);
                }else if(err?.response?.data?.errors){
                    toast.error(err?.response?.data?.errors);
                }else{
                    toast.error(err?.response?.data?.msg);
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
        } else {
            postRequest({ url: 'api/user/shipping-address', cred: address, token: token?.value })
                .then(res => {
                    if (res?.data?.status) {
                        toast.success(res.data?.msg);
                        addressList();
                    };
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                })
                .catch(err => {
                    if(err?.data?.msg){
                        toast.error(err?.data?.msg);
                    }else if(err?.response?.data?.errors){
                        toast.error(err?.response?.data?.errors);
                    }else{
                        toast.error(err?.response?.data?.msg);
                    }
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                })
        };
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 1000 }} />

            <div className="changeaddrersscontainer">
                <h3>{heading}</h3>
                <p>Complete address help you get your order faster</p>
                <form onSubmit={updateAddress}>

                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Enter Your Name' name='name' onChange={handleData} value={address?.name} required />
                    </div>
                    <div className="input">
                        <label htmlFor="number">Phone Number</label>
                        <input type="tel" id='number' placeholder='Enter Your Number' name='phone' onChange={handleData} value={address?.phone} required />
                    </div>
                    <div className="input">
                        <label htmlFor="anumber">Alternative Phone Number</label>
                        <input type="tel" id='anumber' placeholder='Enter Your Number' name='alternativePhone' onChange={handleData} value={address?.alternativePhone} />
                    </div>
                    {/* <div className="pincode"> */}
                    <div className="input">
                        <label htmlFor="pin">Pincode</label>
                        <input type="number" id='pin' placeholder='Enter Pincode' name='pincode' onChange={handleData} value={address?.pincode} required />
                    </div>
                    {/* <button>Find my Pincode</button> */}
                    {/* </div> */}

                    <div className="input">
                        <label htmlFor="state">State</label>
                        <input type="text" id='state' placeholder='Enter State' name='state' onChange={handleData} value={address?.state} required />
                    </div>
                    <div className="input">
                        <label htmlFor="District">District</label>
                        <input type="text" id='District' placeholder='Enter District' name='district' onChange={handleData} value={address?.district} required />
                    </div>
                    <div className="input">
                        <label htmlFor="area">Area</label>
                        <input type="text" id='area' placeholder='Enter Area' name='area' onChange={handleData} value={address?.area} required />
                    </div>
                    <div className="input">
                        <label htmlFor="Street-number-name">Street number/name</label>
                        <input type="text" id='Street-number-name' placeholder='Enter Street number/name' name='locatity' onChange={handleData} value={address?.locatity} required />
                    </div>
                    <div className="input">
                        <label htmlFor="Door-number">Door number</label>
                        <input type="text" id='Door-number' placeholder='Enter Door number' name='houseNo' onChange={handleData} value={address?.houseNo} required />
                    </div>
                    <div className="input">
                        <label htmlFor="Landmark">Landmark</label>
                        <input type="text" id='Landmark' placeholder='Enter Landmark' name='landmark' onChange={handleData} value={address?.landmark} required />
                    </div>

                    <div className="togalbar">

                        <h3>Set as default address</h3>
                        <label className="switch">
                            <input type="checkbox" name='isDefault' onChange={(e) => {
                                setAddress(prev => ({
                                    ...prev,
                                    isDefault: e.target.checked,
                                }))
                            }} checked={address?.isDefault} />
                            <span className="slider round"></span>
                        </label>

                    </div>

                    <div className="button">

                        <button type='submit' disabled={loading}>Use This Address</button>
                    </div>



                </form>


            </div>
        </>
    );
};

export default EditAddress;
