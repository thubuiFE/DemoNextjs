/* eslint-disable @typescript-eslint/no-explicit-any */
// libs
import { GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
// styles
import styles from "../../styles/ProductDetail.module.scss";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get(
    `https://product-mnt-api.herokuapp.com/product/${id}`
  );
  const product_detail = await res?.data?.data;

  return { props: { product_detail, id } };
};

interface PROPS {
  product_detail: {
    product_name: string;
    description: string;
    price: number;
    image_url: string;
  };
  id: string;
}

const FormEdit = ({ product_detail, id }: PROPS) => (
  <div>
    <Head>
      {/* <!-- HTML Meta Tags --> */}
      <title>{product_detail?.product_name}</title>
      <meta name="description" content={product_detail?.description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="noindex,nofollow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemProp="name" content={product_detail?.product_name} />
      <meta itemProp="description" content={product_detail?.description} />
      <meta itemProp="image" content={product_detail?.image_url} />

      {/* <!-- Facebook Meta Tags --> */}
      <meta
        property="og:url"
        content={`https://demo-nextjs-a0njdhojl-thubuife.vercel.app/detail/${id}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={product_detail?.product_name} />
      <meta property="og:description" content={product_detail?.description} />
      <meta property="og:image" content={product_detail?.image_url} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="product-mage" />
    </Head>

    <div className={styles.detailProduct}>
      <Image
        src={product_detail?.image_url}
        alt="img-product"
        width={500}
        height={300}
      />
      <div className={styles.detailProductContent}>
        <div className={styles.productName}>{product_detail?.product_name}</div>
        <div className={styles.productDescription}>
          <span>Description: </span>
          {product_detail?.description}
        </div>
        <div className={styles.productImgPrice}>
          <span>Price: </span>
          {product_detail?.price}
        </div>
      </div>
    </div>
  </div>
);
export default FormEdit;
