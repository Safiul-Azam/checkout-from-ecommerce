import React from 'react';
import './Products.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return (
        <div className="product-container">
            <table className="">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>color</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th style={{ textAlign: 'right', paddingRight: '15px' }}>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <td>
                                <img width={70} src={product.img} alt="" />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.color}</td>
                            <td>{product.stock}</td>
                            <td>{product.category}</td>
                            <td>{product.size}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>
                                <div className='check-cart'>
                                    <input type="number" name="" id="" />
                                    <AiOutlineShoppingCart className='cart' />
                                    <input type="checkbox" name="" id="" />
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Products;