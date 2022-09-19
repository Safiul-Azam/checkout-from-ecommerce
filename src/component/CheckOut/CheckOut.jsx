import React, { useContext } from 'react';
import './CheckOut.css'
import { IoMdClose } from 'react-icons/io'
import { FaMinus, FaPlus } from 'react-icons/fa'
import CartContext from '../../context/cart/CartContext';
import { useNavigate } from 'react-router-dom';
const CheckOut = () => {
    const { cartItems } = useContext(CartContext)
    // console.log(removeItem);
    const { removeItem } = useContext(CartContext)
    const navigate = useNavigate()
    if(cartItems.length === 0){
        navigate('/')
    }
    return (
        <div className='home-container check-out-container'>
            <div className="product-container">

                <table className="">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartItems?.map(product => <tr>
                                <td><IoMdClose style={{ cursor: 'pointer' }} onClick={() => removeItem(product.id)} /></td>
                                <td>
                                    <img width={70} src={product.img} alt="" />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>
                                    {/* <div className="">
                                        <button
                                           disabled={options.adult <= 1}
                                           className=""
                                           onClick={() => handleOption("quantity", "d")}
                                        >
                                            <FaMinus></FaMinus>
                                        </button>
                                        <span className="">{options.quantity}</span>

                                        <button
                                            className=""
                                            onClick={() => handleOption("quantity", "i")}
                                        >
                                            <FaPlus></FaPlus>
                                        </button>
                                    </div> */}
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='checkout-cart'>
                <h2>Cart Total</h2>
                <div className='cart-item'>
                    <p>Sub Total</p>
                    <p>{cartItems.reduce((amount, item) => item.price + amount, 0)}</p>
                </div>
                <hr />
                <div className='cart-item'>
                    <p>Total</p>
                    <p>{cartItems.reduce((amount, item) => item.price + amount, 0)}</p>
                </div>
                <button className='proceed-btn'>Proceed to checkout</button>

            </div>
        </div>
    )
}

export default CheckOut