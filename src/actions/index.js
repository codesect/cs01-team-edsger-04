import climateData from "../apis/climateData";
import { FETCH_COUNTRIES } from "./types";

export const fetchCountries = () => async dispatch => {
  const response = await climateData.get("/locations/countries");
  dispatch({ type: FETCH_COUNTRIES, payload: response.data });
};
