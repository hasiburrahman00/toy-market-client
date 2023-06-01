import React from 'react';
import { Link } from 'react-router-dom';

const OfferBanner = () => {
    return (
        <div className=" bg-[url('/images/footer.png')]">
            <div className='bg-[#fcdceaff]'>
                <img src="/public/images/banner-top.webp" alt="" />
                <div className='flex justify-between w-11/12 mx-auto items-center text-center py-8'>
                    <img className='hidden md:block' src={`/images/Offer_banner_left.webp`} alt="" />
                    <div className='space-y-4'>
                        <h2 className='font-bold text-5xl '>Deal Of The Day</h2>
                        <h5 className='font-semibold text-2xl '>UPTO 35% OFF ON ALL OTHER BABY PRODUCTS</h5>
                        <div><Link to={`/toys`}> <button className='btn w-40 btn-warning rounded-full mt-12'>Shop Now </button></Link></div>
                    </div>
                    <img className='hidden md:block' src={`/images/Offer_banner_right.webp`} alt="" />
                </div>
                <img src="/public/images/banner_bottm.webp" alt="" />
            </div>
        </div>
    );
};

export default OfferBanner;