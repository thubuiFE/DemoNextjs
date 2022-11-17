/* eslint-disable @typescript-eslint/no-explicit-any */
// libs
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// components
import FormComponent from "../../components/FormComponent";
// apis
import { getProduct } from "@/apis/getProduct";

const FormEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState({
    product_name: "",
    description: "",
    price: 0,
    image_url: "",
  });
  const [isSuccess, setSuccess] = useState(false);

  const handleSuccess = (res: any) => {
    setProductInfo({ ...res?.data });
    setSuccess(true);
  };

  useEffect(() => {
    if (id) {
      getProduct({
        id,
        handleSuccess: (res: any) => handleSuccess(res),
      });
    }
  }, [id]);

  return (
    isSuccess && (
      <FormComponent id={id} initialValues={productInfo} type="edit" />
    )
  );
};

export default FormEdit;
