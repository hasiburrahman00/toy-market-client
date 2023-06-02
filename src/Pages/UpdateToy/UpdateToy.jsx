import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toyInfo = useLoaderData();
    const { _id, img_url, price, quantity } = toyInfo;
    const navigate = useNavigate();

    const handleUpdateInfo = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedInfo = { price, quantity, description };
        fetch(`https://toy-market-sever.vercel.app/mytoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Delete your Toy  Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/mytoys');

                }
            })
    }



    return (
        <div className='bg-rose-200 py-20'>
            <div className=' w-2/3 mx-auto'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-1/2 h-96'><img className='w-96 h-96' src={img_url} alt="Album" /></figure>
                    <form onSubmit={handleUpdateInfo} className='w-1/2'>
                        <div className="card-body">
                            <h2 className="card-title">Upate Toy Information: </h2>
                            <div className='flex flex-col gap-4'>
                                <input defaultValue={price} className='input bordered input-success hover:outline-none' type="text" name="price" placeholder='Price' id="" required />
                                <input defaultValue={quantity} className='input bordered input-success hover:outline-none' type="text" name="quantity" placeholder='Available Quantity' id="" required />
                                <input className='input bordered input-success hover:outline-none' type="text" name="description" placeholder='description' id="" required />
                            </div>
                            <div className="card-actions justify-end">
                                <input className="btn btn-warning w-40" type="submit" value="Update" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;