import React, { useReducer } from 'react';
import { ADD_TO_CART } from '../Type';
import { CartReducer } from './CartReducer';

const CartState = () => {
    const initialState = {
        cartItems:[]
    }
    const [state, dispatch] = useReducer(CartReducer, initialState)
    const addToCart = (item)=>{
        dispatch({type:ADD_TO_CART, payload:item})
    }
    return (
        <div>
            
        </div>
    );
};

export default CartState;