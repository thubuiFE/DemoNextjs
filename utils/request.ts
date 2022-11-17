import axios from "axios";

export const AXIOS_INSTANCE = axios.create({
  baseURL: "https://product-mnt-api.herokuapp.com/products",
});
