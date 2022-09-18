import React from 'react';
import './navbar.css'
import { IoRefresh } from 'react-icons/io5'
import { useState } from 'react';
import { useEffect } from 'react';
import Products from '../Products/Products';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
   
    const [selected, setSelected] = useState([])

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelected(checked ? [...selected, value] : selected.filter(item => item !== value))
    }
    const handleClick = () => {
        navigate('/checkout', { state: { products, selected } })
    }
    console.log(selected)
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
                    <button onClick={handleClick}>Add To Cart</button>
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
                            <th>Price</th>
                            <th style={{ textAlign: 'right', paddingRight: '15px' }}>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <Products products={productsBySize.length > 0 ? productsBySize : products} handleSelect={handleSelect}></Products>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Navbar;