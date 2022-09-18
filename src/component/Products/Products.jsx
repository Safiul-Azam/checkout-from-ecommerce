import React from 'react';
import './Products.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Products = ({ products,handleSelect}) => {
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
                            <input type="number" name="" id="" />
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