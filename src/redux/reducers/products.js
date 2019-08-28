import { LOAD_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes";

const DEFAULT_STATE = {
  products: []
};


export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: action.items
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.item]
      };
    case REMOVE_PRODUCT:
      return {
        products: state.products.filter(product => product.id !== action.id)
      };
    default:
      return state;
  }
}