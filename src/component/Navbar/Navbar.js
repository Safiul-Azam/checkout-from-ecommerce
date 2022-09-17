import React from 'react';
import './navbar.css'
import {IoRefresh} from 'react-icons/io5'

const Navbar = () => {
    const handleChange = () => {

    }
    return (
        <nav className='nav-container'>
            <div className='select-item'>
                <select onChange={handleChange} id="adult">
                    <option>- Hoodies</option>
                    <option>Hoodies 1</option>
                    <option>Hoodies 2</option>
                    <option>Hoodies 3</option>
                    <option>Hoodies 4</option>
                    <option>Hoodies 5</option>
                </select>
                <select onChange={handleChange} id="adult">
                    <option>Size</option>
                    <option>sm</option>
                    <option>md</option>
                    <option>lg</option>
                    <option>xl</option>
                    <option>xll</option>
                </select>
                <p className='reset'>reset <IoRefresh className='icon'/></p>
            </div>
            <div className='search'>
                <div className="search-products">
                    <label className="label">
                        <span className="label-text">Search : </span>
                    </label>
                    <input type="text" placeholder="Search" className="" />
                </div>
                <button>Add To Cart</button>
            </div>
        </nav>
    );
};

export default Navbar;