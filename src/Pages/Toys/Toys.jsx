import React, { useEffect, useState } from 'react';

const Toys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Toys;