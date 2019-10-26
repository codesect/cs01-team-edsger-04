//import _ from "lodash";
import { FETCH_COUNTRIES } from "../actions/types";
var initialState = {
  countries: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, countries: action.payload };

    default:
      return state;
  }
};
