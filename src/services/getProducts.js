import axios from "axios";
import { API_URL, HEADERS } from "./settings";

const fromApiResponseToProducts = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

const getProducts = () => {
  const apiURL = `${API_URL}/products`;
  return axios
    .get(apiURL, {
      headers: HEADERS,
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(fromApiResponseToProducts);
};

export default getProducts;
