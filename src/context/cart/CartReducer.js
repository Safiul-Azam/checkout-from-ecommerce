import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, FIND_ITEM_BY_SIZE } from "../Type";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case FIND_ITEM_BY_SIZE: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.size === action.payload
        ),
      };
    }

    default:
      return state;
  }
};

export default CartReducer;  