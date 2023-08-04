import styles from "./Header.module.css";
import headerLeft from "../../assets/headerLeft.svg";
import headerRight from "../../assets/headerRight.svg";
export default function header(props) {
  return (
    <header className={styles.header}>
      <img src={headerLeft} />
      <h2>{props.text}</h2>
      <img src={headerRight} className={styles.right} />
    </header>
  );
}
