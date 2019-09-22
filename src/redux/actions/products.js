import { LOAD_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, ADD_ERROR } from "../actionTypes";
import axios from "axios";

export function products(items) {
  return {
    type: LOAD_PRODUCTS,
    items
  };
}

export function add(item) {
  return {
    type: ADD_PRODUCT,
    item
  };
}

export function remove(id) {
  return {
    type: REMOVE_PRODUCT,
    id
  }
}

export function addError(error){
  return {
    type: ADD_ERROR,
    error
  }
}

const url = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";

export const loadProducts = () => async dispatch => {
  try {
    if (!localStorage.getItem("products")) {
      await axios.get(url).then(data => {
        let res = data.data.products;
        localStorage.setItem("products", JSON.stringify(res));
        dispatch(products(res));
      });
    } else {
      dispatch(products(JSON.parse(localStorage.getItem("products"))));
    }
  } catch (error) {
    dispatch(addError(error.message));
    console.log(error);
  }
};

export const addProduct = (name, price) => dispatch => {
  let items = JSON.parse(localStorage.getItem("products"));
  let id = [...items].length;
  let priceId = [...items][items.length - 1].prices[
    [...items][items.length - 1].prices.length - 1
  ].id;

  let newItems = {
    id: ++id,
    name: name,
    prices: [{ id: ++priceId, price: price, date: Date.now() }]
  };
  let modifiedItems = [...items, newItems];
  localStorage.setItem("products", JSON.stringify(modifiedItems));
  dispatch(add(newItems));
};

export const editProduct = (name, price, id) => dispatch => {
  let items = JSON.parse(localStorage.getItem("products"));
  let foundProduct = items[id - 1];
  let priceId = [...items][items.length - 1].prices[
    [...items][items.length - 1].prices.length - 1
  ].id;

  foundProduct.name = name;
  foundProduct.prices = [
    ...foundProduct.prices,
    { id: ++priceId, price: price, date: Date.now() }
  ];

  items[id - 1] = foundProduct;
  localStorage.setItem("products", JSON.stringify(items));

  dispatch(products(JSON.parse(localStorage.getItem("products"))));
};

export const deleteProduct = id => dispatch => {
  let items = JSON.parse(localStorage.getItem("products"));
  let foundProduct = items[id - 1];

  delete foundProduct.id;
  items[id - 1] = foundProduct;
  localStorage.setItem("products", JSON.stringify(items));

  dispatch(remove(id));
};