import React, { useContext } from 'react';
import './Products.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartContext from '../../context/cart/CartContext';

const Products = ({ products }) => {
    const { addToCart } = useContext(CartContext)
    
    return (
        <><div className="product-container">
            <table className="">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>color</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th style={{ textAlign: 'right', paddingRight: '15px' }}>Buy</th>
                    </tr>
                </thead>
                <tbody>
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
                                    <input onChange={()=>addToCart(product)} type="checkbox" name="" id="" />
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

        </>
    );
};

export default Products;