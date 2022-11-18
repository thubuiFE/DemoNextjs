/* eslint-disable @typescript-eslint/no-explicit-any */
// libs
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
// apis
import { getProduct } from "@/apis/getProduct";
// styles
import styles from "../../styles/ProductDetail.module.scss";

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
    <div>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Product Detail</title>
        <meta name="description" content="Product Detail Page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Product Detail" />
        <meta itemProp="description" content="Product Detail Page" />
        <meta itemProp="image" content={productInfo?.image_url} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content={`https://demo-nextjs-a0njdhojl-thubuife.vercel.app/detail/${id}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Product Detail" />
        <meta property="og:description" content="Product Detail Page" />
        <meta property="og:image" content={productInfo?.image_url} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="product-mage" />
      </Head>
      {isSuccess && (
        <div className={styles.detailProduct}>
          <Image
            src={productInfo?.image_url}
            alt="img-product"
            width={500}
            height={300}
          />
          <div className={styles.detailProductContent}>
            <div className={styles.productName}>
              {productInfo?.product_name}
            </div>
            <div className={styles.productDescription}>
              <span>Description: </span>
              {productInfo?.description}
            </div>
            <div className={styles.productImgPrice}>
              <span>Price: </span>
              {productInfo?.price}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormEdit;
