// libs
import Link from "next/link";
// styles
import styles from "../../styles/NavBarComponent.module.scss";

const NavBarComponent = () => (
  <div className={styles.navBarComponentWrapper}>
    <div className={styles.navBarComponentWrapperInner}>
      <h3 className={styles.title}>E commerce</h3>
      <div className={styles.menuNavBar}>
        <button>
          <Link href="/create">Create Product</Link>
        </button>
      </div>
    </div>
  </div>
);

export default NavBarComponent;
