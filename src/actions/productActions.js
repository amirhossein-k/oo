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
import axios from "axios";

export const createProductAction =
  (namecar, factory, distance, skills,pic) => async (dispatch, getState) => {
    try {
      dispatch({ type: PROUCT_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "https://3liice-9000.preview.csb.app/api/product/newproduct",
        {  namecar, factory, distance, skills,pic },
        config
      );

      dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROUCT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
