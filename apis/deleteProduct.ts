/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from "axios";

export function deleteProduct({
  id_product,
  handleSuccess,
}: {
  id_product: string;
  handleSuccess: (res: AxiosResponse) => void;
}): unknown {
  return axios
    .delete(`https://product-mnt-api.herokuapp.com/product/${id_product}`)
    .then((res) => {
      if (res?.data) {
        handleSuccess(res?.data);
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
}
