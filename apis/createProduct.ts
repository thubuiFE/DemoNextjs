/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from "axios";

interface PROPS {
  data: {
    product_name: string;
    description: string;
    price: number;
    image_url: string;
  };
  handleSuccess: (res: AxiosResponse) => void;
}

export const createProduct = ({ data, handleSuccess }: PROPS) => {
  axios
    .post("https://product-mnt-api.herokuapp.com/product", {
      ...data,
    })
    .then((res) => handleSuccess(res.data))
    .catch(function (error) {
      console.log(error);
    });
};
