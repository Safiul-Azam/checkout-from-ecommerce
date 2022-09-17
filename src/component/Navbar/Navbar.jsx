import React from 'react';
import './navbar.css'
import { IoRefresh } from 'react-icons/io5'
import { useState } from 'react';
import { useEffect } from 'react';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [size, setSize] = useState(undefined)
    const [category, setCategory] = useState(undefined)
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`/products.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const productsBySize = products.filter(product => product.size === size && product.category === category)
    const handleReset = (e) => {
        e.preventDefault()
        setSize('size')
        
    }
    return (
        <div>
            <nav className='nav-container'>
                <div className='select-item'>
                    <select onChange={e => setCategory(e.target.value)} id="adult">
                        <option>- category</option>
                        <option>Bag</option>
                        <option>Cap</option>
                        <option>watch</option>
                        <option>glass</option>
                    </select>
                    <select onChange={e => setSize(e.target.value)} id="adult">
                        <option>Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>2XL</option>
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
                    <Link to='/selectedProducts'>Add To Cart</Link>
                </div>
            </nav>
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
                            <Products products={productsBySize.length > 0? productsBySize: products }></Products>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Navbar;