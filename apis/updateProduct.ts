/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from "axios";

interface PROPS {
  id_product?: string | string[];
  data: {
    product_name: string;
    description: string;
    price: number;
    image_url: string;
  };
  handleSuccess: (res: AxiosResponse) => void;
}

export const updateProduct = ({ id_product, data, handleSuccess }: PROPS) => {
  axios
    .put(`https://product-mnt-api.herokuapp.com/product/${id_product}`, {
      ...data,
    })
    .then((res) => handleSuccess(res.data))
    .catch(function (error) {
      console.log(error);
    });
};
