import React from 'react'

import { ConfigProvider, Slider } from 'antd';
const Mobilefiltersidebar = ({ close, filtersTitle, filterCredentials, filtersLabel, filtersHandler, sortingHandler, resetSort, priceHandler, resetPrice, offerHandler }) => {

    // FILTERS STATE
    const [filters, setFilters] = filtersLabel;

    // FILTERATION CREDENTIALS STATE
    const [credentials, setCredentials] = filterCredentials;

    return (
        <>

            <div className="mobilefiltercontainer">
                <div className="mobilefilterclosebutton">
                    <div className='my-3' onClick={close}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <div className="selectfiltercontainer mb-5">


                    <div className="accordion accordianbut accordianbut12" >
                        <div className="accordion  " id='accordianclass'>
                            <div className="accordion" id='bordercolor123'>
                                <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo12345" aria-expanded="false" aria-controls="collapseTwo">
                                    {filters?.concern}
                                </button>
                            </div>
                            <div id="collapseTwo12345" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body shortbody">

                                    {filtersTitle?.concern?.map((elem, index) => {
                                        return (
                                            <div className="input-container" key={index + 1}>
                                                <div className="form-check p-0">
                                                    <input className="form-check-input" name="concern" type="radio" value={elem?._id} placeholder={elem?.name} id={"concern" + index + 1} onChange={filtersHandler} hidden />
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
                                    {filtersTitle?.categories?.map((elem, index) => {
                                        return (
                                            <div className="input-container" key={index + 1}>
                                                <div className="form-check p-0">
                                                    <input className="form-check-input" name="category" type="radio" value={elem?._id} placeholder={elem?.name} id={"category" + index + 1} onChange={filtersHandler} hidden />
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
                                    {filtersTitle?.productType?.map((elem, index) => {
                                        return (
                                            <div className="input-container" key={index + 1}>
                                                <div className="form-check p-0">
                                                    <input className="form-check-input" name="product" type="radio" value={elem?._id} placeholder={elem?.name} id={"product" + index + 1} onChange={filtersHandler} hidden />
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
                                        <span className="form-check-label a" onClick={resetSort}>
                                            Reset
                                        </span>

                                    </div>
                                </div>

                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="sort" value="Alphabetically, A-Z" id="AtoZ" onChange={sortingHandler} checked={filters?.sort === 'Alphabetically, A-Z' ? true : false} />
                                        <label className="form-check-label" htmlFor="AtoZ">
                                            Alphabetically, A-Z
                                        </label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="sort" value="Alphabetically, Z-A" id="ZtoA" onChange={sortingHandler} checked={filters?.sort === 'Alphabetically, Z-A' ? true : false} />
                                        <label className="form-check-label" htmlFor="ZtoA">
                                            Alphabetically, Z-A
                                        </label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="sort" value="Price, Low to High" id="LtoH" onChange={sortingHandler} checked={filters?.sort === 'Price, Low to High' ? true : false} />
                                        <label className="form-check-label" htmlFor="LtoH">
                                            Price, Low to High
                                        </label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="sort" value="Price, High to Low" id="HtoL" onChange={sortingHandler} checked={filters?.sort === 'Price, High to Low' ? true : false} />
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
                            <button id='productshortbutton' className="accordion-button collapsed accordianbut " type="button" data-bs-toggle="collapse" data-bs-target="#priceSort" aria-expanded="false" aria-controls="priceSort">
                                Price
                            </button>
                        </div>
                        <div id="priceSort" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body shortbody">

                                <div className="input-container">
                                    <div className="form-check">
                                        <span className="form-check-label a" onClick={resetPrice}>
                                            Reset
                                        </span>

                                    </div>
                                </div>

                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="price" value="0-100" id="0-100" onChange={priceHandler} checked={filters?.price === '0-100' ? true : false} />
                                        <label className="form-check-label" htmlFor="0-100">
                                            Rs. 0 to Rs. 100
                                        </label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="price" value="100-200" id="100-200" onChange={priceHandler} checked={filters?.price === '100-200' ? true : false} />
                                        <label className="form-check-label" htmlFor="100-200">
                                            Rs. 100 to Rs. 200
                                        </label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="price" value="200-500" id="200-500" onChange={priceHandler} checked={filters?.price === '200-500' ? true : false} />
                                        <label className="form-check-label" htmlFor="200-500">
                                            Rs. 200 to Rs. 500
                                        </label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="price" value="500-1000" id="500-1000" onChange={priceHandler} checked={filters?.price === '500-1000' ? true : false} />
                                        <label className="form-check-label" htmlFor="500-1000">
                                            Rs. 500 to Rs. 1000
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>



                <div className="shopselectrange mb-5">
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#8F6D63',
                            },
                        }}
                    >
                        <div className="shoprange">

                            {/* <Slider
                                range={{
                                    draggableTrack: true,
                                }}
                                defaultValue={[20, 50]}
                                onChange={priceHandler}
                            /> */}

                        </div>
                        <div className="shoprange">

                            <label htmlFor="customRange3" className="form-label">Offers %</label>
                            <Slider
                                range={{
                                    draggableTrack: true,
                                }}
                                defaultValue={[20, 50]}
                                onChange={offerHandler}
                            />

                        </div>

                    </ConfigProvider>

                </div>







            </div>

        </>
    )
}

export default Mobilefiltersidebar
