import { useState } from 'react';

import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import './navbar.css'
import { IoRefresh } from 'react-icons/io5'
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import Products from '../Products/Products';

const Navbar = () => {
    const [size, setSize] = useState(undefined)
    const [category, setCategory] = useState(undefined)
    const navigate =useNavigate()
    const [products] = useProducts('/products.json')
    const productsBySize = products.filter(product => product.size === size && product.category === category)

    
    const handleReset = (e) => {
        e.preventDefault()
        setSize('size')
    }

    // const handleQuantity =(e)=>{
    //     setQuantity(e.target.value)
    // }

    // console.log(quantity);
    // const navigate = useNavigate()
   
    // const [selected, setSelected] = useState([])

    // const handleSelect = (e) => {
    //     const checked = e.target.checked
    //     const value = e.target.value
    //     setSelected(checked ? [...selected, {value, quantity}] : selected.filter(item => item !== value))
    // }
    const {cartItems} = useContext(CartContext)
    const handleClick = () => {
        navigate('/checkout', { state: { cartItems } })
    }
    console.log(cartItems);
    return (
        <div>
            <nav className='nav-container'>
                <div className='select-item'>
                    <select onChange={e => setCategory(e.target.value)} id="adult">
                        <option>- category</option>
                        <option>Bag</option>
                        <option>Cap</option>
                    </select>
                    <select onChange={e => setSize(e.target.value)} id="adult">
                        <option>Size</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    <button onClick={handleReset} className='reset'><IoRefresh /> Reset</button>
                </div>
                <div className='search'>
                    <div className="search-products">
                        <label className="label">
                            <span className="label-text">Search : </span>
                        </label>
                        <input type="text" placeholder="Search" className="" />
                    </div>
                    <button disabled={cartItems.length <= 0} onClick={handleClick}>Add To Cart</button>
                    
                </div>
            </nav>
            {<Products products={productsBySize.length > 0 ? productsBySize: products } ></Products>}
        </div>
    );
};

export default Navbar;