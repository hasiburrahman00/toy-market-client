import React from 'react';
import bannerImg2 from '/images/banner_2.webp'
import bannerTop from '/images/banner-top.webp';

const Banner = () => {
    return (
        <div className='bg-[#c2e0eb] '>
            <img src={bannerTop} alt="" />
            <div className='w-11/12 md:w-10/12 mx-auto items-center justify-between md:flex py-8'>
                <div className='md:space-y-7 space-y-3'>
                    <h2 className='font-mono text-6xl font-bold'>Best Kids Store & Online Shop</h2>
                    <h4 className='font-mono text-2xl font-bolder'>Give The Gift Of Your Children Everyday</h4>
                    <button className='btn btn-warning rounded-full w-full md:w-auto font-bold'>Shop This Now</button>
                </div>
                <img className='mt-4 md:mb-0' src={bannerImg2} alt="" />
            </div>
            <img src="/images/banner-bottom.webp" alt="" />
        </div>
    );
};

export default Banner;