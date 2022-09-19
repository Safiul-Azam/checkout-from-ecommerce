import React, { useState } from 'react';
import './Products.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Products = ({ products,handleSelect,setQuantity,quantity}) => {
    const handleQuantity = (e) => {
        // [...quantity,{quantity:e.target.value, id:product.id}]
    const incQuantity = quantity.find((item) => item.id === e.id)
    console.log(incQuantity);
    console.log(e);
}
console.log(quantity);
    
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
                            <input onChange={(e)=>handleQuantity({value:e.target.value,id:product.id})} type="number" name="" id="" />
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