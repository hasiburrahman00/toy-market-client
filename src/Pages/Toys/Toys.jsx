import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../../Components/ToyCard/ToyCard';
import Aos from 'aos';

const Toys = () => {

    const [toys, setToys] = useState([]);
    const loadedData = useLoaderData();
    console.log(loadedData)
    useEffect(() => {
        setToys(loadedData)
    }, [])


    useEffect(() => {
        Aos.init({
            duration: 100
        });
    }, [])

    return (
        <div>
            <div className='bg-[#95b3e0] text-center'>
                <img src="/images/banner-top.webp" alt="" />
                <h2 className='text-7xl font-mono font-bold py-28'>All Toys </h2>
            </div>
            <div className='md:grid grid-cols-3 gap-12 w-10/12 mx-auto my-20'>
                {
                    toys.map(toy => <ToyCard
                        data-aos = "fade-right"
                        key={toy._id}
                        toy={toy}
                    />)
                }
            </div>
        </div>
    );
};

export default Toys;