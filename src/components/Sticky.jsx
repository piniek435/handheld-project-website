import styles from "./Sticky.module.css";
import stickyHeader from "../assets/sticky.svg";
import stickyHeaderMobile from "../assets/stickyMobile.svg";
import home from "../assets/home.svg";
import { NavLink } from "react-router-dom";

export default function Sticky() {
  return (
    <nav className={styles.sticky}>
      <img src={stickyHeader} className={styles.stickyBg} />
      <img src={stickyHeaderMobile} className={styles.stickyBgMobile} />
      <div className={styles.stickyBlur} />
      <div className={styles.stickyContent}>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { filter: `drop-shadow(0px 0px 1.5px #ddccf4)` } : {};
          }}
          to="/contact"
          className={styles.stickyLink}
        >
          KONTAKT
        </NavLink>
        <NavLink
          className={styles.stickyIcon}
          style={({ isActive }) => {
            return isActive ? { filter: `drop-shadow(0px 0px 1.5px #ddccf4)` } : {};
          }}
          to="/"
        >
          <img alt="Home icon" src={home} />
        </NavLink>
        <NavLink to="/store" className={styles.stickyLink}>
          KUP TERAZ
        </NavLink>
      </div>
    </nav>
  );
}
