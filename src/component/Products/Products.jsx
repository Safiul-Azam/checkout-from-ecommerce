import React from 'react';
import './Products.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react';
import CheckOut from '../CheckOut/CheckOut';
import { useNavigate } from 'react-router-dom';

const Products = ({ products,handleSelect,handleCount}) => {
    return (
        <>
            {
                products?.map(product => <tr key={product.id}>
                    <td>
                        <img width={70} src={product.img} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.color}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>{product.size}</td>
                    <td>{product.price}</td>
                    <td>
                        <div className='check-cart'>
                            <input onChange={handleCount} type="number" name="" id="" />
                            <AiOutlineShoppingCart className='cart' />
                            <input onChange={handleSelect} value={product.id} type="checkbox" />
                        </div>
                    </td>
                </tr>)
            }
        </>
    );
};

export default Products;