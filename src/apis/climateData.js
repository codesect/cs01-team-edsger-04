import axios from "axios";

export default axios.create({
  baseURL: "https://www.climatewatchdata.org/api/v1"
});
