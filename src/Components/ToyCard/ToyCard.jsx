import React, { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { BiExpand, BiGitCompare } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const ToyCard = ({ toy }) => {
    const { _id, name, img_url, price } = toy;

    


    return (
        <div>
            <div className="card w-96 bg-[#e4f6fe] shadow-xl mb-4 md:mb-0">
                <figure><img src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p className='font-bold'>price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/toys/${_id}`}><div className="p-2 cursor-pointer bg-[#f379a7ff] rounded-md"><BiExpand className='h-6 w-6 text-white' /></div></Link>
                        <div className="p-2 cursor-pointer bg-[#f379a7ff] rounded-md"><BsCart className='h-6 w-6 text-white' /></div>
                        <div className="p-2 cursor-pointer bg-[#f379a7ff] rounded-md"><BiGitCompare className='h-6 w-6 text-white' /></div>
                        <div className="p-2 cursor-pointer bg-[#f379a7ff] rounded-md"><FiHeart className='h-6 w-6 text-white' /></div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ToyCard;