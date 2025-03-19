import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer({ scrollToContact }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className={styles.box}>
      <div className={styles.footerContainerLeft}>
        <h1 className={styles.title}>Eureka Investments</h1>
        <p className={styles.subTitle}>
          Helping Americans relocate in Northern Spain
        </p>
        <span>invest@eurekaspain.com</span>
      </div>
      <div className={styles.footerContainerRight}>
        <button onClick={scrollToTop} className={styles.footerButton}>
          <p className={styles.footerLink}>home</p>
        </button>
        {/* <Link to="/about" className={styles.link}>
          <p className={styles.footerLink}>about</p>
        </Link> */}
        <button onClick={scrollToContact} className={styles.footerButton}>
          <p className={styles.footerLink}>contact</p>
        </button>
      </div>
    </div>
  );
}
