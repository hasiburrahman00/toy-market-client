import React from 'react';

const TreandingToys = () => {
    return (
        <div className='md:flex items-center w-10/12 mx-auto my-20 font-mono gap-8 space-y-4 md:space-y-0'>
            <div className='bg-[#fcdcea] p-8 flex hover:bg-[#e4f6fe] delay-600 w-full h-60'>
                <div className='w-3/5'>
                    <h2 className='text-3xl font-bold'>Boby toys</h2>
                    <h1 className='text-2xl font-bold'>$225.00</h1>
                    <button className='btn btn-sm btn-warning mt-12'>Shop Now</button>
                </div>
                <div>
                    <img src="/images/2.webp" alt="" />
                </div>
            </div>
            <div className='bg-[#fcdcea] p-8 flex hover:bg-[#e4f6fe] w-full h-60'>
                <div className='w-3/5'>
                    <h2 className='text-3xl font-bold'>toys Box</h2>
                    <h1 className='text-2xl font-bold'>$25.00</h1>
                    <button className='btn btn-sm btn-warning mt-12'>Shop Now</button>
                </div>
                <div>
                    <img src="/images/1.webp" alt="" />
                </div>
            </div>
            <div className='bg-[#fcdcea] p-8 flex hover:bg-[#e4f6fe] delay-600 w-full h-60'>
                <div className='w-3/5'>
                    <h2 className='text-3xl font-bold'>Teddy Bear</h2>
                    <h1 className='text-2xl font-bold'>$75.00</h1>
                    <button className='btn btn-sm btn-warning mt-12'>Shop Now</button>
                </div>
                <div>
                    <img src="/images/3.webp" alt="" />
                </div>
            </div>

        </div>
    );
};

export default TreandingToys;