import { useQuery } from "react-query";
// import { getProducts } from "@/apis/getProducts";
import axios from "axios";

export const useListProducts = () =>
  useQuery("getProductes", () =>
    axios.get("https://product-mnt-api.herokuapp.com/products")
  );
