import React from 'react';
import Banner from '../Banner/Banner';
import TreandingToys from '../TreandingToys/TreandingToys';
import ProductGallery from '../ProductGallery/ProductGallery';
import OfferBanner from '../OfferBanner/OfferBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TreandingToys></TreandingToys>
            <ProductGallery></ProductGallery>
            <OfferBanner></OfferBanner>
        </div>
    );
};

export default Home;