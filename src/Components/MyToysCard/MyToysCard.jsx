import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MyToysCard = ({ mytoy, handleDelete }) => {
    console.log(mytoy)
    const { _id, sellerName, name, img_url, price, sellerEmail, category, quantity } = mytoy;

    return (
        <tr>
            <th>
                <label onClick={() => handleDelete(_id)}>
                    <BsTrash className='h-6 w-6 text-rose-500 cursor-pointer' />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{sellerName}</div>
                        <div className="text-sm opacity-50">{sellerEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">Category: {category}</span>
                <span className="badge badge-ghost badge-sm ml-2">quantity: {quantity}</span>
            </td>
            <td>${price}</td>
            <th>
                <button className="btn btn-warning  btn-xs">details</button>
                <Link to={`/mytoys/${_id}`}><button className="btn btn-error ms-2 btn-xs">Update</button></Link>
            </th>
        </tr>
    );
};

export default MyToysCard;