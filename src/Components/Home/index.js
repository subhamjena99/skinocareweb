import React from 'react';
import Banner from './Banner';
import Ai from './Ai.jsx';
import Experties from './Experties';
import Doctors from './Doctors';
import Services from './Services';
import SkinHair from './SkinHair';
import Testimonials from './Testimonials';
import Products from './Products';
import { noTokenGetRequest, noTokenPostRequest } from '@/helpers';

const Home = async () => {

    const testimonials = await noTokenGetRequest('api/web/testimonials');
    let testimonialsData = testimonials?.data?.status ? testimonials?.data?.data  : [];

    // PRODUCT LISTING API
    const productList = await noTokenPostRequest({ url: 'api/web/products', cred: { pageNumber: 1 } });
    let products = productList?.data?.status ? productList.data?.data : [];

    return (
        <>
            <Banner />
            <Ai />
            <Experties />
            <Doctors />
            <Services />
            <SkinHair />
            <Testimonials testimonials={testimonialsData} />
            <Products list={products} />
        </>
    );
};

export default Home;