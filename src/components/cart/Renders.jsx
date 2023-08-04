import top from "../../assets/renderBlack/black_top.webp";
import angle from "../../assets/renderBlack/black_angle.webp";
import back from "../../assets/renderBlack/black_back.webp";
import bottom from "../../assets/renderBlack/black_bottom.webp";
import front from "../../assets/renderBlack/black_front.webp";
import R from "../../assets/renderBlack/black_R.webp";
import styles from "./Renders.module.css";

import topB from "../../assets/renderBlue/blue_top.webp";
import angleB from "../../assets/renderBlue/blue_angle.webp";
import backB from "../../assets/renderBlue/blue_back.webp";
import bottomB from "../../assets/renderBlue/blue_bottom.webp";
import frontB from "../../assets/renderBlue/blue_front.webp";
import RB from "../../assets/renderBlue/blue_R.webp";

import topW from "../../assets/renderWhite/white_top.webp";
import angleW from "../../assets/renderWhite/white_angle.webp";
import backW from "../../assets/renderWhite/white_back.webp";
import bottomW from "../../assets/renderWhite/white_bottom.webp";
import frontW from "../../assets/renderWhite/white_front.webp";
import RW from "../../assets/renderWhite/white_R.webp";

export default function Renders({ color }) {
  return (
    <>
      {color === "Czarny" && (
        <div className={styles.slide}>
          <img src={top} style={{ filter: "brightness(1.5)" }} />
          <img src={bottom} style={{ filter: "brightness(1.5)" }} />
          <img src={angle} style={{ filter: "brightness(1.5)" }} />
          <img src={back} style={{ filter: "brightness(1.5)" }} />
          <img src={front} style={{ filter: "brightness(1.5)" }} />
          <img src={R} style={{ filter: "brightness(1.5)" }} />
        </div>
      )}
      {color === "Niebieski" && (
        <div className={styles.slide}>
          <img src={topB} style={{ filter: "brightness(1.2)" }} />
          <img src={bottomB} style={{ filter: "brightness(1.2)" }} />
          <img src={angleB} style={{ filter: "brightness(1.2)" }} />
          <img src={backB} style={{ filter: "brightness(1.2)" }} />
          <img src={frontB} style={{ filter: "brightness(1.2)" }} />
          <img src={RB} style={{ filter: "brightness(1.2)" }} />
        </div>
      )}
      {color === "Biały" && (
        <div className={styles.slide}>
          <img src={topW} style={{ filter: "brightness(0.8)" }} />
          <img src={bottomW} style={{ filter: "brightness(0.8)" }} />
          <img src={angleW} style={{ filter: "brightness(0.8)" }} />
          <img src={backW} style={{ filter: "brightness(0.8)" }} />
          <img src={frontW} style={{ filter: "brightness(0.8)" }} />
          <img src={RW} style={{ filter: "brightness(0.8)" }} />
        </div>
      )}
    </>
  );
}
