"use client"

import Mobilefiltersidebar from '@/Components/Shop/Mobilefiltersidebar';
import { useEffect, useState } from 'react';
import { Slider, Pagination, ConfigProvider } from 'antd';
import ProductCard from './ProductCard/ProductCard';
import { noTokenPostRequest } from '@/helpers';
import Cart from '../Cart';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchParams } from 'next/navigation';
import './Product.css';

const ProductList = (props) => {

    // USING SEARCH PARAMETERS HOOK
    const searchParams = useSearchParams();
    // GETTING SEARCHED PARAMETER
    const searchText = searchParams.get('search');

    // FILTERS STATE
    const [filters, setFilters] = useState({
        concern: 'Shop by Concern',
        category: 'Shop by Category',
        product: 'Shop by Product',
        sort: '',
        price: '',
        offers: [],
    });

    // FILTERATION CREDENTIALS STATE
    const [credentials, setCredentials] = useState({
        concern: '',
        category: '',
        product: '',
        sort: '',
        price: '',
        offers: [],
    });
    // DEBOUNCING FILTER CREDENTIALS USING CUSTOM DEBOUNCE HOOK
    const filteration = useDebounce(credentials);

    useEffect(() => {
        productsList(1);
    }, [filteration, searchText]);

    // FILTER SHOW/HIDE STATE
    const [show, setShow] = useState(false);
    const [cartToggler, setCartToggler] = useState(false);

    // HANDLING FILTER TOGGLE
    const closetab = () => {
        setShow(false);
    };
    const toggleCart = () => {
        setCartToggler(false);
    };

    // PRODUCTS DATA STATE
    const [products, setProducts] = useState(props?.data?.productList);

    // PAGINATION PREV/NEXT
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a><i className="fa-solid fa-arrow-left-long"></i> Previous</a>;
        }
        if (type === 'next') {
            return <a>Next <i className="fa-solid fa-arrow-right-long"></i></a>;
        }
        return originalElement;
    };

    // HANDLING PAGINATION
    const handlePageination = (value) => {
        productsList(value);
    };

    // HANDLING FILTERS
    const handleFilter = (e) => {
        const { name, value, placeholder } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: placeholder,
        }));
        setCredentials(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // HANDLING SORTING
    const handleSort = (e) => {
        const { value, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            sort: value,
        }));
        setCredentials(prev => ({
            ...prev,
            sort: value,
        }));
    };

    // RESETTING SORT FILTER
    const resetSort = () => {
        setFilters(prev => ({
            ...prev,
            sort: '',
        }));
        setCredentials(prev => ({
            ...prev,
            sort: '',
        }));
    };

    // HANDLING PRICE FILTER
    const handlePrice = (e) => {
        const { value, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            price: value,
        }));
        setCredentials(prev => ({
            ...prev,
            price: value,
        }));

        // const index = (filters?.price)?.indexOf(value);
        // if (checked) {
        //     setFilters(prev => ({
        //         ...prev,
        //         price: [...filters?.price, value],
        //     }));
        //     setCredentials(prev => ({
        //         ...prev,
        //         price: [...filters?.price, value],
        //     }));
        // } else {
        //     ((filters?.price)?.splice(index, 1));
        //     ((credentials?.price)?.splice(index, 1));
        //     setFilters(prev => ({
        //         ...prev,
        //     }));
        //     setCredentials(prev => ({
        //         ...prev,
        //     }));
        // }
    };

    // RESETTING PRICE FILTER
    const resetPrice = () => {
        setFilters(prev => ({
            ...prev,
            price: '',
        }));
        setCredentials(prev => ({
            ...prev,
            price: '',
        }));
    };

    // HANDLING OFFER FILTER
    const handleOffer = (value) => {
        setFilters(prev => ({
            ...prev,
            offers: value
        }));

        setCredentials(prev => ({
            ...prev,
            offers: value,
        }));
    };

    // API CALL
    const productsList = (page) => {

        const creds = searchText ? { pageNumber: page, searchValue: searchText, ...credentials, } : { pageNumber: page, ...credentials };

        noTokenPostRequest({ url: 'api/web/products', cred: creds })
            .then(res => {
                if (res?.data?.status) {
                    window.scrollTo(0, 0)
                    setProducts(res?.data?.data);
                };
            })
            .catch(err => {
                console.log(err?.data);
            });

    };

    return (
        <>
            {show ?
                <Mobilefiltersidebar
                    close={closetab}
                    filtersTitle={props?.filters}
                    filterCredentials={[credentials, setCredentials]}
                    filtersLabel={[filters, setFilters]}
                    filtersHandler={handleFilter}
                    sortingHandler={handleSort}
                    resetSort={resetSort}
                    priceHandler={handlePrice}
                    resetPrice={resetPrice}
                    offerHandler={handleOffer}
                />
                : ""}

            {cartToggler ? <Cart close={toggleCart} /> : ""}

            <div className="shoppagecontainer">
                <div className="shoppageboxs container">

                    <div className="shoppagebox1">

                        <div className="shoppagecatagory mb-5">

                            <div className="accordion accordianbut accordianbut12" >
                                <div className="accordion  " id='accordianclass'>
                                    <div className="accordion" id='bordercolor123'>
                                        <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo12345" aria-expanded="false" aria-controls="collapseTwo">
                                            {filters?.concern}
                                        </button>
                                    </div>
                                    <div id="collapseTwo12345" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">

                                            {props?.filters?.concern?.map((elem, index) => {
                                                return (
                                                    <div className="input-container" key={index + 1}>
                                                        <div className="form-check p-0">
                                                            <input className="form-check-input" name="concern" type="radio" value={elem?._id} placeholder={elem?.name} id={"concern" + index + 1} onChange={handleFilter} hidden />
                                                            <label className="form-check-label a" htmlFor={"concern" + index + 1}>
                                                                {elem?.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion accordianbut accordianbut12" >
                                <div className="accordion  " id='accordianclass'>
                                    <div className="accordion">
                                        <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort2" aria-expanded="false" aria-controls="collapseTwo">
                                            {filters?.category}
                                        </button>
                                    </div>
                                    <div id="collapseTwosort2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">
                                            {props?.filters?.categories?.map((elem, index) => {
                                                return (
                                                    <div className="input-container" key={index + 1}>
                                                        <div className="form-check p-0">
                                                            <input className="form-check-input" name="category" type="radio" value={elem?._id} placeholder={elem?.name} id={"category" + index + 1} onChange={handleFilter} hidden />
                                                            <label className="form-check-label a" htmlFor={"category" + index + 1}>
                                                                {elem?.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="accordion accordianbut accordianbut12" >
                                <div className="accordion  " id='accordianclass'>
                                    <div className="accordion">
                                        <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort3" aria-expanded="false" aria-controls="collapseTwo">
                                            {filters?.product}
                                        </button>
                                    </div>
                                    <div id="collapseTwosort3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body shortbody">
                                            {props?.filters?.productType?.map((elem, index) => {
                                                return (
                                                    <div className="input-container" key={index + 1}>
                                                        <div className="form-check p-0">
                                                            <input className="form-check-input" name="product" type="radio" value={elem?._id} placeholder={elem?.name} id={"product" + index + 1} onChange={handleFilter} hidden />
                                                            <label className="form-check-label a" htmlFor={"product" + index + 1}>
                                                                {elem?.name}
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="accordion accordianbut accordianbut12" >
                                <div className="accordion  " id='accordianclass'>
                                    <div className="accordion m-0" id='bordercolor'>
                                        <button id='productshortbutton' className="collapsed accordianbut text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwosort4" aria-expanded="false" aria-controls="collapseTwo" onClick={() => {
                                            setFilters({
                                                concern: 'Shop by Concern',
                                                category: 'Shop by Category',
                                                product: 'Shop by Product',
                                                sort: '',
                                            })
                                            setCredentials({
                                                concern: '',
                                                category: '',
                                                product: '',
                                                sort: '',
                                            })
                                        }}>
                                            Shop All
                                        </button>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="accordion accordianbut mb-5 accordianbut12" >

                            <div className="accordion sort" id='accordianclass'>
                                <div className="accordion">
                                    <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Sort
                                    </button>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body shortbody">

                                        <div className="input-container">
                                            <div className="form-check">
                                                <span className="form-check-label a" onClick={() => resetSort()}>
                                                    Reset All
                                                </span>

                                            </div>
                                        </div>

                                        {/* {props?.filters?.productType?.map((elem, index) => {
                                            return (
                                                <div className="input-container" key={index + 1}>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="sort" value={elem?.name} id={"sort" + (index + 1)} onChange={handleSort} />
                                                        <label className="form-check-label" htmlFor={"sort" + (index + 1)}>
                                                            {elem?.name}
                                                        </label>

                                                    </div>
                                                </div>
                                            )
                                        })} */}

                                        <div className="input-container">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="sort" value="A-Z" id="AtoZ" onChange={handleSort} checked={filters?.sort === 'A-Z' ? true : false} />
                                                <label className="form-check-label" htmlFor="AtoZ">
                                                    Alphabetically, A-Z
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="sort" value="Z-A" id="ZtoA" onChange={handleSort} checked={filters?.sort === 'Z-A' ? true : false} />
                                                <label className="form-check-label" htmlFor="ZtoA">
                                                    Alphabetically, Z-A
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="sort" value="L-H" id="LtoH" onChange={handleSort} checked={filters?.sort === 'L-H' ? true : false} />
                                                <label className="form-check-label" htmlFor="LtoH">
                                                    Price, Low to High
                                                </label>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="sort" value="H-L" id="HtoL" onChange={handleSort} checked={filters?.sort === 'H-L' ? true : false} />
                                                <label className="form-check-label" htmlFor="HtoL">
                                                    Price, High to Low
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="accordion accordianbut mb-5 accordianbut12" >

                            <div className="accordion sort" id='accordianclass'>
                                <div className="accordion">
                                    <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#price-sort" aria-expanded="false" aria-controls="price-sort">
                                        Price
                                    </button>
                                </div>
                                <div id="price-sort" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body shortbody">

                                        <div className="shoprange p-0">

                                            <div className="input-container">
                                                <div className="form-check">
                                                    <span className="form-check-label a" onClick={() => resetPrice()}>
                                                        Reset
                                                    </span>

                                                </div>
                                            </div>
                                            {/* <label htmlFor="price-sorting" className="form-label">Price</label> */}
                                            <div className="input-container">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="price" value="0-100" id="0-100" onChange={handlePrice} checked={filters?.price === '0-100' ? true : false} />
                                                    <label className="form-check-label" htmlFor="0-100">
                                                        Rs. 0 to Rs. 100
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-container">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="price" value="100-200" id="100-200" onChange={handlePrice} checked={filters?.price === '100-200' ? true : false} />
                                                    <label className="form-check-label" htmlFor="100-200">
                                                        Rs. 100 to Rs. 200
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-container">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="price" value="200-500" id="200-500" onChange={handlePrice} checked={filters?.price === '200-500' ? true : false} />
                                                    <label className="form-check-label" htmlFor="200-500">
                                                        Rs. 200 to Rs. 500
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="input-container">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="price" value="500-1000" id="500-1000" onChange={handlePrice} checked={filters?.price === '500-1000' ? true : false} />
                                                    <label className="form-check-label" htmlFor="500-1000">
                                                        Rs. 500 to Rs. 1000
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="shopselectrange">
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: '#8F6D63',
                                    },
                                }}
                            >

                                <div className="shoprange">

                                    <label htmlFor="customRange3" className="form-label">Offers %</label>
                                    <Slider
                                        range={{
                                            draggableTrack: true,
                                        }}
                                        defaultValue={[20, 50]}
                                        onChange={handleOffer}
                                    />

                                </div>

                            </ConfigProvider>

                        </div>

                    </div>

                    <div className="shoppagebox w-100">

                        <div className="shopfilter">
                            <h2 onClick={() => setShow(true)} >Filter <i className="fa-solid fa-filter"></i> </h2>
                        </div>

                        {
                            products?.productList?.length ?
                                <>
                                    <div className="shoppageproduct row">
                                        {
                                            products?.productList?.map((elem, index) => {
                                                return <div className='col-xl-3 col-lg-4 col-md-6 m-0 p-0 product-card-container' key={index + 1}><ProductCard details={elem} cartToggler={[cartToggler, setCartToggler]} /></div>
                                            })
                                        }
                                    </div>


                                    <div className="shoppagination">
                                        <Pagination defaultCurrent={1} defaultPageSize={12} total={products?.totalData} itemRender={itemRender} showSizeChanger={false} onChange={handlePageination} />
                                    </div>
                                </>
                                :

                                <div className="row align-items-center justify-content-center h-100">
                                    <div className="col text-center">
                                        <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fillRule="evenodd"><ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7"></ellipse><g fillRule="nonzero" stroke="#d9d9d9"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa"></path></g></g></svg>
                                        <h5 className='text-secondary'>
                                            No Product Found
                                        </h5>
                                    </div>
                                </div>

                        }

                    </div>

                </div>
            </div>
        </>
    );
};

export default ProductList;