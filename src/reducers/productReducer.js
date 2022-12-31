import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PROUCT_CREATE_REQUEST,
  PROUCT_CREATE_SUCCESS,
  PROUCT_CREATE_FAIL,
  PROUCT_DELETE_REQUEST,
  PROUCT_DELETE_SUCCESS,
  PROUCT_DELETE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
} from "../constants/productConstant";

export const productCreateReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case PROUCT_CREATE_REQUEST:
      return { loading: true };
    case PROUCT_CREATE_SUCCESS:
      return { loading: false, product: action.payload };
    case PROUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
