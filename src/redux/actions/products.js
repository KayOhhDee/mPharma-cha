import { LOAD_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT } from "../actionTypes";
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

export const loadProducts = () => dispatch => {
  let url = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(data => {
        let res = data.data.products;
        if (!localStorage.getItem("products"))
          localStorage.setItem("products", JSON.stringify(res));
        dispatch(products(JSON.parse(localStorage.getItem("products"))));
      })
      .catch(error => {
        console.log(error);
        return reject(error);
      });
  });
};

export const addProduct = (name, price) => dispatch => {
  let items = JSON.parse(localStorage.getItem("products"));
  let id = [...items][items.length - 1].id;
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

  delete foundProduct.name;
  items[id - 1] = foundProduct;
  localStorage.setItem("products", JSON.stringify(items));

  dispatch(remove(id));
};