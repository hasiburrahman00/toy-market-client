import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ToyDetails = () => {
    const loadedData = useLoaderData();
    const [toyDetails, setToyDetails] = useState(loadedData);
    const navigate = useNavigate();
    const { _id, name, img_url, price, description, category, features } = toyDetails;

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-10/12 mx-auto my-12 font-mono">
                <figure className='w-full'><img className='h-96 w-full' src={img_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='space-y-3'>
                        <p className='font-bold text-l '>Category: {category}</p>
                        <p><span className='font-bold'>Details :</span>  {description}</p>
                        {features.map(item => <li> - {item}</li>)}
                        <h5 className='font-bold text-2xl'>Price: {price}</h5>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleBackButton} className="btn btn-error ">Go Back</button>
                        <button className="btn btn-warning ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;