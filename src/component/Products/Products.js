import React from 'react';
import './Products.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Products = () => {
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
                        <th style={{textAlign:'right',paddingRight:'15px'}}>Buy</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td className='check-cart'>
                            <input type="number" />
                            <AiOutlineShoppingCart className='cart'/>
                            <input type="checkbox" name="" id="" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Products;