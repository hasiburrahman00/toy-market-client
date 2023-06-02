import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ToyCard from '../../Components/ToyCard/ToyCard';
import MyToysCard from '../../Components/MyToysCard/MyToysCard';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user, loading } = useContext(AuthContext);
    const [myToys, setMytoys] = useState([])
    const url = `http://localhost:5000/toys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMytoys(data)
            })
    }, [loading])

    // delete toy item 
    const handleDelete = id => {
        const url = `http://localhost:5000/mytoys/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Delete your Toy  Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                // after delte update remaining toys information
                const remainingToys = myToys.filter(item => item._id !== id);
                setMytoys(remainingToys);
            })
    }

    return (
        <div className='w-10/12 mx-auto my-12'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Name & Email</th>
                            <th>Toy</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(toy => <MyToysCard
                                key={toy._id}
                                mytoy={toy}
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;