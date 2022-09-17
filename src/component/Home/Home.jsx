import React from 'react';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import './home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <Products/>
        </div>
    );
};

export default Home;