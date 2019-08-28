import { LOAD_PRODUCTS, ADD_PRODUCT } from "../actionTypes";
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