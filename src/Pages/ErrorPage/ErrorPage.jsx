import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='w-10/12 mx-auto text-center'>
            <img className='w-2/3 mx-auto my-12' src='/public/images/error.png' alt="" />
            <button className='btn btn-error text-white' onClick={handleBack}>Go Back </button>
        </div>
    );
};

export default ErrorPage;