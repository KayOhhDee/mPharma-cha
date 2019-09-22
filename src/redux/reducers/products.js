import { LOAD_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, ADD_ERROR } from "../actionTypes";

const DEFAULT_STATE = {
  products: [],
  error: null
};

function getLocalDetail(items) {
  if (!items.length) {
    return [];
  }

  const lastItem = items[items.length - 1];

  return {
    itemsLength: items.length,
    lastPriceIdOfLastItem: lastItem.prices[lastItem.prices.length - 1].id
  };
}


export default (state = DEFAULT_STATE, action) => {
  const { itemsLength, lastPriceIdOfLastItem } = getLocalDetail(
    action.items || state.products
  );

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
        products: [
          ...state.products,
          {
            id: itemsLength + 1,
            name: action.item.name,
            prices: [
              {
                id: lastPriceIdOfLastItem + 1,
                price: action.item.price,
                date: Date.now()
              }
            ]
          }
        ]
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