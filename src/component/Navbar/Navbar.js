import React from 'react';

const Navbar = () => {
    const handleChange = () => {

    }
    return (
        <div className=''>
            <div>
                <select onChange={handleChange} className='py-4 px-8 text-center' id="adult">
                    <option className='text-lg hover:bg-primary hover:text-4xl focus:bg-primary'>hoodies</option>
                    <option className='text-lg'>hoodies 1</option>
                    <option className='text-lg'>hoodies 2</option>
                    <option className='text-lg'>hoodies 3</option>
                    <option className='text-lg'>hoodies 4</option>
                    <option className='text-lg'>hoodies 5</option>
                </select>
                <select onChange={handleChange} className='py-4 px-8 text-center' id="adult">
                    <option className='text-lg hover:bg-primary hover:text-4xl focus:bg-primary'>Size</option>
                    <option className='text-lg'>sm</option>
                    <option className='text-lg'>md</option>
                    <option className='text-lg'>lg</option>
                    <option className='text-lg'>xl</option>
                    <option className='text-lg'>xll</option>
                </select>
            </div>
            <div>
                <div className="search-products">
                    <label className="label">
                        <span className="label-text">Search : </span>
                    </label>
                    <input type="text" placeholder="Search" className="" />
                </div>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Navbar;