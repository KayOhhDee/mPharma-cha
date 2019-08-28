import { LOAD_PRODUCTS, ADD_PRODUCT } from "../actionTypes";

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
    default:
      return state;
  }
}