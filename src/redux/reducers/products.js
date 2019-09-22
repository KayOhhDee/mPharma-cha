import { LOAD_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, ADD_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
  products: [],
  error: null
};


export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        error: null,
        products: action.items
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.item]
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      };
    case ADD_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}