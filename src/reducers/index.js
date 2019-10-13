import { combineReducers } from "redux";
import climateDataReducer from "./climateDataReducer";
export default combineReducers({
  climateData: climateDataReducer
});
