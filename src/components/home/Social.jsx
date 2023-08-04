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
        <div className={styles.icon}>
          <img alt="Twitter logo" src={twitter} />
          <p>Twitter</p>
        </div>
        <div className={styles.icon}>
          <img alt="TikTok logo" src={tiktok} />
          <p style={{ position: "relative", left: "-8px" }}>TikTok</p>
        </div>
        <div className={styles.icon}>
          <img alt="YouTube logo" src={youtube} />
          <p>YouTube</p>
        </div>
      </div>
    </section>
  );
}
