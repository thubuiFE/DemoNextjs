// libs
import { QueryClient, QueryClientProvider } from "react-query";
// styles
import styles from "../styles/Home.module.css";
// components
import NavBarComponent from "@components/NavBarComponent";
import ProductCardComponent from "@components/ProductCardComponent";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.container}>
        <main className={styles.main}>
          <NavBarComponent />
          <div className={styles.productBody}>
            <ProductCardComponent />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
}
