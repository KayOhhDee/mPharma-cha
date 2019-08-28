import { LOAD_PRODUCTS } from "../actionTypes";
import axios from "axios";

export function products(items) {
  return {
    type: LOAD_PRODUCTS,
    items
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