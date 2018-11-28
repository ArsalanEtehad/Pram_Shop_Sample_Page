import {put, fork, takeLatest, call} from 'redux-saga/effects';
import {FETCH_PRODUCTS,
} from '../actionTypes';
import * as productApi from '../../libs/product/api';
import {fetchProductsSuccess, fetchProductsFaiure } from './actions'

export function* fetchProducts(action){
  try{
    const products = yield call(productApi.fetchAll);
    yield put(fetchProductsSuccess(products));
  }catch(err){
    yield put(fetchProductsFaiure(err));
  }
}

export function* watchFetchProducts(){
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export default function* (){
  yield fork(watchFetchProducts);
}
