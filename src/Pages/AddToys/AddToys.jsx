import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const name = form.toy_name.value;
        const img_url = form.photo_url.value;
        const category = form.sub_category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const ratting = form.ratting.value;
        const description = form.description.value;
        const toyInfo = { sellerName, sellerEmail, name, img_url, category, price, quantity, ratting, description };
        console.log(toyInfo);

        fetch('https://toy-market-sever.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Toy Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                    navigate('/mytoys')
                }
            })
    }


    return (
        <div>
            <div className='bg-[#95b3e0] text-center'>
                <img src="/images/banner-top.webp" alt="" />
                <h2 className='text-7xl font-mono font-bold py-28'>Add Toy </h2>
            </div>
            <div className='w-11/12 md:w-8/12 mx-auto my-20'>
                <form onSubmit={handleAddToy}>
                    <div className='lg:grid md:grid-cols-2 md:gap-8 '>
                        <input defaultValue={user?.displayName} className='input bordered input-success hover:outline-none' type="text" name="seller_name" placeholder='Seller Name' id="" required />
                        <input defaultValue={user?.email} className='input bordered input-success hover:outline-none' type="text" name="seller_email" placeholder='Seller Email' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="toy_name" placeholder='Toy Name' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="photo_url" placeholder='Picture URL' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="sub_category" placeholder='Sub Category' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="price" placeholder='Price' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="quantity" placeholder='Available Quantity' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="ratting" placeholder='Ratting' id="" required />
                        <input className='input bordered input-success hover:outline-none' type="text" name="description" placeholder='description' id="" required />
                    </div>
                    <div className='w-full mx-auto mt-8'>
                        <input className='btn btn-error w-full font-bold text-white ' type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToys;