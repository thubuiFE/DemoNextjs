// libs
import React from "react";
// styles
import styles from "../../styles/LoadingComponent.module.scss";

const LoadingSpinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.loadingSpinner}></div>
  </div>
);

export default LoadingSpinner;
