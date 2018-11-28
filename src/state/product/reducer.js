import {FETCH_PRODUCTS, FETCH_PROCUCTS_SUCCESS, FETCH_PROCUCTS_FAILURE} from '../actionTypes.js'


const initialState = {
  isLoading: false,

}

export default (state= initialState, action)=>{
  switch(action.type){
    case FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_PROCUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.products
      };

    case FETCH_PROCUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };


    default:
      return state;
  }
}
