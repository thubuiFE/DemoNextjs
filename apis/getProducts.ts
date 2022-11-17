/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from "axios";

interface PROPS {
  handleSuccess: (res: AxiosResponse) => void;
}

export const getProducts = ({ handleSuccess }: PROPS) => {
  axios
    .get("https://product-mnt-api.herokuapp.com/products")
    .then((res) => handleSuccess(res?.data))
    .catch(function (error) {
      console.log(error);
    });
};
