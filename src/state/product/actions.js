import {FETCH_PRODUCTS, FETCH_PROCUCTS_SUCCESS, FETCH_PROCUCTS_FAILURE} from '../actionTypes.js'


export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PROCUCTS_SUCCESS,
  products,
});

export const fetchProductsFaiure  = (error) => ({
  type: FETCH_PROCUCTS_FAILURE,
  error,
});
