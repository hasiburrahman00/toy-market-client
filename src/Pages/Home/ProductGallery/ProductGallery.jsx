import React, { useEffect, useState } from 'react';

const ProductGallery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/toys`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    return (
        <div className='my-20'>
            <div className='w-1/2 mx-auto text-center mb-12'>
                <h2 className='font-mono text-3xl mb-4 font-bold'>Trending Product</h2>
                <p>The most popular and sought-after items of the moment, highlighting the latest consumer preferences and interests. Stay ahead of the curve by exploring this curated collection of products.</p>
            </div>
            <div className='md:grid grid-cols-3 w-10/12 mx-auto gap-12'>
                {
                    products.map(product => <img className='rounded-md my-4 md:my-0' key={product._id} src={product.img_url} />)
                }
            </div>
        </div>
    );
};

export default ProductGallery;