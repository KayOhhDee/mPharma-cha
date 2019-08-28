import { LOAD_PRODUCTS } from "../actionTypes";

const DEFAULT_STATE = {
  products: []
};


export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: action.items
      };
    default:
      return state;
  }
}