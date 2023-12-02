"use client"

import React from 'react';
import Button from '../button/Button';
import Link from 'next/link';

function Products(props) {

    // SLICED 4 PRODUCTS
    const products1 = props?.list?.productList?.slice(0, 2);
    const products2 = props?.list?.productList?.slice(2, 4);

    return (
        <>

            <div className="sec8maincontainer">
                <div className="sec8container">
                    <div className="sec8box me-3">
                        <div className="sec8boxs row">
                            {products1?.map((elem, index) => {
                                return (
                                    <div className='col-md-6' key={index + 1}>
                                        <Link href={`/shop/${elem?.slug}`}>
                                            <div className="sec8box1">
                                                <div className="sec8box1Image">
                                                    <img src={elem?.thumbnail} width={100} alt="" />
                                                </div>
                                                <p>{elem?.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                            {/* <div className="sec8box1">
                                <div className="sec8box1Image">
                                    <img src='/Assets/img/Products/product1.jpg' width={100} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div>
                            <div className="sec8box1">
                                <div className="sec8box1Image">
                                    <img src='/Assets/img/Products/product2.jpg' width={100} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div> */}
                        </div>
                        <div className="sec8boxs row">
                            {products2?.map((elem, index) => {
                                return (
                                    <div className='col-md-6' key={index + 1}>
                                        <Link href={`/shop/${elem?.slug}`}>
                                            <div className="sec8box1">
                                                <div className="sec8box1Image">
                                                    <img src={elem?.thumbnail} width={100} alt="" />
                                                </div>
                                                <p>{elem?.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                            {/* <div className="sec8box1">
                                <div className="sec8box1Image">
                                    <img src='/Assets/img/Products/product1.jpg' width={100} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div>
                            <div className="sec8box1">
                                <div className="sec8box1Image">
                                    <img src='/Assets/img/Products/product2.jpg' width={100} alt="" />
                                </div>
                                <p>Product Name</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="sec8box ms-3">
                        <h2>"Not currently in need of
                            dermatological assistance?"</h2>
                        <p className='secboxp' >"But still desire access to products that are entirely safe and approved by dermatologists..."</p>

                        <div className="buttoncontainer">
                            <Button button="Shop Now" link='/shop' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Products;
