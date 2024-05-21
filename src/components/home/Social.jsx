import styles from "./Social.module.css";
import twitter from "../../assets/twitter.svg";
import tiktok from "../../assets/tiktok.svg";
import youtube from "../../assets/youtube.svg";

export default function Social() {
  return (
    <section className={styles.social}>
      <div className={styles.bgDarker} />
      <h2>Dołącz do nas</h2>
      <div className={styles.icons}>
        <button className={styles.icon}>
          <img alt="Twitter logo" src={twitter} />
          <p>Twitter</p>
        </button>
        <button className={styles.icon}>
          <img alt="TikTok logo" src={tiktok} />
          <p style={{ position: "relative", left: "-8px" }}>TikTok</p>
        </button>
        <button className={styles.icon}>
          <img alt="YouTube logo" src={youtube} />
          <p>YouTube</p>
        </button>
      </div>
    </section>
  );
}
