import React from 'react';

const Discount = () => {
    return (
        <div className='w-10/12 mx-auto md:flex gap-20 py-20'>
            <div className="card w-full bg-[#fcdceaff] shadow-xl image-full">
                <figure><img src="/images/4.webp" alt="" /></figure>
                <div className="card-body text-right">
                    <h2 className="font-bold font-mono text-4xl">Collection</h2>
                    <p className='font-bold font-mono text-2xl'>Flat <span className='text-3xl'>  20% </span>Off </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning rounded-full w-40 font-bold text-white bg-[#f379a7ff] hover:bg-[#f379a7ff] border-0 hover:border-0 ">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-[#fcdceaff] shadow-xl image-full">
                <figure><img src="/images/5.webp" alt="" /></figure>
                <div className="card-body text-right">
                    <h2 className="font-bold font-mono text-4xl">Collection</h2>
                    <p className='font-bold font-mono text-2xl'>Flat <span className='text-3xl'>  60% </span>Off </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning rounded-full w-40 font-bold text-white bg-[#f379a7ff] hover:bg-[#f379a7ff] border-0 hover:border-0 ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;