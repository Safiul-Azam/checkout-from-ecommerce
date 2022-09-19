import { ADD_TO_CART, REMOVE_ITEM } from "../Type";

export const CartReducer = (state,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cartItems:[...state.cartItem,action.payload]
            }
        case REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItem.filter(item => item.id !== action.payload)
            }
    
        default:
            return state
    }
}   