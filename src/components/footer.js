import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.footerContainerLeft}>
        <h1 className={styles.title}>Eureka</h1>
        <p className={styles.subTitle}>
          Retirement made easy in Northern Spain
        </p>
        <span>hello@eurekainvestments.com</span>
      </div>
      <div className={styles.footerContainerRight}>
        <Link to="/" className={styles.link}>
          home
        </Link>
        <Link to="/about" className={styles.link}>
          about
        </Link>
        <Link to="/contact" className={styles.link}>
          contact
        </Link>
      </div>
    </div>
  );
}
