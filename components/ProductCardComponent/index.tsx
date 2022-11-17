/* eslint-disable @typescript-eslint/no-explicit-any */
// libs
import Image from "next/image";
// components
import ListButton from "@components/ListButtonComponent";
import LoadingSpinner from "@components/LoadingComponent";
// hooks
import { useListProducts } from "../../hooks/useListProducts";
// styles
import styles from "../../styles/ProductCard.module.scss";

const ProductCardComponent = () => {
  const { data, isLoading, isFetching } = useListProducts();
  const dataProduct = data?.data?.data;

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    !isLoading &&
    dataProduct?.map((item: any) => (
      <div className={styles.productCardComponentWrapper} key={item?._id}>
        <div className={styles.productCardComponentWrapperInner}>
          <Image
            src={item?.image_url}
            alt="product_img"
            width="300"
            height="300"
          />
          <div className={styles.productContentWrapper}>
            <div className={styles.productContent}>
              <div className={styles.productName}>{item?.product_name}</div>
              <div className={styles.productPrice}>{item?.price}</div>
            </div>
            <ListButton id={item?._id} />
          </div>
        </div>
      </div>
    ))
  );
};

export default ProductCardComponent;
