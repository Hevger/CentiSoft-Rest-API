import { GET_CUSTOMERS, LOADING_CUSTOMERS } from "../actions/types";

const initialState = {
  customers: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CUSTOMERS:
      return {
        ...state,
        loading: true
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
