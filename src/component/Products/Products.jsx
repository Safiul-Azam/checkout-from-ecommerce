import React from 'react';
import './Products.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react';

const Products = ({ products, productsData }) => {
    const [count, setCount] = useState(0)
    const [selected, setSelected] = useState([])

    const handleSelect= (e)=>{

        const checked = e.target.checked
        const value = e.target.value
        setSelected(checked ? [...selected, value] : selected.filter(item => item !== value))
    }
    return (
        <>
            {
                products?.map(product => <tr>
                    <td>
                        <img width={70} src={product.img} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.color}</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>{product.size}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>
                        <div className='check-cart'>
                            <input onChange={e => setCount(e.target.value)} type="number" name="" id="" />
                            <AiOutlineShoppingCart className='cart' />
                            <input onChange={handleSelect} value={count} disabled={count <= 0} type="checkbox"/>
                        </div>
                    </td>
                </tr>) 
            }
        </>
    );
};

export default Products;