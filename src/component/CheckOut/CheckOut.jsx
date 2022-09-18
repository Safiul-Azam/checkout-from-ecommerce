import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckOut.css'
import {FaMinus, FaPlus}  from 'react-icons/fa'
const CheckOut = () => {
    const location = useLocation()
    console.log(location);
    const [products, setProducts] = useState(location.state.products)
    const [selected, setSelected] = useState(location.state.selected)

    const productsBySelected = products.filter(product => product.id === selected[0])
    console.log(productsBySelected);
    return (
        <div className='home-container check-out-container'>
            <div className="product-container">
                <table className="">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => <tr>
                                <td>
                                    <img width={70} src={product.img} alt="" />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <div className="">
                                        <button
                                            disabled={product.quantity <= 1}
                                            className=""
                                            // onClick={() => handleOption("adult", "d")}
                                        >
                                            <FaMinus></FaMinus>
                                        </button>
                                        <span className="">
                                            {product.quantity}
                                        </span>
                                        <button
                                            className=""
                                            // onClick={() => handleOption("adult", "i")}
                                        >
                                            <FaPlus></FaPlus>
                                        </button>
                                    </div>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='checkout-cart'>
                <h2>Cart Total</h2>
                <div className='cart-item'>
                    <p>sub total</p>
                    <p>$ 120</p>
                </div>
                <hr />
                <div className='cart-item'>
                    <p>Total</p>
                    <p>${10 + 25}</p>
                </div>
            </div>
        </div>
    )
}

export default CheckOut