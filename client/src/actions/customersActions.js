import axios from "axios";
import { GET_CUSTOMERS, LOADING_CUSTOMERS } from "./types";

export const getCustomers = () => dispatch => {
  dispatch(setLoadingCustomers());
  axios
    .get("/api/customers")
    .then(res =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CUSTOMERS,
        payload: {}
      })
    );
};

export const setLoadingCustomers = () => {
  return {
    type: LOADING_CUSTOMERS
  };
};
