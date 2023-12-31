import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import TreandingToys from '../TreandingToys/TreandingToys';
import ProductGallery from '../ProductGallery/ProductGallery';
import OfferBanner from '../OfferBanner/OfferBanner';
import Discount from '../Discount/Discount';
import ProductCategory from '../ProductCategory/ProductCategory';


const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <TreandingToys></TreandingToys>
            <ProductCategory></ProductCategory>
            <OfferBanner></OfferBanner>
            <ProductGallery></ProductGallery>
            <Discount></Discount>
        </div>
    );
};

export default Home;