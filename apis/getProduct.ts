import axios, { AxiosResponse } from "axios";
interface PROPS {
  id: string | string[];
  // eslint-disable-next-line no-unused-vars
  handleSuccess: (res: AxiosResponse) => void;
}
export const getProduct = ({ id, handleSuccess }: PROPS) => {
  const response = axios
    .get(`https://product-mnt-api.herokuapp.com/product/${id}`)
    .then((res) => handleSuccess(res?.data));
  return response;
};
